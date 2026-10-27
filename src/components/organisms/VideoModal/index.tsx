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
  PlayerBar,
  PlayerBtn,
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
  const closeFn = useRef<() => void>(() => undefined);
  const closeTimer = useRef<number>(0);
  const [dest, setDest] = useState<DOMRect | null>(null);
  const [moved, setMoved] = useState(false);
  const [landed, setLanded] = useState(false);
  const [closing, setClosing] = useState(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  useLayoutEffect(() => {
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const measure = () => {
      const node = destPhoneRef.current;
      if (!node) {
        return;
      }
      const next = node.getBoundingClientRect();
      if (next.width > 8) {
        setDest(next);
      }
    };
    measure();
    const id = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!dest) {
      return;
    }
    if (prefersReducedMotion()) {
      setMoved(true);
      setLanded(true);
      return;
    }
    const id = window.requestAnimationFrame(() => setMoved(true));
    return () => window.cancelAnimationFrame(id);
  }, [dest]);

  useEffect(() => {
    if (!moved || landed || closing || prefersReducedMotion()) {
      return;
    }
    const timer = window.setTimeout(() => setLanded(true), MOVE_MS);
    return () => window.clearTimeout(timer);
  }, [moved, landed, closing]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    const node = destVideoRef.current;
    if (!node || !landed || closing) {
      return;
    }
    node.currentTime = currentTime;
    void node.play().then(() => setPaused(false)).catch(() => undefined);
  }, [landed, closing, currentTime]);

  const togglePlay = () => {
    const node = destVideoRef.current;
    if (!node) {
      return;
    }
    if (node.paused) {
      void node.play().then(() => setPaused(false)).catch(() => undefined);
    } else {
      node.pause();
      setPaused(true);
    }
  };

  const toggleMute = () => {
    const node = destVideoRef.current;
    if (!node) {
      return;
    }
    node.muted = !node.muted;
    setMuted(node.muted);
  };

  const toggleFullscreen = () => {
    const node = destVideoRef.current;
    if (!node) {
      return;
    }
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    void node.requestFullscreen().catch(() => undefined);
  };

  const finishClose = () => {
    lastFocus.current?.focus();
    onClose();
  };

  const requestClose = () => {
    destVideoRef.current?.pause();
    window.clearTimeout(closeTimer.current);
    finishClose();
  };

  closeFn.current = requestClose;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeFn.current();
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
  }, []);

  const dx = dest ? dest.left - origin.left : 0;
  const dy = dest ? dest.top - origin.top : 0;
  const scale = dest && origin.width > 0 ? dest.width / origin.width : 1;
  const flying = !landed;
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  const travelerStyle: CSSProperties = {
    top: origin.top,
    left: origin.left,
    width: origin.width,
    height: origin.height,
    transform: moved ? `translate3d(${dx}px, ${dy}px, 0) scale(${scale})` : "translate3d(0, 0, 0)",
    opacity: flying ? FLIGHT_OPACITY : 0,
    transition: reduced
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
      {!landed ? (
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
          <DestPhone ref={destPhoneRef} visible={landed && !closing}>
            <PhoneFrame size="modal">
              <Screen>
                <Playback
                  ref={destVideoRef}
                  interactive
                  src={item.src}
                  poster={item.poster}
                  muted={muted}
                  playsInline
                  loop
                  preload="auto"
                  onPlay={() => setPaused(false)}
                  onPause={() => setPaused(true)}
                  onVolumeChange={(event: SyntheticEvent<HTMLVideoElement>) => {
                    setMuted(event.currentTarget.muted);
                  }}
                />
                <PlayerBar>
                  <PlayerBtn type="button" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"}>
                    {paused ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                        <path d="M2 1.5l9 4.5-9 4.5V1.5z" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                        <path d="M2 1h3v10H2V1zm5 0h3v10H7V1z" fill="currentColor" />
                      </svg>
                    )}
                  </PlayerBtn>
                  <PlayerBtn type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"}>
                    {muted ? (
                      <svg width="14" height="12" viewBox="0 0 14 12" aria-hidden>
                        <path d="M0 4h3l4-3v10L3 8H0V4zm10.2 1.2l1.3-1.3.8.8-1.3 1.3 1.3 1.3-.8.8-1.3-1.3-1.3 1.3-.8-.8 1.3-1.3-1.3-1.3.8-.8 1.3 1.3z" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg width="14" height="12" viewBox="0 0 14 12" aria-hidden>
                        <path d="M0 4h3l4-3v10L3 8H0V4zm9 1.2c.6.5.9 1.1.9 1.8s-.3 1.3-.9 1.8l.8.8c.9-.7 1.4-1.6 1.4-2.6S10.7 4.1 9.8 3.4l-.8.8z" fill="currentColor" />
                      </svg>
                    )}
                  </PlayerBtn>
                  <PlayerBtn type="button" onClick={toggleFullscreen} aria-label="Play video fullscreen">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                      <path d="M1 1h4v1.5H2.5V5H1V1zm6 0h4v4H9.5V2.5H7V1zM1 7h1.5v2.5H5V11H1V7zm7.5 2.5H11V7H9.5v2.5H7V11h4V7H9.5v2.5z" fill="currentColor" />
                    </svg>
                  </PlayerBtn>
                </PlayerBar>
              </Screen>
            </PhoneFrame>
          </DestPhone>
        </Slot>
        <Copy ready={landed && !closing}>
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
