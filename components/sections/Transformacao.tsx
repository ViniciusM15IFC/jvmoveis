import Image from "next/image";
import { Carousel } from "../ui/Carousel";

interface Etapa {
  label: string;
  img: string;
}

interface CasoTransformacao {
  titulo: string;
  etapas: [Etapa, Etapa, Etapa];
}

const casos: CasoTransformacao[] = [
  {
    titulo: "Cozinha Planejada",
    etapas: [
      { label: "ANTES", img: "https://picsum.photos/seed/jv-cozinha-antes/700/900" },
      { label: "PROJETO 3D", img: "https://picsum.photos/seed/jv-cozinha-3d/700/900" },
      { label: "RESULTADO", img: "https://picsum.photos/seed/jv-cozinha-final/700/900" },
    ],
  },
  {
    titulo: "Dormitório Planejado",
    etapas: [
      { label: "ANTES", img: "https://picsum.photos/seed/jv-quarto-antes/700/900" },
      { label: "PROJETO 3D", img: "https://picsum.photos/seed/jv-quarto-3d/700/900" },
      { label: "RESULTADO", img: "https://picsum.photos/seed/jv-quarto-final/700/900" },
    ],
  },
  {
    titulo: "Home Office",
    etapas: [
      { label: "ANTES", img: "https://picsum.photos/seed/jv-escritorio-antes/700/900" },
      { label: "PROJETO 3D", img: "https://picsum.photos/seed/jv-escritorio-3d/700/900" },
      { label: "RESULTADO", img: "https://picsum.photos/seed/jv-escritorio-final/700/900" },
    ],
  },
];

export function Transformacao() {
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
            {/*
              Mobile: empilhado (1 coluna), mas a altura de cada imagem é
              fixada em vh (não em aspect-ratio) — assim as 3 juntas ocupam
              uma fração previsível da altura da TELA, não da largura.
              Desktop: volta a ser 3 colunas lado a lado com aspect-ratio normal.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
              {caso.etapas.map((etapa) => (
                <div key={etapa.label}>
                  <div className="relative h-[18vh] md:h-auto md:aspect-[4/3] overflow-hidden border border-neutral-800">
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