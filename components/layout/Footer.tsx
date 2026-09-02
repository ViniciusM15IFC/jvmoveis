import { MapPin } from "lucide-react";

import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { InstagramIcon } from "../ui/Instagramicon";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Transformação", href: "#transformacao" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <>
      {/* FAIXA FINAL */}
      <footer className="bg-orange-500 text-black text-center py-5 md:py-7 px-4">
        <p className="font-display text-base md:text-xl">
          SEU PROJETO, DO SEU JEITO. DO SEU SONHO, PARA SUA CASA!
        </p>
      </footer>

      {/* RODAPÉ PRINCIPAL */}
      <div className="bg-black border-t border-orange-500/20 py-14 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">

          {/* Coluna 1 — Links rápidos */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-orange-500 mb-4">
              Links Rápidos
            </p>

            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 — Contatos e endereço */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-orange-500 mb-4">
              Contato
            </p>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/5548991077606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  Valmir Bueno
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5549989122538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  Junior Neves
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/sobmedidajvmoveis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  <InstagramIcon size={16} />
                  @sobmedidajvmoveis
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm text-neutral-300">
                <MapPin size={16} className="text-orange-500 shrink-0" />
                Bairro Santa Lúcia - Videira/SC
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Direitos autorais e crédito */}
          <div className="sm:text-right">
            <p className="font-display text-xs uppercase tracking-widest text-orange-500 mb-4">
              JV Móveis
            </p>

            <p className="text-sm text-neutral-300 mb-2">
              © {new Date().getFullYear()} JV Móveis. Todos os direitos reservados.
            </p>

            <p className="text-sm text-neutral-400">
              Criado por{" "}
              <a
                href="https://github.com/ViniciusM15IFC/ViniProfile/blob/main/README.md"
                className="text-neutral-300 hover:text-orange-500 transition-colors underline underline-offset-4"
              >
                Vinicius Marian
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}