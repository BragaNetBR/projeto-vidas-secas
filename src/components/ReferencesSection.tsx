import { referencias } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function ReferencesSection() {
  return (
    <section id="referencias" className="bg-bege-clara py-20 sm:py-24" aria-labelledby="referencias-titulo">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Fontes consultadas"
          titulo="Referências"
          descricao="Este projeto é uma produção analítica e educacional. Não reproduz a obra na íntegra nem substitui a leitura integral do romance."
        />
        <h3 id="referencias-titulo" className="sr-only">Lista de referências</h3>

        <ul className="mt-10 space-y-4">
          {referencias.map((referencia) => (
            <li key={referencia.texto} className="rounded-sm border border-marrom/15 bg-bege p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-vermelho-escuro">
                {referencia.tipo}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-marrom-escuro">
                {referencia.url ? (
                  <a href={referencia.url} target="_blank" rel="noreferrer" className="underline decoration-vermelho/50 underline-offset-2 hover:text-vermelho-escuro">
                    {referencia.texto}
                  </a>
                ) : (
                  referencia.texto
                )}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-sm border border-dashed border-marrom/25 bg-bege px-6 py-5 text-xs leading-relaxed text-marrom/70">
          <p>
            <strong className="text-marrom-escuro">Nota sobre direitos autorais:</strong> os trechos citados neste
            projeto são paráfrases e pequenas referências explicativas, utilizados exclusivamente para fins
            educacionais e de análise literária, sem reprodução integral de capítulos da obra.
          </p>
        </div>
      </div>
    </section>
  );
}
