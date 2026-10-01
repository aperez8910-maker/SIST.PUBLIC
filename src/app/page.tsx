import HomePage from "@/components/HomePage";
import PageStructuredData from "@/components/PageStructuredData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/");

export default function Page() {
  return <><PageStructuredData path="/" /><HomePage /></>;
}
