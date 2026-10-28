"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { createPortal } from "react-dom";
import PhoneFrame from "@/components/molecules/PhoneFrame";
import { Cover, Playback, Screen } from "@/components/molecules/PhoneFrame/styles";
import type { VideoOpenDetail } from "@/components/molecules/VideoCard";
import { landing } from "@/content/landing";
import {
  Beat,
  BeatLabel,
  Beats,
  Block,
  Body,
  Close,
  Copy,
  DestPhone,
  Facts,
  Heading,
  Kicker,
  Label,
  Overlay,
  Panel,
  Quote,
  Slot,
  Traveler,
} from "./styles";

export type VideoModalProps = {
  detail: VideoOpenDetail;
  onClose: () => void;
};

const MOVE_MS = 640;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const FLIGHT_OPACITY = 0.48;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function VideoModal({ detail, onClose }: VideoModalProps) {
  const { item, origin, currentTime } = detail;
  const copy = landing.archive.modal;
  const titleId = useId();
  const overlayRef = useRef<HTMLDivElement>(null);
  const destPhoneRef = useRef<HTMLDivElement>(null);
  const destVideoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const [dest, setDest] = useState<DOMRect | null>(null);
  const [moved, setMoved] = useState(false);
  const [landed, setLanded] = useState(false);
  const [muted, setMuted] = useState(true);
  const reducedMotion = typeof window !== "undefined" && prefersReducedMotion();
  const settled = reducedMotion || landed;
  const inFlight = reducedMotion || moved;

  useLayoutEffect(() => {
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const id = window.requestAnimationFrame(() => {
      const node = destPhoneRef.current;
      if (!node) {
        return;
      }
      const next = node.getBoundingClientRect();
      if (next.width > 8) {
        setDest(next);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!dest || reducedMotion) {
      return;
    }
    const id = window.requestAnimationFrame(() => setMoved(true));
    return () => window.cancelAnimationFrame(id);
  }, [dest, reducedMotion]);

  useEffect(() => {
    if (!moved || landed || reducedMotion) {
      return;
    }
    const timer = window.setTimeout(() => setLanded(true), MOVE_MS);
    return () => window.clearTimeout(timer);
  }, [moved, landed, reducedMotion]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const node = destVideoRef.current;
    if (!node || !settled) {
      return;
    }
    node.currentTime = currentTime;
    node.volume = 1;
    void node.play().catch(() => undefined);
  }, [settled, currentTime]);

  const finishClose = () => {
    lastFocus.current?.focus();
    onClose();
  };

  const requestClose = () => {
    destVideoRef.current?.pause();
    finishClose();
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        destVideoRef.current?.pause();
        lastFocus.current?.focus();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !overlayRef.current) {
        return;
      }
      const focusable = [
        ...overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], video, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  const dx = dest ? dest.left - origin.left : 0;
  const dy = dest ? dest.top - origin.top : 0;
  const scale = dest && origin.width > 0 ? dest.width / origin.width : 1;
  const flying = !settled;

  const travelerStyle: CSSProperties = {
    top: origin.top,
    left: origin.left,
    width: origin.width,
    height: origin.height,
    transform: inFlight ? `translate3d(${dx}px, ${dy}px, 0) scale(${scale})` : "translate3d(0, 0, 0)",
    opacity: flying ? FLIGHT_OPACITY : 0,
    transition: reducedMotion
      ? "none"
      : `transform ${MOVE_MS}ms ${EASE}, opacity ${MOVE_MS}ms ease`,
  };

  const modal = (
    <Overlay
      ref={overlayRef}
      role="presentation"
      onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          requestClose();
        }
      }}
    >
      {!settled ? (
        <Traveler style={travelerStyle} aria-hidden>
          <PhoneFrame size="fill" glowing>
            <Screen>
              <Cover src={item.poster} alt="" />
            </Screen>
          </PhoneFrame>
        </Traveler>
      ) : null}
      <Panel
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <Close ref={closeRef} type="button" onClick={requestClose} aria-label={copy.closeAria}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path
              d="M1 1l10 10M11 1L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
          {copy.close}
        </Close>
        <Slot>
          <DestPhone ref={destPhoneRef} visible={settled}>
            <PhoneFrame size="modal">
              <Screen>
                <Playback
                  ref={destVideoRef}
                  interactive
                  src={item.src}
                  poster={item.poster}
                  controls
                  muted={muted}
                  playsInline
                  loop
                  preload="auto"
                  controlsList="nodownload"
                  onVolumeChange={(event: SyntheticEvent<HTMLVideoElement>) => {
                    const video = event.currentTarget;
                    setMuted(video.muted);
                    if (!video.muted && video.volume === 0) {
                      video.volume = 1;
                    }
                  }}
                />
              </Screen>
            </PhoneFrame>
          </DestPhone>
        </Slot>
        <Copy ready={settled}>
          <Kicker>
            {item.category} · {item.product} · {item.duration}
          </Kicker>
          <Heading id={titleId}>{item.title}</Heading>
          <Quote>“{item.hook}”</Quote>
          <Facts>
            <Block card>
              <Label>{copy.jobLabel}</Label>
              <Body>{item.job}</Body>
            </Block>
            <Block card>
              <Label>{copy.spineLabel}</Label>
              <Body>{item.spine}</Body>
            </Block>
          </Facts>
          <Block>
            <Label>{copy.strategyLabel}</Label>
            <Beats>
              {item.strategy.map((beat) => (
                <Beat key={beat.label}>
                  <BeatLabel>{beat.label}</BeatLabel>
                  <Body>{beat.body}</Body>
                </Beat>
              ))}
            </Beats>
          </Block>
        </Copy>
      </Panel>
    </Overlay>
  );

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(modal, document.body);
}
