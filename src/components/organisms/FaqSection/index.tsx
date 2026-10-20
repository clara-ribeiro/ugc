import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import FaqItem from "@/components/molecules/FaqItem";
import { landing } from "@/content/landing";
import { Intro, List, Section } from "./styles";

export default function FaqSection() {
  const faq = landing.faq;

  return (
    <Section id={faq.id} aria-labelledby={faq.titleId}>
      <Intro>
        <SectionTitle id={faq.titleId}>{faq.title}</SectionTitle>
        <SectionDescription>{faq.description}</SectionDescription>
      </Intro>
      <List>
        {faq.items.map((item, index) => (
          <FaqItem key={item.question} item={item} defaultOpen={index === 0} />
        ))}
      </List>
    </Section>
  );
}
