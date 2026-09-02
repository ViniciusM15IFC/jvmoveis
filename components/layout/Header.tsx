"use client";

import { useEffect, useRef, useState } from "react";
import {
  House,
  Workflow,
  PanelsTopLeft,
  Sparkles,
  Calculator,
  CircleHelp,
  Phone,
} from "lucide-react";

import { Logo } from "../ui/Logo";
import { InstagramIcon } from "../ui/Instagramicon";

const nav = [
  { label: "Inicio", href: "#inicio", icon: House, iconOnly: true },
  { label: "Processo", href: "#processo", icon: Workflow },
  { label: "Projetos", href: "#projetos", icon: PanelsTopLeft },
  { label: "Transformação", href: "#transformacao", icon: Sparkles },
  { label: "Orçamento", href: "#orcamento", icon: Calculator },
  { label: "FAQ", href: "#faq", icon: CircleHelp, iconOnly: true },
  { label: "Contato", href: "#contato", icon: Phone, iconOnly: true },
];

function useMobileScrollNav() {
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    function handleScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;

      // No topo
      if (y < 40) {
        setVisible(false);
      }
      // Começou a rolar para baixo
      else if (diff > 8) {
        setVisible(true);
      }
      // Começou a rolar para cima
      else if (diff < -8) {
        setVisible(false);
      }

      lastY.current = y;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return visible;
}

export function Header() {
  const mobileNavVisible = useMobileScrollNav();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-orange-500/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-5">
          {nav.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.iconOnly ? item.label : undefined}
                className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold text-neutral-300 hover:text-orange-500 transition-colors"
              >
                <Icon size={15} strokeWidth={2} />
                <span className={item.iconOnly ? "sr-only" : undefined}>
                  {item.label}
                </span>
              </a>
            );
          })}

          <a
            href="https://instagram.com/sobmedidajvmoveis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-neutral-300 hover:text-orange-500 transition-colors"
          >
            <InstagramIcon size={19} />
          </a>
        </nav>
      </div>

      <nav
        aria-label="Navegação"
        className={`md:hidden fixed right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500/30 px-2 py-3 transition-all duration-300 ease-out ${
          mobileNavVisible
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-0 pointer-events-none"
        }`}
      >
        {nav.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex items-center justify-center text-neutral-300 hover:text-orange-500 transition-colors"
            >
              <Icon size={16} strokeWidth={2} />
            </a>
          );
        })}

        <a
          href="https://instagram.com/sobmedidajvmoveis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center text-neutral-300 hover:text-orange-500 transition-colors"
        >
          <InstagramIcon size={16} />
        </a>
      </nav>
    </header>
  );
}