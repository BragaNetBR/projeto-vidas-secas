import { useState } from "react";
import { caracteristicas, categoriasMapa, fluxosConexao } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function ConnectionsSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriasMapa[0].id);
  const categoria = categoriasMapa.find((c) => c.id === categoriaAtiva) ?? categoriasMapa[0];

  return (
    <section id="conexoes" className="bg-bege py-20 sm:py-28" aria-labelledby="conexoes-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Visão de conjunto"
          titulo="Como as características se conectam?"
          descricao="Nenhuma característica de Vidas Secas funciona isoladamente. Os fluxos abaixo mostram como uma escolha literária leva a outra."
        />
        <h3 id="conexoes-titulo" className="sr-only">Conexões entre características</h3>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {fluxosConexao.map((fluxo) => (
            <div key={fluxo.titulo} className="rounded-sm border border-marrom/15 bg-bege-clara p-6">
              <h4 className="font-serif-editorial text-base font-semibold text-marrom-escuro">{fluxo.titulo}</h4>
              <ol className="mt-4 space-y-2">
                {fluxo.etapas.map((etapa, indice) => (
                  <li key={etapa}>
                    <div className="rounded-sm bg-areia/60 px-3 py-2 text-sm font-medium text-marrom-escuro">{etapa}</div>
                    {indice < fluxo.etapas.length - 1 ? (
                      <div className="flex justify-center py-1 text-vermelho-escuro" aria-hidden="true">
                        ↓
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Mapa mental interativo */}
        <div className="mt-20">
          <h3 className="text-center font-serif-editorial text-2xl font-semibold text-marrom-escuro sm:text-3xl">
            Mapa das características
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-marrom/75">
            Clique em uma categoria para ver as características relacionadas a ela.
          </p>

          <div className="mt-10 flex flex-col items-center gap-8">
            <div className="rounded-full border-4 border-vermelho bg-marrom-escuro px-8 py-5 text-center shadow-lg">
              <span className="font-serif-editorial text-xl font-bold text-bege-clara sm:text-2xl">VIDAS SECAS</span>
            </div>

            <div
              className="flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Categorias do mapa de características"
            >
              {categoriasMapa.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={categoriaAtiva === cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    categoriaAtiva === cat.id
                      ? "border-vermelho bg-vermelho text-bege-clara"
                      : "border-marrom/25 bg-bege-clara text-marrom-escuro hover:border-vermelho/50"
                  }`}
                >
                  {cat.nome}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              className="w-full max-w-3xl rounded-sm border border-marrom/15 bg-bege-clara p-6 text-center sm:p-8"
            >
              <h4 className="font-serif-editorial text-lg font-semibold text-marrom-escuro">{categoria.nome}</h4>
              <p className="mt-2 text-sm leading-relaxed text-marrom/80">{categoria.descricao}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {categoria.caracteristicas.map((id) => {
                  const c = caracteristicas.find((item) => item.id === id);
                  if (!c) return null;
                  return (
                    <span
                      key={id}
                      className="rounded-full bg-vermelho/10 px-3 py-1.5 text-xs font-semibold text-vermelho-escuro"
                    >
                      {String(c.numero).padStart(2, "0")} · {c.titulo}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
