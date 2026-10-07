import { discursoIndiretoLivre, linguagemDetalhe, silencioDetalhe } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function LanguageSection() {
  return (
    <section id="linguagem" className="bg-bege py-20 sm:py-28" aria-labelledby="linguagem-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Escolha estética"
          titulo="A linguagem de Vidas Secas"
          descricao={
            <>
              A simplicidade da prosa de Graciliano Ramos não é ingenuidade: é construção. <br className="hidden sm:block" />
              Cada corte de palavra tem função literária.
            </>
          }
        />
        <h3 id="linguagem-titulo" className="sr-only">Análise da linguagem</h3>

        <p
          className="mx-auto mt-10 max-w-3xl rounded-sm border-l-4 border-vermelho bg-bege-clara bg-cover bg-center bg-blend-overlay px-6 py-5 text-center text-base italic leading-relaxed text-marrom-escuro"
          style={{ backgroundImage: "linear-gradient(rgba(250,246,236,0.94), rgba(250,246,236,0.94)), url(/images/textura-papel.jpg)" }}
        >
          “{linguagemDetalhe.introducao}”
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {linguagemDetalhe.topicos.map((topico) => (
            <details
              key={topico.titulo}
              className="group rounded-sm border border-marrom/15 bg-bege-clara p-5 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-serif-editorial text-lg font-semibold text-marrom-escuro">
                {topico.titulo}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 shrink-0 text-vermelho-escuro transition group-open:rotate-45"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-marrom/85">{topico.texto}</p>
            </details>
          ))}
        </div>

        {/* Discurso Indireto Livre */}
        <div id="discurso-indireto-livre" className="mt-20 scroll-mt-24 rounded-sm bg-marrom-escuro px-6 py-10 text-bege-clara sm:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-vermelho">Recurso narrativo central</span>
          <h3 className="mt-3 font-serif-editorial text-2xl font-semibold sm:text-3xl">O discurso indireto livre</h3>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-areia">O que é</h4>
                <p className="mt-1 text-sm leading-relaxed text-bege/90">{discursoIndiretoLivre.definicao}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-areia">Como funciona</h4>
                <p className="mt-1 text-sm leading-relaxed text-bege/90">{discursoIndiretoLivre.funcionamento}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-areia">Como aparece na obra</h4>
                <p className="mt-1 text-sm leading-relaxed text-bege/90">{discursoIndiretoLivre.comoAparece}</p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-areia">Por que é importante</h4>
                <p className="mt-1 text-sm leading-relaxed text-bege/90">{discursoIndiretoLivre.importancia}</p>
              </div>
              <div className="rounded-sm border border-bege/20 bg-bege-clara/5 px-5 py-4">
                <h4 className="text-xs font-bold uppercase tracking-wide text-vermelho">Exemplo explicado por paráfrase</h4>
                <p className="mt-2 text-sm italic leading-relaxed text-bege/90">{discursoIndiretoLivre.exemploParafrase}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Silêncio */}
        <div id="silencio" className="mt-12 scroll-mt-24 grid grid-cols-1 gap-8 rounded-sm border border-marrom/15 bg-bege-clara p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-vermelho-escuro">Recurso narrativo</span>
            <h3 className="mt-3 font-serif-editorial text-2xl font-semibold text-marrom-escuro">
              O silêncio como recurso narrativo
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-marrom/85">{silencioDetalhe.introducao}</p>
          </div>
          <ul className="space-y-3">
            {silencioDetalhe.pontos.map((ponto) => (
              <li key={ponto} className="flex gap-3 rounded-sm bg-bege px-4 py-3 text-sm leading-relaxed text-marrom-escuro">
                <span aria-hidden="true" className="font-serif-editorial text-lg font-bold text-vermelho/60">
                  —
                </span>
                {ponto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
