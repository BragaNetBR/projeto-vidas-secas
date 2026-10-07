import { espacoDetalhe, tempoDetalhe } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function SpaceTimeSection() {
  return (
    <section id="espaco-tempo" className="bg-bege-clara py-20 sm:py-28" aria-labelledby="espaco-tempo-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Coordenadas da narrativa"
          titulo="Espaço e tempo em Vidas Secas"
          descricao="Nem espaço nem tempo funcionam como simples cenário cronológico: ambos participam ativamente da construção da obra."
        />
        <h3 id="espaco-tempo-titulo" className="sr-only">Espaço e tempo</h3>

        {/* Espaço */}
        <div id="espaco" className="mt-14 scroll-mt-24">
          <h4 className="font-serif-editorial text-2xl font-semibold text-marrom-escuro">O espaço como elemento narrativo</h4>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-marrom/85">{espacoDetalhe.introducao}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {espacoDetalhe.pontos.map((ponto) => (
              <div key={ponto.titulo} className="rounded-sm border border-marrom/15 bg-bege p-5">
                <h5 className="font-serif-editorial text-base font-semibold text-vermelho-escuro">{ponto.titulo}</h5>
                <p className="mt-2 text-sm leading-relaxed text-marrom/85">{ponto.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tempo */}
        <div id="tempo" className="mt-16 scroll-mt-24">
          <h4 className="font-serif-editorial text-2xl font-semibold text-marrom-escuro">O tempo narrativo</h4>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-marrom/85">{tempoDetalhe.introducao}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-marrom/15 bg-azul/10 p-6">
              <h5 className="text-xs font-bold uppercase tracking-wide text-azul-escuro">Tempo histórico</h5>
              <p className="mt-2 text-sm leading-relaxed text-marrom-escuro">{tempoDetalhe.tempoHistorico}</p>
            </div>
            <div className="rounded-sm border border-marrom/15 bg-vermelho/10 p-6">
              <h5 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Tempo narrativo</h5>
              <p className="mt-2 text-sm leading-relaxed text-marrom-escuro">{tempoDetalhe.tempoNarrativo}</p>
            </div>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tempoDetalhe.pontos.map((ponto) => (
              <li key={ponto} className="flex gap-3 rounded-sm bg-bege px-4 py-3 text-sm leading-relaxed text-marrom-escuro">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-marrom-escuro" aria-hidden="true" />
                {ponto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
