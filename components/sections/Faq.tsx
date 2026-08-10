"use client";

import { useState } from "react";

import { FaqItem } from "../ui/FaqItem";

interface FaqEntry {
  q: string;
  a: string;
}

interface FaqProps {
  faqs: FaqEntry[];
}

export function Faq({ faqs }: FaqProps) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-black"
    >
      <div className="max-w-2xl mx-auto">

        <h2 className="font-display text-3xl mb-2">
          PERGUNTAS
        </h2>

        <h2 className="font-display text-3xl text-orange-500 mb-10">
          FREQUENTES
        </h2>

        {faqs.map((item, i) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
            isOpen={openFaq === i}
            onToggle={() =>
              setOpenFaq(
                openFaq === i ? -1 : i
              )
            }
          />
        ))}

      </div>
    </section>
  );
}