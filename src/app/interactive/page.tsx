import InteractiveWorkFloor from "@/components/InteractiveWorkFloor";
import PageStructuredData from "@/components/PageStructuredData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/interactive");

export default function Page() {
  return <><PageStructuredData path="/interactive" /><InteractiveWorkFloor /></>;
}
