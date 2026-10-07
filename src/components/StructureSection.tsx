import { useState } from "react";
import { capitulos, estruturaCiclica, estruturaFragmentada, repeticaoDetalhe } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function StructureSection() {
  const [capituloAtivo, setCapituloAtivo] = useState(0);
  const atual = capitulos[capituloAtivo];

  return (
    <section id="estrutura" className="bg-bege-clara py-20 sm:py-28" aria-labelledby="estrutura-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Composição do romance"
          titulo="Uma narrativa em capítulos"
          descricao="Vidas Secas é construída por episódios relativamente autônomos que, juntos, formam a trajetória da família — sem abrir mão de uma progressão que une o conjunto."
        />
        <h3 id="estrutura-titulo" className="sr-only">Estrutura da obra</h3>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-marrom/15 bg-bege p-6 sm:p-8">
            <h4 className="font-serif-editorial text-xl font-semibold text-marrom-escuro">Autonomia e continuidade</h4>
            <p className="mt-3 text-sm leading-relaxed text-marrom/85">{estruturaFragmentada.introducao}</p>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed text-marrom/85">
              <div>
                <dt className="font-semibold text-marrom-escuro">Autonomia dos capítulos</dt>
                <dd>{estruturaFragmentada.autonomia}</dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom-escuro">Continuidade</dt>
                <dd>{estruturaFragmentada.continuidade}</dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom-escuro">Conexão entre episódios</dt>
                <dd>{estruturaFragmentada.conexaoEntreEpisodios}</dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom-escuro">Sensação de fragmentação</dt>
                <dd>{estruturaFragmentada.sensacaoDeFragmentacao}</dd>
              </div>
            </dl>
            <p className="mt-5 rounded-sm bg-areia/60 px-4 py-3 text-sm italic leading-relaxed text-marrom-escuro">
              {estruturaFragmentada.porqueImporta}
            </p>
          </div>

          <div id="ciclo" className="scroll-mt-24 rounded-sm border border-marrom/15 bg-bege p-6 sm:p-8">
            <h4 className="font-serif-editorial text-xl font-semibold text-marrom-escuro">O ciclo</h4>
            <p className="mt-3 text-sm leading-relaxed text-marrom/85">{estruturaCiclica.introducao}</p>
            <ul className="mt-5 space-y-3">
              {estruturaCiclica.elementos.map((elemento) => (
                <li key={elemento} className="flex gap-3 text-sm leading-relaxed text-marrom-escuro">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vermelho" aria-hidden="true" />
                  {elemento}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-marrom/70">
              <strong className="text-marrom-escuro">Nota sobre interpretação:</strong> {estruturaCiclica.interpretacao}
            </p>
          </div>
        </div>

        {/* Repetição */}
        <div className="mt-8 rounded-sm border border-marrom/15 bg-marrom-escuro px-6 py-8 text-bege-clara sm:px-10">
          <h4 className="font-serif-editorial text-xl font-semibold">Repetição</h4>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-bege/85">{repeticaoDetalhe.introducao}</p>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {repeticaoDetalhe.pontos.map((ponto) => (
              <li key={ponto} className="rounded-sm bg-bege-clara/10 px-4 py-3 text-sm leading-relaxed">
                {ponto}
              </li>
            ))}
          </ul>
        </div>

        {/* Ferramenta de capítulos */}
        <div className="mt-16">
          <h3 className="text-center font-serif-editorial text-2xl font-semibold text-marrom-escuro">
            Características observáveis por capítulo
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-marrom/75">
            Uma ferramenta para observar recursos literários em ação — não um resumo de enredo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Selecionar capítulo">
            {capitulos.map((capitulo, indice) => (
              <button
                key={capitulo.nome}
                type="button"
                role="tab"
                aria-selected={capituloAtivo === indice}
                onClick={() => setCapituloAtivo(indice)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  capituloAtivo === indice
                    ? "border-vermelho bg-vermelho text-bege-clara"
                    : "border-marrom/20 bg-bege text-marrom-escuro hover:border-vermelho/40"
                }`}
              >
                {capitulo.nome}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-sm border border-marrom/15 bg-bege p-6 sm:p-8" role="tabpanel">
            <h4 className="font-serif-editorial text-lg font-semibold text-marrom-escuro">“{atual.nome}”</h4>
            <p className="mt-2 text-sm leading-relaxed text-marrom/85">
              <strong className="text-marrom-escuro">Foco literário: </strong>
              {atual.foco}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {atual.caracteristicas.map((c) => (
                <span key={c} className="rounded-full bg-vermelho/10 px-3 py-1 text-xs font-semibold text-vermelho-escuro">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm italic leading-relaxed text-marrom/80">{atual.observacao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
