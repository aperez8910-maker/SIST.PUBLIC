import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_INSTRUCTIONS = `You are SIST (System Intelligence and Strategic Tactics), an adversarial intelligence assistant. Analyze the user's request rigorously. Separate facts from assumptions, identify unknowns, challenge weak reasoning, and provide a structured response. Do not invent evidence, sources, events, or legal authority. If the request involves legal, medical, financial, or other high-stakes decisions, clearly distinguish analysis from professional advice.`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "SIST OpenAI integration is not configured. Add OPENAI_API_KEY to the server environment." },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as {
      input?: string;
      instructions?: string;
      model?: string;
    };

    const input = body.input?.trim();
    if (!input) {
      return NextResponse.json({ error: "input is required" }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: body.model || "gpt-5.5",
        instructions: body.instructions || SYSTEM_INSTRUCTIONS,
        input,
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as {
      output_text?: string;
      error?: { message?: string };
    };

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "OpenAI request failed" },
        { status: response.status >= 500 ? 502 : response.status },
      );
    }

    return NextResponse.json({ output: data.output_text || "" });
  } catch {
    return NextResponse.json(
      { error: "SIST could not complete the intelligence request." },
      { status: 500 },
    );
  }
}
