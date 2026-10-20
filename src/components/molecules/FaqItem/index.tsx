"use client";

import { useState, type MouseEvent } from "react";
import type { FaqItem as FaqItemContent } from "@/content/landing";
import { Answer, Item, Question } from "./styles";

type FaqItemProps = {
  item: FaqItemContent;
  defaultOpen?: boolean;
};

export default function FaqItem({ item, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Item
      open={open}
      onClick={() => {
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
          return;
        }
        setOpen((current) => !current);
      }}
    >
      <Question
        onClick={(event: MouseEvent<HTMLElement>) => {
          event.preventDefault();
        }}
      >
        {item.question}
      </Question>
      <Answer>{item.answer}</Answer>
    </Item>
  );
}
