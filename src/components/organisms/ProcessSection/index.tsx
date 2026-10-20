import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import { landing } from "@/content/landing";
import { Body, Grid, Index, Intro, Section, Step, Title } from "./styles";

export default function ProcessSection() {
  const process = landing.process;

  return (
    <Section id={process.id} aria-labelledby={process.titleId}>
      <Intro>
        <SectionTitle id={process.titleId}>{process.title}</SectionTitle>
        <SectionDescription>{process.description}</SectionDescription>
      </Intro>
      <Grid>
        {process.steps.map((step, index) => (
          <Step key={step.title}>
            <Index>0{index + 1}</Index>
            <Title>{step.title}</Title>
            <Body>{step.description}</Body>
          </Step>
        ))}
      </Grid>
    </Section>
  );
}
