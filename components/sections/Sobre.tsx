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
            Com mais de uma década de experiência no mercado de
            Santa Catarina, a JV Móveis Planejados nasceu do
            desejo de unir a marcenaria artesanal com a tecnologia
            de precisão.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            Nossa produção é 100% própria, utilizando MDF de alta
            densidade e as peças de maior qualidade. Cada projeto é
            tratado como único, refletindo a personalidade de
            nossos clientes.
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