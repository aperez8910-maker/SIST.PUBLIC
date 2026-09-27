import DivisionDetail from "@/components/DivisionDetail";

export default function CriminalDefenseDivision() {
  return (
    <DivisionDetail
      number="01"
      sealSrc="/division-seals/criminal-defense.webp"
      eyebrow="CRIMINAL DEFENSE"
      title="CRIMINAL DEFENSE DIVISION"
      intro="The Criminal Defense Division applies structured intelligence methods to criminal case records, discovery, evidence, procedure, contradictions, and defense strategy support."
      focus={[
        "Case record and discovery analysis",
        "Timeline and event reconstruction",
        "Evidence and contradiction mapping",
        "Procedural and issue research",
        "Adversarial defense strategy support",
      ]}
      mission="Build a source-grounded defense intelligence picture before critical decisions are made, with the record, weaknesses, contradictions, and unresolved issues kept visible."
      approach="Separate allegations from evidence, reconstruct the procedural posture, map inconsistencies and evidentiary gaps, then pressure-test competing theories through adversarial review."
      tone="gold"
    />
  );
}
