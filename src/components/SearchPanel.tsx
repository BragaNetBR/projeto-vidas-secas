import { useEffect, useMemo, useState } from "react";
import { caracteristicas, glossario } from "../data/dados";
import Modal from "./ui/Modal";

type Filtro = "todos" | "caracteristicas" | "glossario";

interface Resultado {
  tipo: "Característica" | "Glossário";
  titulo: string;
  trecho: string;
  href: string;
}

const PASSO_INCREMENTAL = 6;

export default function SearchPanel({ aberto, aoFechar }: { aberto: boolean; aoFechar: () => void }) {
  const [consulta, setConsulta] = useState("");
  const [consultaDebounced, setConsultaDebounced] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [limite, setLimite] = useState(PASSO_INCREMENTAL);

  useEffect(() => {
    if (!aberto) {
      setConsulta("");
      setConsultaDebounced("");
      setFiltro("todos");
      setLimite(PASSO_INCREMENTAL);
    }
  }, [aberto]);

  useEffect(() => {
    const temporizador = setTimeout(() => setConsultaDebounced(consulta), 160);
    return () => clearTimeout(temporizador);
  }, [consulta]);

  useEffect(() => {
    setLimite(PASSO_INCREMENTAL);
  }, [consultaDebounced, filtro]);

  const resultados: Resultado[] = useMemo(() => {
    const busca = consultaDebounced.trim().toLowerCase();
    if (!busca) return [];

    const deCaracteristicas: Resultado[] =
      filtro === "glossario"
        ? []
        : caracteristicas
            .filter((c) =>
              [c.titulo, c.resumo, c.explicacao, c.categoria, ...c.elementos].join(" ").toLowerCase().includes(busca)
            )
            .map((c) => ({
              tipo: "Característica",
              titulo: `${String(c.numero).padStart(2, "0")} · ${c.titulo}`,
              trecho: c.resumo,
              href: "#caracteristicas",
            }));

    const deGlossario: Resultado[] =
      filtro === "caracteristicas"
        ? []
        : glossario
            .filter((g) => [g.termo, g.definicao, g.relacao].join(" ").toLowerCase().includes(busca))
            .map((g) => ({
              tipo: "Glossário",
              titulo: g.termo,
              trecho: g.definicao,
              href: "#glossario",
            }));

    return [...deCaracteristicas, ...deGlossario];
  }, [consultaDebounced, filtro]);

  const visiveis = resultados.slice(0, limite);

  return (
    <Modal titulo="Buscar no projeto" aberto={aberto} aoFechar={aoFechar} rotulo="Busca interna do projeto">
      <div className="space-y-5">
        <div className="relative">
          <label htmlFor="campo-busca-geral" className="sr-only">
            Buscar características, conceitos ou termos do glossário
          </label>
          <input
            id="campo-busca-geral"
            type="search"
            autoFocus
            value={consulta}
            onChange={(evento) => setConsulta(evento.target.value)}
            placeholder="Ex.: discurso indireto livre, silêncio, regionalismo..."
            className="w-full rounded-full border border-marrom/25 bg-bege py-3 pl-11 pr-4 text-sm text-marrom-escuro placeholder:text-marrom/50 focus:border-vermelho"
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-marrom/50">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-2">
          {([
            { id: "todos", label: "Todos" },
            { id: "caracteristicas", label: "Características" },
            { id: "glossario", label: "Glossário" },
          ] as { id: Filtro; label: string }[]).map((opcao) => (
            <button
              key={opcao.id}
              type="button"
              onClick={() => setFiltro(opcao.id)}
              aria-pressed={filtro === opcao.id}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                filtro === opcao.id
                  ? "border-vermelho bg-vermelho text-bege-clara"
                  : "border-marrom/20 bg-bege text-marrom-escuro hover:border-vermelho/40"
              }`}
            >
              {opcao.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-marrom/60" aria-live="polite">
          {consultaDebounced
            ? `${resultados.length} ${resultados.length === 1 ? "resultado encontrado" : "resultados encontrados"}`
            : "Digite para pesquisar características, explicações e conceitos do glossário."}
        </p>

        <ul className="space-y-2">
          {visiveis.map((resultado) => (
            <li key={`${resultado.tipo}-${resultado.titulo}`}>
              <a
                href={resultado.href}
                onClick={aoFechar}
                className="block rounded-sm border border-marrom/15 bg-bege px-4 py-3 transition hover:border-vermelho/40"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide text-vermelho-escuro">
                  {resultado.tipo}
                </span>
                <p className="mt-0.5 font-serif-editorial text-sm font-semibold text-marrom-escuro">{resultado.titulo}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-marrom/75">{resultado.trecho}</p>
              </a>
            </li>
          ))}
        </ul>

        {consultaDebounced && resultados.length === 0 ? (
          <p className="rounded-sm border border-dashed border-marrom/25 bg-bege px-6 py-8 text-center text-sm text-marrom/70">
            Nenhum resultado encontrado para “{consultaDebounced}”.
          </p>
        ) : null}

        {resultados.length > limite ? (
          <button
            type="button"
            onClick={() => setLimite((valor) => valor + PASSO_INCREMENTAL)}
            className="w-full rounded-full border border-marrom/20 bg-bege py-2 text-xs font-semibold uppercase tracking-wide text-marrom-escuro transition hover:border-vermelho/40"
          >
            Mostrar mais resultados
          </button>
        ) : null}
      </div>
    </Modal>
  );
}
