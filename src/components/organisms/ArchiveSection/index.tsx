"use client";

import { useEffect, useState } from "react";
import SectionDescription from "@/components/atoms/SectionDescription";
import SectionTitle from "@/components/atoms/SectionTitle";
import VideoCard, { type VideoOpenDetail } from "@/components/molecules/VideoCard";
import VideoModal from "@/components/organisms/VideoModal";
import { landing } from "@/content/landing";
import { Grid, Intro, Section } from "./styles";

export default function ArchiveSection() {
  const archive = landing.archive;
  const [open, setOpen] = useState<VideoOpenDetail | null>(null);

  useEffect(() => {
    const nodes: HTMLLinkElement[] = [];
    landing.archive.items.slice(0, 2).forEach((item) => {
      const poster = document.createElement("link");
      poster.rel = "preload";
      poster.as = "image";
      poster.href = item.poster;
      document.head.appendChild(poster);
      nodes.push(poster);
    });
    return () => {
      nodes.forEach((node) => node.remove());
    };
  }, []);

  return (
    <Section id={archive.id} aria-labelledby={archive.titleId}>
      <Intro>
        <SectionTitle id={archive.titleId}>{archive.title}</SectionTitle>
        <SectionDescription>{archive.description}</SectionDescription>
      </Intro>
      <Grid>
        {archive.items.map((item, index) => (
          <VideoCard
            key={item.id}
            item={item}
            priority={index < 2}
            lifted={open?.item.id === item.id}
            onOpen={setOpen}
          />
        ))}
      </Grid>
      {open ? <VideoModal detail={open} onClose={() => setOpen(null)} /> : null}
    </Section>
  );
}
