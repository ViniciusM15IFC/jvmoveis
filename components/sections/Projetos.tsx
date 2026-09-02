"use client";

import Image from "next/image";

import { useState } from "react";
import { ZoomIn } from "lucide-react";

import { Lightbox } from "../ui/Lightbox";
import { Carousel } from "../ui/Carousel";
import type { Projeto } from "../../app/page";

interface ProjetosProps {
  projetos: Projeto[];
}

export function Projetos({ projetos }: ProjetosProps) {
  const [selectedProject, setSelectedProject] =
    useState<Projeto | null>(null);

  return (
    <section
      id="projetos"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-black"
    >
      <h2 className="font-display text-3xl mb-4">
        PROJETOS{" "}
        <span className="text-orange-500">
          CONCLUÍDOS
        </span>
      </h2>

      <p className="text-neutral-400 text-sm max-w-lg mb-10 leading-relaxed">
        Confira alguns dos nossos projetos e veja como transformamos espaços.
      </p>

      <Carousel itemsPerView={{ base: 1, sm: 2, lg: 3 }}>
        {projetos.map((p) => (
          <button
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="relative md:h-100 h-80 w-full overflow-hidden group border-2 border-neutral-800 text-left cursor-zoom-in"
          >
            <Image
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-5 text-white">
              <p className="font-display text-base">
                {p.title}
              </p>

              <p className="text-xs text-neutral-200">
                {p.subtitle}
              </p>
            </div>

            <div className="absolute top-3 right-3 bg-orange-500 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={16} />
            </div>
          </button>
        ))}
      </Carousel>

      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}