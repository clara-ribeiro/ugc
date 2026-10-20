import HomeTemplate from "@/components/templates/HomeTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLandingJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={buildLandingJsonLd()} />
      <HomeTemplate />
    </>
  );
}
