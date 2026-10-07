import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  titulo: string;
  descricao?: ReactNode;
  claro?: boolean;
}

export default function SectionHeading({ kicker, titulo, descricao, claro }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
          claro ? "border-bege/30 text-bege" : "border-vermelho/30 text-vermelho-escuro"
        }`}
      >
        {kicker}
      </span>
      <h2
        className={`mt-5 text-equilibrado font-serif-editorial text-3xl font-semibold sm:text-4xl ${
          claro ? "text-bege-clara" : "text-marrom-escuro"
        }`}
      >
        {titulo}
      </h2>
      {descricao ? (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${claro ? "text-bege/85" : "text-marrom/80"}`}>
          {descricao}
        </p>
      ) : null}
    </div>
  );
}
