import { useState } from "react";
import { focalizacaoPersonagens, narradorDetalhe } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function NarratorSection() {
  const [ativo, setAtivo] = useState(0);

  return (
    <section id="narrador" className="bg-bege py-20 sm:py-28" aria-labelledby="narrador-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Quem conta a história"
          titulo="O narrador"
          descricao="O único romance de Graciliano Ramos inteiramente narrado em terceira pessoa — uma escolha que organiza toda a experiência de leitura."
        />
        <h3 id="narrador-titulo" className="sr-only">Análise do narrador</h3>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CardNarrador titulo="Posição narrativa" texto={narradorDetalhe.posicao} />
          <CardNarrador titulo="Relação com as personagens" texto={narradorDetalhe.relacaoComPersonagens} />
          <CardNarrador titulo="Acesso aos pensamentos" texto={narradorDetalhe.acessoAosPensamentos} />
          <CardNarrador titulo="Distância e aproximação" texto={narradorDetalhe.distanciaEAproximacao} />
        </div>
        <div className="mt-4 rounded-sm border-l-4 border-vermelho bg-bege-clara px-6 py-5 text-sm leading-relaxed text-marrom-escuro">
          <strong>Efeito produzido no leitor: </strong>
          {narradorDetalhe.efeitosNoLeitor}
        </div>

        {/* Focalização */}
        <div id="focalizacao" className="mt-20 scroll-mt-24">
          <h3 className="text-center font-serif-editorial text-2xl font-semibold text-marrom-escuro sm:text-3xl">
            Como enxergamos a história?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-marrom/75">
            A focalização organiza o que o leitor percebe. Em Vidas Secas, ela se desloca entre diferentes
            consciências — inclusive uma não humana.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {focalizacaoPersonagens.map((pessoa, indice) => (
              <button
                key={pessoa.nome}
                type="button"
                onClick={() => setAtivo(indice)}
                aria-pressed={ativo === indice}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  ativo === indice
                    ? "border-vermelho bg-vermelho text-bege-clara"
                    : "border-marrom/20 bg-bege-clara text-marrom-escuro hover:border-vermelho/40"
                }`}
              >
                {pessoa.nome}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-sm border border-marrom/15 bg-bege-clara p-6 text-center sm:p-8">
            <h4 className="font-serif-editorial text-lg font-semibold text-marrom-escuro">
              {focalizacaoPersonagens[ativo].nome}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-marrom/85">{focalizacaoPersonagens[ativo].descricao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardNarrador({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="rounded-sm border border-marrom/15 bg-bege-clara p-5">
      <h4 className="font-serif-editorial text-base font-semibold text-marrom-escuro">{titulo}</h4>
      <p className="mt-2 text-sm leading-relaxed text-marrom/85">{texto}</p>
    </div>
  );
}
