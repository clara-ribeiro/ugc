import ContactActions from "@/components/molecules/ContactActions";
import WorkCredits from "@/components/molecules/WorkCredits";
import { landing } from "@/content/landing";
import { Actions, Copyright, Credits, Description, Inner, Quote, Root } from "./styles";

export default function SiteFooter() {
  const footer = landing.footer;

  return (
    <Root>
      <Inner>
        <Quote>{footer.quote}</Quote>
        <Description>
          {landing.person.name}, {landing.person.jobTitle}. {footer.description}
        </Description>
        <Actions>
          <ContactActions align="center" />
        </Actions>
      </Inner>
      <Credits>
        <WorkCredits />
      </Credits>
      <Copyright>{footer.copyright}</Copyright>
    </Root>
  );
}
