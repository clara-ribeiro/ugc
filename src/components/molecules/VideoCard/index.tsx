"use client";

import { useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/content/landing";
import {
  Category,
  Description,
  Earpiece,
  HomeBar,
  Hook,
  Meta,
  Phone,
  Playback,
  Root,
  Screen,
  SideButton,
  Title,
} from "./styles";

export type VideoCardProps = {
  item: VideoItem;
};

export default function VideoCard({ item }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || userPaused.current) {
          return;
        }
        if (entry.isIntersecting) {
          void node.play().catch(() => undefined);
        } else {
          node.pause();
        }
      },
      { threshold: 0.6, rootMargin: "-12% 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const node = videoRef.current;
    if (!node) {
      return;
    }
    if (node.paused) {
      userPaused.current = false;
      void node.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      node.pause();
    }
  };

  return (
    <Root>
      <Phone>
        <Earpiece aria-hidden />
        <SideButton pos="volUp" aria-hidden />
        <SideButton pos="volDown" aria-hidden />
        <SideButton pos="power" aria-hidden />
        <Screen
          type="button"
          aria-label={playing ? `Pause ${item.product} video` : `Play ${item.product} video`}
          onClick={togglePlayback}
        >
          <Playback
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </Screen>
        <HomeBar aria-hidden />
      </Phone>
      <Meta>
        <Category>
          {item.category} · {item.product} · {item.duration}
        </Category>
        <Title>{item.title}</Title>
        <Hook>“{item.hook}”</Hook>
        <Description>{item.description}</Description>
      </Meta>
    </Root>
  );
}
