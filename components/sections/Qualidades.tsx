import {
  Ruler,
  ShieldCheck,
  Settings,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const promessas: {
  icon: LucideIcon;
  title: string;
}[] = [
  {
    icon: Ruler,
    title: "Projetos Personalizados",
  },
  {
    icon: ShieldCheck,
    title: "Materiais de Qualidade",
  },
  {
    icon: Settings,
    title: "Acabamento Impecável",
  },
  {
    icon: Handshake,
    title: "Compromisso e Confiança",
  },
];

export function Qualidades() {
  return (
    <section className="px-8 md:px-16 py-16 bg-white text-black">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {promessas.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
              <Icon
                className="text-black"
                size={26}
                strokeWidth={2}
              />
            </div>

            <p className="font-display text-xs tracking-wide">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}