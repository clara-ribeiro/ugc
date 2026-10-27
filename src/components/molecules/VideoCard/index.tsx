"use client";

import { useEffect, useRef } from "react";
import PhoneFrame from "@/components/molecules/PhoneFrame";
import { Playback, Screen } from "@/components/molecules/PhoneFrame/styles";
import type { VideoItem } from "@/content/landing";
import { Category, Description, Hook, Meta, Root, Title } from "./styles";

export type VideoOpenDetail = {
  item: VideoItem;
  origin: DOMRect;
  currentTime: number;
};

export type VideoCardProps = {
  item: VideoItem;
  lifted?: boolean;
  priority?: boolean;
  onOpen: (detail: VideoOpenDetail) => void;
};

export default function VideoCard({
  item,
  lifted = false,
  priority = false,
  onOpen,
}: VideoCardProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    if (lifted) {
      node.pause();
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const warm = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.preload = "auto";
        }
      },
      { rootMargin: "280px 0px" },
    );
    warm.observe(node);

    if (reduceMotion) {
      return () => warm.disconnect();
    }

    const play = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          node.preload = "auto";
          void node.play().catch(() => undefined);
        } else {
          node.pause();
        }
      },
      { threshold: 0.45, rootMargin: "-8% 0px -8% 0px" },
    );
    play.observe(node);

    return () => {
      warm.disconnect();
      play.disconnect();
    };
  }, [lifted]);

  const open = () => {
    const phone = phoneRef.current;
    const video = videoRef.current;
    if (!phone) {
      return;
    }
    onOpen({
      item,
      origin: phone.getBoundingClientRect(),
      currentTime: video?.currentTime ?? 0,
    });
  };

  return (
    <Root>
      <PhoneFrame frameRef={phoneRef} lifted={lifted}>
        <Screen
          as="button"
          type="button"
          clickable
          aria-label={`Open ${item.product} video`}
          aria-haspopup="dialog"
          onClick={open}
        >
          <Playback
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            disablePictureInPicture
          />
        </Screen>
      </PhoneFrame>
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
