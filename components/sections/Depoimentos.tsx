interface Depoimento {
  quote: string;
}

interface DepoimentosProps {
  depoimentos: Depoimento[];
}

import { Quote } from "lucide-react";

export function Depoimentos({
  depoimentos,
}: DepoimentosProps) {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black"
    >
      <h2 className="font-display text-3xl mb-2">
        O QUE DIZEM
      </h2>

      <h2 className="font-display text-3xl text-orange-500 mb-4">
        NOSSOS CLIENTES
      </h2>

      <p className="text-400 text-sm max-w-lg mb-12 leading-relaxed">
        A experiência de quem já confiou na JV Móveis.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {depoimentos.map((d) => (
          <div
            key={d.quote}
            className="bg-neutral-50 border-l-4 border-orange-500 p-6"
          >
            <Quote
              className="text-orange-500 mb-4"
              size={24}
            />

            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              &ldquo;{d.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}