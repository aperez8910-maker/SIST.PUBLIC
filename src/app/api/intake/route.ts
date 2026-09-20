/**
 * Public intake is closed: the DPA does not authorize Web3Forms.
 * Do not restore forwarding via an environment switch. Before reopening,
 * implement an approved receiver and shared server-side abuse protection.
 * See docs/intake-release-gates.md.
 */
export async function POST() {
  // Reject before parsing, logging, storing, or forwarding request content.
  return Response.json(
    {
      ok: false,
      code: "INTAKE_CLOSED",
      error: "Online intake is currently closed. No submission was accepted.",
    },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
