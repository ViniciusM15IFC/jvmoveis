import {
  BedDouble,
  ChefHat,
  Sofa,
  Briefcase,
  Warehouse,
  Shirt,
  Bath,
  Store,
  type LucideIcon,
} from "lucide-react";

const ambientes: { icon: LucideIcon; label: string }[] = [
  { icon: BedDouble, label: "Dormitórios" },
  { icon: ChefHat, label: "Cozinhas" },
  { icon: Sofa, label: "Salas" },
  { icon: Briefcase, label: "Escritórios" },
  { icon: Warehouse, label: "Áreas de Serviço" },
  { icon: Shirt, label: "Closets" },
  { icon: Bath, label: "Banheiros" },
  { icon: Store, label: "E Muito Mais!" },
];

export function Ambientes() {
  return (
    <section
      id="ambientes"
      className="lg:flex items-start justify-start scroll-mt-24 px-8 md:px-16 py-16 bg-black border-t border-orange-500/30"
    >
      <div className="lg:mr-16 mb-10 lg:mb-0">
        <h2 className="font-display text-2xl md:text-3xl mb-2">MÓVEIS SOB MEDIDA PARA</h2>
        <h2 className="font-display text-2xl md:text-3xl text-orange-500 mb-10">TODOS OS AMBIENTES!</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
        {ambientes.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <Icon className="text-orange-500 shrink-0" size={26} strokeWidth={1.75} />
            <span className="font-display text-sm tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}