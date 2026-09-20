const MAX_FIELD_LENGTHS = {
  name: 120,
  email: 180,
  phone: 40,
  organization: 160,
  contact_preference: 40,
  jurisdiction: 160,
  matter_type: 120,
  urgency: 120,
  confidentiality: 120,
  deadline: 120,
  parties: 1500,
  message: 6000,
  objective: 2500,
  evidence: 2500,
  consent: 40,
} as const;

type IntakeField = keyof typeof MAX_FIELD_LENGTHS;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function createReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `SIST-${date}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (clean(body.botcheck, 100)) {
      return Response.json({ ok: true, reference: "RECEIVED" });
    }

    const intake = Object.fromEntries(
      (Object.keys(MAX_FIELD_LENGTHS) as IntakeField[]).map((field) => [
        field,
        clean(body[field], MAX_FIELD_LENGTHS[field]),
      ]),
    ) as Record<IntakeField, string>;

    if (!intake.name || !intake.email || !intake.matter_type || !intake.urgency || !intake.confidentiality || !intake.message || !intake.objective || intake.consent !== "Agreed") {
      return Response.json({ ok: false, error: "Complete every required field and confirm authorization before submitting." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(intake.email)) {
      return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return Response.json({ ok: false, error: "The intake channel is temporarily unavailable. Contact SIST support." }, { status: 503 });
    }

    const reference = createReference();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "SIST Landing Intake",
        subject: `SIST Intake — ${intake.matter_type} — ${reference}`,
        replyto: intake.email,
        reference,
        ...intake,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !result.success) {
      console.error("Web3Forms rejected intake", response.status, result.message);
      return Response.json({ ok: false, error: "The intake could not be transmitted. Try again or contact SIST support." }, { status: 502 });
    }

    return Response.json({ ok: true, reference });
  } catch (error) {
    console.error("Intake submission failed", error);
    return Response.json({ ok: false, error: "The intake channel encountered an error. Try again." }, { status: 500 });
  }
}
