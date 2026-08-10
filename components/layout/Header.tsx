import { Logo } from "../ui/Logo";
const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-orange-500/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs tracking-widest uppercase font-bold text-neutral-300 hover:text-orange-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}