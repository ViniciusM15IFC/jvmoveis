import Image from "next/image";
import { Carousel } from "../ui/Carousel";

interface Etapa {
  label: string;
  img: string;
}

export interface CasoTransformacao {
  titulo: string;
  etapas: [Etapa, Etapa, Etapa];
}

interface TransformacaoProps {
  casos: CasoTransformacao[];
}

export function Transformacao({ casos }: TransformacaoProps) {
  // Sem nenhum caso cadastrado no CMS → a seção inteira não é renderizada
  if (!casos || casos.length === 0) {
    return null;
  }

  return (
    <section
      id="transformacao"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-black border-t border-orange-500/30"
    >
      <h2 className="font-display text-3xl mb-2">DO PAPEL À</h2>
      <h2 className="font-display text-3xl text-orange-500 mb-3">REALIDADE</h2>

      <p className="text-neutral-400 text-sm max-w-lg mb-12 leading-relaxed">
        Da primeira ideia ao resultado final, veja como seu projeto ganha vida.
      </p>

      <Carousel itemsPerView={{ base: 1 }}>
        {casos.map((caso) => (
          <div key={caso.titulo}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
              {caso.etapas.map((etapa) => (
                <div key={etapa.label}>
                  <div className="relative h-[25vh] md:h-auto md:aspect-[4/3] overflow-hidden border border-neutral-800">
                    <Image
                      src={etapa.img}
                      alt={`${caso.titulo} — ${etapa.label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                  <p className="font-display text-[9px] md:text-xs tracking-widest text-orange-500 mt-1.5 md:mt-3 text-center">
                    {etapa.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-display text-sm md:text-base text-center mt-4 md:mt-6 text-neutral-200">
              {caso.titulo}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}