"use client";

import { faq } from "@/app/config";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export const FaqAccordion = () => {
  return (
    <Accordion>
      {faq.map((item, i) => (
        <AccordionItem key={i} {...item} aria-label={item.title} />
      ))}
    </Accordion>
  );
};
