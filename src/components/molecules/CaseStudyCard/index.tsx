import type { CaseStudy } from "@/content/landing";
import { Body, Header, Label, Root, Strong, Title } from "./styles";

export type CaseStudyCardProps = {
  item: CaseStudy;
};

export default function CaseStudyCard({ item }: CaseStudyCardProps) {
  return (
    <Root>
      <Header>
        <Title>{item.title}</Title>
        <Label>{item.label}</Label>
      </Header>
      <Body>
        <p>
          <Strong>Brief:</Strong> {item.brief}
        </p>
        <p>
          <Strong>Hook:</Strong> {item.hook}
        </p>
        <p>
          <Strong>On-screen:</Strong> {item.visual}
        </p>
        <p>
          <Strong>Ask:</Strong> {item.cta}
        </p>
      </Body>
    </Root>
  );
}
