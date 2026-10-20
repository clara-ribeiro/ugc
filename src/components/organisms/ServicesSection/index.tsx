import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import { landing } from "@/content/landing";
import { Footnote, Grid, Intro, Section } from "./styles";

export default function ServicesSection() {
  const services = landing.services;

  return (
    <Section id={services.id} aria-labelledby={services.titleId}>
      <Intro>
        <SectionTitle id={services.titleId}>{services.title}</SectionTitle>
        <SectionDescription>{services.description}</SectionDescription>
      </Intro>
      <Grid>
        {services.packages.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </Grid>
      <Footnote>{services.footnote}</Footnote>
    </Section>
  );
}
