import Image from "next/image";
import Button from "@/components/atoms/Button";
import StatusBadge from "@/components/atoms/StatusBadge";
import WorkCredits from "@/components/molecules/WorkCredits";
import { landing, mailtoHref } from "@/content/landing";
import {
  Actions,
  Copy,
  Credentials,
  Description,
  Emphasis,
  Layout,
  PhotoFrame,
  PhotoWrap,
  Section,
  Title,
} from "./styles";

export default function Hero() {
  const hero = landing.hero;

  return (
    <Section aria-labelledby={hero.titleId}>
      <Layout>
        <Copy>
          <StatusBadge>{hero.availability}</StatusBadge>
          <Title id={hero.titleId}>
            {hero.titleLead} <Emphasis>{hero.titleEmphasis}</Emphasis> {hero.titleTrail}
          </Title>
          <Description>{hero.description}</Description>
          <Actions>
            <Button href={mailtoHref(hero.primarySubject)}>{hero.primaryCta}</Button>
            <Button href="#work" variant="ghost">
              {hero.secondaryCta}
            </Button>
          </Actions>
        </Copy>
        <PhotoWrap>
          <PhotoFrame>
            <Image
              src={hero.photoSrc}
              alt={hero.photoAlt}
              width={800}
              height={1000}
              sizes="(max-width: 767px) 100vw, 400px"
              priority
            />
          </PhotoFrame>
        </PhotoWrap>
      </Layout>
      <Credentials>
        <WorkCredits />
      </Credentials>
    </Section>
  );
}
