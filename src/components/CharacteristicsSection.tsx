import { useState } from "react";
import { caracteristicas, guiaDeLeitura, type Caracteristica } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";
import Modal from "./ui/Modal";

export default function CharacteristicsSection() {
  const [selecionada, setSelecionada] = useState<Caracteristica | null>(null);

  function abrirPorId(id: number) {
    const encontrada = caracteristicas.find((c) => c.id === id);
    if (encontrada) setSelecionada(encontrada);
  }

  return (
    <section id="caracteristicas" className="bg-bege-clara py-20 sm:py-28" aria-labelledby="caracteristicas-titulo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="O núcleo do projeto"
          titulo="Características de Vidas Secas"
          descricao="Vinte escolhas literárias, narrativas e estilísticas que explicam como a obra é construída. Cada cartão aprofunda uma característica: o que é, como aparece no romance e por que importa."
        />
        <h3 id="caracteristicas-titulo" className="sr-only">
          Lista de características
        </h3>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {caracteristicas.map((caracteristica) => (
            <button
              key={caracteristica.id}
              type="button"
              onClick={() => setSelecionada(caracteristica)}
              className="group flex h-full flex-col rounded-sm border border-marrom/12 bg-bege p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-vermelho/40 hover:shadow-lg"
            >
              <span className="font-serif-editorial text-3xl font-bold text-vermelho/70">
                {String(caracteristica.numero).padStart(2, "0")}
              </span>
              <h4 className="mt-3 font-serif-editorial text-lg font-semibold text-marrom-escuro">
                {caracteristica.titulo}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-marrom/80">{caracteristica.resumo}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-vermelho-escuro">
                Ver análise completa
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5 transition group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-20 rounded-sm border border-marrom/12 bg-marrom-escuro px-6 py-10 text-bege-clara sm:px-10">
          <h3 className="font-serif-editorial text-2xl font-semibold">
            Como reconhecer essas características durante a leitura
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-bege/80">
            Use estas perguntas orientadoras como roteiro enquanto lê os capítulos — elas ajudam a observar a
            construção da obra, não apenas o enredo.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {guiaDeLeitura.map((pergunta, indice) => (
              <li key={pergunta} className="flex gap-3 text-sm leading-relaxed text-bege/90">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vermelho/80 text-xs font-bold text-bege-clara">
                  {indice + 1}
                </span>
                {pergunta}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        titulo={selecionada ? `${String(selecionada.numero).padStart(2, "0")} · ${selecionada.titulo}` : ""}
        aberto={!!selecionada}
        aoFechar={() => setSelecionada(null)}
      >
        {selecionada ? (
          <div className="space-y-6 text-marrom-escuro">
            <span className="inline-block rounded-full bg-areia px-3 py-1 text-xs font-semibold uppercase tracking-wide text-marrom-escuro">
              Categoria: {selecionada.categoria}
            </span>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Definição</h4>
              <p className="mt-1 text-sm leading-relaxed">{selecionada.resumo}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Explicação</h4>
              <p className="mt-1 text-sm leading-relaxed">{selecionada.explicacao}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Como aparece em Vidas Secas</h4>
              <p className="mt-1 text-sm leading-relaxed">{selecionada.comoAparece}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Por que é importante</h4>
              <p className="mt-1 text-sm leading-relaxed">{selecionada.importancia}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Exemplo (paráfrase)</h4>
              <p className="mt-1 rounded-sm border-l-4 border-vermelho/50 bg-bege/70 px-4 py-3 text-sm italic leading-relaxed">
                {selecionada.exemplo}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">Elementos relacionados</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {selecionada.elementos.map((elemento) => (
                  <span key={elemento} className="rounded-full border border-marrom/20 px-3 py-1 text-xs text-marrom">
                    {elemento}
                  </span>
                ))}
              </div>
            </div>

            {selecionada.conexoes.length > 0 ? (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho-escuro">
                  Conexão com outras características
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selecionada.conexoes.map((id) => {
                    const relacionada = caracteristicas.find((c) => c.id === id);
                    if (!relacionada) return null;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => abrirPorId(id)}
                        className="rounded-full bg-vermelho/10 px-3 py-1 text-xs font-semibold text-vermelho-escuro transition hover:bg-vermelho hover:text-bege-clara"
                      >
                        {String(relacionada.numero).padStart(2, "0")} · {relacionada.titulo}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
