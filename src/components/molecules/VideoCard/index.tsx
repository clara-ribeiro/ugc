import type { VideoItem } from "@/content/landing";
import {
  Category,
  Description,
  Frame,
  Hook,
  Placeholder,
  Product,
  Root,
  Title,
} from "./styles";

export type VideoCardProps = {
  item: VideoItem;
};

export default function VideoCard({ item }: VideoCardProps) {
  return (
    <Root>
      <Frame data-frame>
        <Placeholder>
          <Product>{item.product}</Product>
          <span>
            {item.formatLabel} · {item.duration}
          </span>
        </Placeholder>
      </Frame>
      <div>
        <Category>
          {item.category} · {item.product}
        </Category>
        <Title>{item.title}</Title>
        <Hook>“{item.hook}”</Hook>
        <Description>{item.description}</Description>
      </div>
    </Root>
  );
}
