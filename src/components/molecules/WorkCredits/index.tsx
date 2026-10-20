import { landing } from "@/content/landing";
import {
  Dot,
  Fact,
  FactIcon,
  Facts,
  Pill,
  Proof,
  ProofLabel,
  Row,
  Rule,
} from "./styles";

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.2 8.4 6.1 11.2 12.8 4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="1.5" y="4" width="9.5" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M11 7.2 14.5 5.4v5.2L11 8.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M9.2 3.2H12.8V6.8M12.6 3.4 8 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9.2v2.6a1 1 0 0 1-1 1H4.2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H6.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WorkCredits() {
  const { proofLabel, credentials } = landing.hero;

  return (
    <Row>
      <Facts>
        {credentials.flatMap((item, index) => {
          const fact = (
            <Fact key={item.id}>
              <FactIcon tone={item.icon === "check" ? "success" : "muted"}>
                {item.icon === "check" ? <CheckIcon /> : <CameraIcon />}
              </FactIcon>
              {item.label}
            </Fact>
          );

          return index === 0
            ? [fact]
            : [
                <Rule key={`${item.id}-rule`} aria-hidden />,
                fact,
              ];
        })}
      </Facts>
      <Proof>
        <ProofLabel>{proofLabel}</ProofLabel>
        {landing.works.map((work) => (
          <Pill
            key={work.href}
            href={work.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${work.label} (opens in a new tab)`}
          >
            <Dot tone={work.tone} />
            {work.label}
            <ExternalIcon />
          </Pill>
        ))}
      </Proof>
    </Row>
  );
}
