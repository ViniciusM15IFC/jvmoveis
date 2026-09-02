"use client";

import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ItemsPerView {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
}

interface CarouselProps {
  children: ReactNode;
  className?: string;
  /** Quantos itens aparecem por vez em cada breakpoint (mobile-first). */
  itemsPerView?: ItemsPerView;
  showArrows?: boolean;
  showDots?: boolean;
}

function useItemsPerView({ base, sm, md, lg }: ItemsPerView) {
  const [count, setCount] = useState(base);

  useEffect(() => {
    const queries: [number, MediaQueryList][] = [];
    if (lg) queries.push([lg, window.matchMedia("(min-width: 1024px)")]);
    if (md) queries.push([md, window.matchMedia("(min-width: 768px)")]);
    if (sm) queries.push([sm, window.matchMedia("(min-width: 640px)")]);

    const update = () => {
      const match = queries.find(([, mql]) => mql.matches);
      setCount(match ? match[0] : base);
    };

    update();
    queries.forEach(([, mql]) => mql.addEventListener("change", update));
    return () =>
      queries.forEach(([, mql]) => mql.removeEventListener("change", update));
  }, [base, sm, md, lg]);

  return count;
}

/**
 * Carrossel simples, sem dependências externas: suporta arraste no
 * celular (swipe), setas, indicadores e múltiplos itens visíveis por
 * breakpoint. Usado tanto na galeria de Projetos quanto na seção de
 * Transformação (Antes → Projeto 3D → Resultado).
 */
export function Carousel({
  children,
  className = "",
  itemsPerView = { base: 1 },
  showArrows = true,
  showDots = true,
}: CarouselProps) {
  const items = Children.toArray(children).filter(isValidElement);
  const total = items.length;

  const rawPerView = useItemsPerView(itemsPerView);
  const perView = Math.max(1, Math.min(rawPerView, total || 1));
  const maxIndex = Math.max(total - perView, 0);

  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex))),
    [maxIndex]
  );

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e: TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (touchDeltaX.current > 50) goTo(index - 1);
    else if (touchDeltaX.current < -50) goTo(index + 1);
  };

  if (total === 0) return null;

  const slideWidth = 100 / perView;

  return (
    <div className={`relative w-full min-w-0 ${className}`}>
      <div
        className="w-full min-w-0 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {items.map((child, i) => (
            <div key={i} className="shrink-0 px-2" style={{ width: `${slideWidth}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && total > perView && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/80 hover:bg-orange-500 disabled:opacity-30 disabled:hover:bg-black/80 text-white hover:text-black transition-colors rounded-full p-2 backdrop-blur-sm z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === maxIndex}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black/80 hover:bg-orange-500 disabled:opacity-30 disabled:hover:bg-black/80 text-white hover:text-black transition-colors rounded-full p-2 backdrop-blur-sm z-10"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showDots && total > perView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para posição ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-orange-500" : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
