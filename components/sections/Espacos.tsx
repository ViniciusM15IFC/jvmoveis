import Image from "next/image";

export function Espacos() {
  return (
    <section className="relative h-96">
      <Image
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
        alt="Home office planejado"
        className="w-full h-full object-cover"
        fill
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
        <div className="border-2 border-orange-500 text-center max-w-lg px-10 py-8 bg-black/70">
          <p className="font-display text-2xl mb-3 text-orange-500">
            ESPAÇOS INTELIGENTES
          </p>

          <p className="text-neutral-200 leading-relaxed">
            Home offices projetados para máxima produtividade
            sem abrir mão do conforto e da estética moderna.
          </p>
        </div>
      </div>
    </section>
  );
}