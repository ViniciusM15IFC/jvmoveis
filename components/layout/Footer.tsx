export function Footer() {
  return (
    <>
      {/* FAIXA FINAL */}
      <footer className="bg-orange-500 text-black text-center py-4 px-4">
        <p className="font-display text-sm md:text-base">
          SEU PROJETO, DO SEU JEITO. DO SEU SONHO, PARA SUA CASA!
        </p>
      </footer>

      {/* RODAPÉ DE DESENVOLVIMENTO */}
      <div className="bg-neutral-950 border-t border-neutral-900/50 py-4 text-[10px] text-neutral-600 font-body">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shrink-0" />

            <span>
              Ambiente de testes: Este site ainda está em desenvolvimento.
            </span>
          </div>

          <p>
            Criado por{" "}
            <a
              href="https://github.com/ViniciusM15IFC/ViniProfile/blob/main/README.md"
              className="text-neutral-400 hover:text-orange-500 transition-colors underline underline-offset-4"
            >
              Vinicius Marian
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}