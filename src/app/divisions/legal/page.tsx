import { permanentRedirect } from "next/navigation";

export default function LegacyLegalDivision() {
  permanentRedirect("/divisions/criminal-defense");
}
