import Image from "next/image";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 px-8 md:px-16 py-20 bg-black"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="min-w-0">
          <h2 className="font-display text-3xl mb-2">
            SOBRE A
          </h2>

          <h2 className="font-display text-3xl text-orange-500 mb-6">
            JV MÓVEIS
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            A JV Móveis nasceu da experiência de profissionais com mais de uma
            década de atuação em marcenaria e móveis sob medida. Buscamos criar
            projetos que unam funcionalidade, qualidade e personalidade.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            Nossa produção é própria, garantindo maior controle sobre cada etapa e
            sobre a qualidade dos móveis. Cada projeto é pensado de acordo com o
            espaço e as necessidades de cada cliente, buscando aproveitar cada
            ambiente da melhor forma e entregar um resultado único.
          </p>
        </div>

        <div className="min-w-0 relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1622150162934-b5f8e8c2b3f5?w=1000&q=80"
            alt="Marcenaria artesanal JV Móveis"
            className="w-full h-80 object-cover border-2 border-orange-500"
            fill
          />
        </div>
      </div>
    </section>
  );
}