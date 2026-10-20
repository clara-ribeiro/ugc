import SectionTitle from "@/components/atoms/SectionTitle";
import { landing } from "@/content/landing";
import {
  Body,
  Grid,
  Intro,
  Lead,
  Niche,
  NicheBody,
  NichesTitle,
  NicheTitle,
  Section,
} from "./styles";

export default function AboutSection() {
  const about = landing.about;

  return (
    <Section id={about.id} aria-labelledby={about.titleId}>
      <Intro>
        <SectionTitle id={about.titleId}>{about.title}</SectionTitle>
        <Lead>{about.lead}</Lead>
        <Body>{about.body}</Body>
      </Intro>
      <NichesTitle>{about.nichesTitle}</NichesTitle>
      <Grid>
        {about.niches.map((niche) => (
          <Niche key={niche.title}>
            <NicheTitle>{niche.title}</NicheTitle>
            <NicheBody>{niche.description}</NicheBody>
          </Niche>
        ))}
      </Grid>
    </Section>
  );
}
