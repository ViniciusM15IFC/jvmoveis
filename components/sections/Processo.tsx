import {
  PhoneCall,
  MapPinned,
  LayoutGrid,
  Factory,
  Truck,
  type LucideIcon,
} from "lucide-react";

const processo: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: PhoneCall,
    title: "Contato Inicial",
    text: "Fale com a gente pelo WhatsApp ou formulário e nos conte a sua ideia."
  },

  {
    icon: MapPinned,
    title: "Visita Técnica",
    text: "Vamos até o seu espaço para tirar as medidas e entender suas necessidades."
  },

  {
    icon: LayoutGrid,
    title: "Projeto 3D",
    text: "Visualize seu ambiente planejado antes da produção começar."
  },

  {
    icon: Factory,
    title: "Produção",
    text: "Fabricamos seu projeto em nossa marcenaria com MDF de alta qualidade."
  },

  {
    icon: Truck,
    title: "Montagem e Entrega",
    text: "Entregamos e instalamos os móveis no seu espaço, da forma mais eficiente possivel."
  },
];

export function Processo() {
    return (
              <section id="processo" className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black">
        <h2 className="font-display text-3xl mb-2">COMO</h2>
        <h2 className="font-display text-3xl text-orange-500 mb-12">FUNCIONA</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          {processo.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Icon className="text-orange-500" size={20} strokeWidth={1.75} />
                </div>
                <span className="font-display text-2xl text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="font-display text-sm mb-2">{title}</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    )
}