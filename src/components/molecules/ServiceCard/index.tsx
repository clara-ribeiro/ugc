"use client";

import ContactActions from "@/components/molecules/ContactActions";
import type { ServicePackage } from "@/content/landing";
import {
  Badge,
  Bullet,
  Description,
  Feature,
  FeatureList,
  Name,
  Price,
  PriceSuffix,
  Root,
} from "./styles";

export type ServiceCardProps = {
  item: ServicePackage;
};

export default function ServiceCard({ item }: ServiceCardProps) {
  const featured = Boolean(item.featured);

  return (
    <Root featured={featured}>
      {item.badge ? <Badge>{item.badge}</Badge> : null}
      <Name>{item.name}</Name>
      <Price>
        {item.price}
        {item.priceSuffix ? <PriceSuffix>{item.priceSuffix}</PriceSuffix> : null}
      </Price>
      <Description featured={featured}>{item.description}</Description>
      <FeatureList>
        {item.features.map((feature) => (
          <Feature key={feature} featured={featured}>
            <Bullet featured={featured} aria-hidden>
              •
            </Bullet>
            <span>{feature}</span>
          </Feature>
        ))}
      </FeatureList>
      <ContactActions
        packageId={item.id}
        primaryLabel={item.ctaLabel}
        primaryVariant={featured ? "inverse" : "outline"}
        stack
        tone={featured ? "inverse" : undefined}
      />
    </Root>
  );
}
