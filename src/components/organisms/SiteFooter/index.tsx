import { landing, mailtoHref } from "@/content/landing";
import { Copyright, Description, Email, Inner, Quote, Root } from "./styles";

export default function SiteFooter() {
  const footer = landing.footer;

  return (
    <Root>
      <Inner>
        <Quote>{footer.quote}</Quote>
        <Description>
          {landing.person.name}, {landing.person.jobTitle}. {footer.description}
        </Description>
        <Email href={mailtoHref()}>{landing.site.contactEmail}</Email>
        <Copyright>{footer.copyright}</Copyright>
      </Inner>
    </Root>
  );
}
