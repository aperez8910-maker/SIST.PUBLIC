// Canonical public pipeline shared by every description and explorer.
export const pipeline = [
  ["01", "INTAKE", "Define the objective, scope, constraints, and record boundary.", "GATE 1"],
  ["02", "LIBRARIAN", "Index sources and preserve their provenance.", "RECORD"],
  ["03", "INGESTOR", "Structure facts, claims, dates, actors, and evidence gaps.", "GATE 2"],
  ["04", "RESEARCHER", "Develop missing context, sources, and expected evidence.", "COLLECTION"],
  ["05", "ANALYST", "Map timelines, contradictions, and competing explanations.", "GATE 3"],
  ["06", "LAWCLERK", "Test relevant rules, standards, and procedure.", "APPLIED"],
  ["07", "COUNTERMEASURES", "Challenge assumptions, weak evidence, and failure paths.", "GATE 4"],
  ["08", "BRIEFER", "Summarize supported findings, uncertainty, and options.", "SYNTHESIS"],
  ["09", "DEPLOY MASTER", "Release the reviewed output under final human authority.", "GATE 5"],
] as const;
