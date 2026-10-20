import Image from "next/image";
import Button from "@/components/atoms/Button";
import StatusBadge from "@/components/atoms/StatusBadge";
import WorkCredits from "@/components/molecules/WorkCredits";
import { landing, mailtoHref } from "@/content/landing";
import {
  Actions,
  Copy,
  Corner,
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
          <Corner pos="tl" />
          <Corner pos="tr" />
          <Corner pos="bl" />
          <Corner pos="br" />
          <PhotoFrame>
            <Image
              src={hero.photoSrc}
              alt={hero.photoAlt}
              fill
              sizes="(max-width: 767px) min(100vw, 22rem), (max-width: 1023px) 22rem, 25rem"
              quality={95}
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
