import { useMemo, useState } from "react";
import { glossario } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function GlossarySection() {
  const [termo, setTermo] = useState("");

  const resultados = useMemo(() => {
    const busca = termo.trim().toLowerCase();
    if (!busca) return glossario;
    return glossario.filter(
      (item) =>
        item.termo.toLowerCase().includes(busca) ||
        item.definicao.toLowerCase().includes(busca) ||
        item.relacao.toLowerCase().includes(busca)
    );
  }, [termo]);

  return (
    <section id="glossario" className="bg-bege-clara py-20 sm:py-28" aria-labelledby="glossario-titulo">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Vocabulário de análise"
          titulo="Glossário literário"
          descricao="Conceitos essenciais para compreender as características estudadas neste projeto."
        />
        <h3 id="glossario-titulo" className="sr-only">Lista de termos</h3>

        <div className="mx-auto mt-10 max-w-md">
          <label htmlFor="busca-glossario" className="sr-only">
            Filtrar termos do glossário
          </label>
          <div className="relative">
            <input
              id="busca-glossario"
              type="search"
              value={termo}
              onChange={(evento) => setTermo(evento.target.value)}
              placeholder="Filtrar termo (ex.: narrador, interioridade...)"
              className="w-full rounded-full border border-marrom/25 bg-bege py-2.5 pl-10 pr-4 text-sm text-marrom-escuro placeholder:text-marrom/50 focus:border-vermelho"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-marrom/50"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <p className="mt-2 text-center text-xs text-marrom/60" aria-live="polite">
            {resultados.length} {resultados.length === 1 ? "termo encontrado" : "termos encontrados"}
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {resultados.map((item) => (
            <details key={item.termo} className="group rounded-sm border border-marrom/15 bg-bege p-5 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-serif-editorial text-base font-semibold text-marrom-escuro">
                {item.termo}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 text-vermelho-escuro transition group-open:rotate-45">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-marrom/85">
                <p>
                  <strong className="text-marrom-escuro">Definição: </strong>
                  {item.definicao}
                </p>
                <p>
                  <strong className="text-marrom-escuro">Relação com Vidas Secas: </strong>
                  {item.relacao}
                </p>
                <p className="italic">
                  <strong className="not-italic text-marrom-escuro">Exemplo: </strong>
                  {item.exemplo}
                </p>
              </div>
            </details>
          ))}
          {resultados.length === 0 ? (
            <p className="rounded-sm border border-dashed border-marrom/25 bg-bege px-6 py-8 text-center text-sm text-marrom/70">
              Nenhum termo encontrado para “{termo}”.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
