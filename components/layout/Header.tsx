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

export function Header() {
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
    </header>
  );
}