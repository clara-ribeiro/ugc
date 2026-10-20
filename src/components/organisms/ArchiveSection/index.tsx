import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import VideoCard from "@/components/molecules/VideoCard";
import { landing } from "@/content/landing";
import { Grid, Intro, Section } from "./styles";

export default function ArchiveSection() {
  const archive = landing.archive;

  return (
    <Section id={archive.id} aria-labelledby={archive.titleId}>
      <Intro>
        <SectionTitle id={archive.titleId}>{archive.title}</SectionTitle>
        <SectionDescription>{archive.description}</SectionDescription>
      </Intro>
      <Grid>
        {archive.items.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </Grid>
    </Section>
  );
}
