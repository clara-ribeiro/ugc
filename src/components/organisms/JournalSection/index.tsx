import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import CaseStudyCard from "@/components/molecules/CaseStudyCard";
import { landing } from "@/content/landing";
import { Grid, Intro, Section } from "./styles";

export default function JournalSection() {
  const journal = landing.journal;

  return (
    <Section id={journal.id} aria-labelledby={journal.titleId}>
      <Intro>
        <SectionTitle id={journal.titleId}>{journal.title}</SectionTitle>
        <SectionDescription>{journal.description}</SectionDescription>
      </Intro>
      <Grid>
        {journal.items.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </Grid>
    </Section>
  );
}
