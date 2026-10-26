import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import { landing } from "@/content/landing";
import { Body, Grid, Index, Intro, Section, Step, Title } from "@/components/organisms/ProcessSection/styles";

export default function MethodSection() {
  const method = landing.method;

  return (
    <Section id={method.id} aria-labelledby={method.titleId}>
      <Intro>
        <SectionTitle id={method.titleId}>{method.title}</SectionTitle>
        <SectionDescription>{method.description}</SectionDescription>
      </Intro>
      <Grid>
        {method.steps.map((step, index) => (
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
