import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import {
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface Projeto {
  title: string;
  subtitle: string;
  img: string;
  imgFull: string;
}

interface LightboxProps {
  project: Projeto | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setZoomed(false);
    setTransformOrigin("center center");
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (zoomed) {
      // Se já estiver com zoom, apenas reduz de volta para o centro
      setZoomed(false);
    } else {
      // Se não tiver zoom, calcula onde o usuário clicou dentro do contêiner
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Define o ponto do clique como a nova origem da transformação
      setTransformOrigin(`${x}% ${y}%`);
      setZoomed(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none"
      onClick={onClose}
    >
      {/* Barra superior de botões isolada (z-50) */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-50 pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (zoomed) {
              setZoomed(false);
            } else {
              setTransformOrigin("center center");
              setZoomed(true);
            }
          }}
          className="pointer-events-auto flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-display text-xs tracking-widest uppercase bg-black/60 px-4 py-2 rounded-md backdrop-blur-sm shadow-lg"
        >
          {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          {zoomed ? "Reduzir" : "Ampliar"}
        </button>

        <button
          onClick={onClose}
          className="pointer-events-auto text-white hover:text-orange-500 transition-colors bg-black/60 p-2 rounded-md backdrop-blur-sm shadow-lg"
          aria-label="Fechar"
        >
          <X size={28} />
        </button>
      </div>

      {/* Caixa externa que centraliza o conteúdo e esconde o que passar dos limites da tela */}
      <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden">
        {/* Contêiner reativo travado no tamanho máximo do layout */}
        <div
          ref={containerRef}
          onClick={handleImageClick}
          className={`relative w-full max-w-4xl h-[75vh] transition-transform duration-300 ease-out origin-center ${
            zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          style={{
            transform: zoomed ? "scale(2)" : "scale(1)",
            transformOrigin: transformOrigin,
          }}
        >
          <Image
            src={project.imgFull}
            alt={project.title}
            className="object-contain"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Legenda do projeto fica oculta durante o zoom para dar mais espaço visual */}
      <p className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-display text-sm tracking-wide bg-black/60 px-5 py-2 rounded-md backdrop-blur-sm z-50 shadow-lg transition-opacity duration-300 ${
        zoomed ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        {project.title}
      </p>
    </div>
  );
}
