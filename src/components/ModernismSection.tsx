import {
  animalizacaoHumanizacao,
  estiloGraciliano,
  geracao1930Detalhe,
  personagensConstrucao,
  realismoSocialDetalhe,
  regionalismoDetalhe,
  simbolosDetalhe,
} from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function ModernismSection() {
  return (
    <section id="modernismo" className="bg-marrom-escuro py-20 text-bege-clara sm:py-28" aria-labelledby="modernismo-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          claro
          kicker="Contexto estético"
          titulo="Vidas Secas e a geração de 1930"
          descricao="O regionalismo, a crítica social e o aprofundamento psicológico aproximam a obra da segunda fase do Modernismo brasileiro."
        />
        <h3 id="modernismo-titulo" className="sr-only">Modernismo e características relacionadas</h3>

        <div id="regionalismo" className="mt-14 scroll-mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Bloco titulo="Regionalismo" intro={regionalismoDetalhe.introducao} pontos={regionalismoDetalhe.pontos} />
          <Bloco titulo="A geração de 1930" intro={geracao1930Detalhe.introducao} pontos={geracao1930Detalhe.pontos} />
        </div>

        <div className="mt-6">
          <Bloco titulo="Realismo social" intro={realismoSocialDetalhe.introducao} pontos={realismoSocialDetalhe.pontos} largo />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Bloco
            titulo="Entre o humano e o animal"
            intro={animalizacaoHumanizacao.introducao}
            pontos={animalizacaoHumanizacao.pontos}
            nota={animalizacaoHumanizacao.observacaoSobreBaleia}
          />
          <Bloco
            titulo="Como os personagens são construídos?"
            intro={personagensConstrucao.introducao}
            pontos={personagensConstrucao.pontos}
          />
        </div>

        <div className="mt-6">
          <Bloco
            titulo="O estilo de Graciliano Ramos em Vidas Secas"
            intro={estiloGraciliano.introducao}
            pontos={estiloGraciliano.pontos}
            largo
          />
        </div>

        {/* Simbolismo */}
        <div id="simbolismo" className="mt-16 scroll-mt-24">
          <h3 className="text-center font-serif-editorial text-2xl font-semibold sm:text-3xl">Elementos simbólicos</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-bege/80">
            Selecionados apenas porque ajudam a demonstrar características da construção literária da obra.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {simbolosDetalhe.map((simbolo) => (
              <div key={simbolo.elemento} className="rounded-sm border border-bege/15 bg-bege-clara/5 p-6">
                <h4 className="font-serif-editorial text-lg font-semibold text-bege-clara">{simbolo.elemento}</h4>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-bege/85">
                  <div>
                    <dt className="font-semibold text-areia">Presença na obra</dt>
                    <dd>{simbolo.presenca}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-areia">Possível significado</dt>
                    <dd>{simbolo.significado}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-areia">Relação com a estrutura</dt>
                    <dd>{simbolo.relacaoComEstrutura}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-areia">Relação com a linguagem</dt>
                    <dd>{simbolo.relacaoComLinguagem}</dd>
                  </div>
                </dl>
                <p className="mt-3 rounded-sm bg-vermelho/15 px-3 py-2 text-xs italic leading-relaxed text-bege-clara">
                  Interpretação: {simbolo.interpretacao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bloco({
  titulo,
  intro,
  pontos,
  nota,
  largo,
}: {
  titulo: string;
  intro: string;
  pontos: string[];
  nota?: string;
  largo?: boolean;
}) {
  return (
    <div className={`rounded-sm border border-bege/15 bg-bege-clara/5 p-6 sm:p-7 ${largo ? "lg:px-10" : ""}`}>
      <h4 className="font-serif-editorial text-xl font-semibold text-bege-clara">{titulo}</h4>
      <p className="mt-2 text-sm leading-relaxed text-bege/85">{intro}</p>
      <ul className={`mt-4 grid grid-cols-1 gap-2 ${largo ? "sm:grid-cols-2" : ""}`}>
        {pontos.map((ponto) => (
          <li key={ponto} className="flex gap-2 text-sm leading-relaxed text-bege/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vermelho" aria-hidden="true" />
            {ponto}
          </li>
        ))}
      </ul>
      {nota ? (
        <p className="mt-4 rounded-sm border-l-4 border-vermelho bg-bege-clara/10 px-4 py-2 text-xs italic text-bege/80">
          {nota}
        </p>
      ) : null}
    </div>
  );
}
