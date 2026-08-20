import Image from "next/image";

export function Hero()
{
    return(
        <section id="inicio" className="scroll-mt-24 grid md:grid-cols-2 bg-black">
        <div className="flex flex-col justify-center px-8 py-16 md:px-16">
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2">TRANSFORMAMOS</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2 text-orange-500">SEU AMBIENTE</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2">EM ALGO ÚNICO</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-6 text-orange-500">E EXCLUSIVO!</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-neutral-300 leading-relaxed mb-8 max-w-md">
            Móveis sob medida com qualidade, funcionalidade e design exclusivo para <strong>Videira e região</strong>
          </p>
          <a
            href="#orcamento"
            className="inline-block bg-orange-500 text-black font-display text-sm px-8 py-4 w-fit hover:bg-orange-400 transition-colors"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
        <div className="min-h-[320px] md:min-h-0 w-full overflow-hidden min-w-0">
          <div className="relative w-full aspect-video md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Cozinha planejada JV Móveis"
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
          </div>
        </div>
      </section>
    )
}