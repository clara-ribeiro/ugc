import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import { landing } from "@/content/landing";
import { Answer, Intro, Item, List, Question, Section } from "./styles";

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
          <Item key={item.question} open={index === 0}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </Item>
        ))}
      </List>
    </Section>
  );
}
