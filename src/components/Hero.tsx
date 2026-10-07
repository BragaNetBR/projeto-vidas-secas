export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-marrom-escuro text-bege-clara" aria-label="Abertura do projeto">
      <div className="absolute inset-0">
        <img
          src="/images/hero-sertao.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover opacity-45"
          onError={(evento) => {
            evento.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marrom-escuro/70 via-marrom-escuro/80 to-marrom-escuro" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-vermelho/50 bg-vermelho/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-vermelho">
          Características da obra
        </span>

        <h1 className="mt-8 text-equilibrado font-serif-editorial text-5xl font-bold sm:text-6xl md:text-7xl">
          Vidas Secas
        </h1>
        <p className="mt-3 font-serif-editorial text-lg italic text-areia sm:text-xl">Graciliano Ramos · 1938</p>

        <div className="linha-rachada my-8 w-32 bg-bege-clara" />

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-bege/90 sm:text-lg">
          Uma leitura das escolhas literárias, narrativas e estilísticas que constroem uma das obras mais marcantes
          da literatura brasileira. Este projeto não resume a história: ele investiga{" "}
          <strong className="text-bege-clara">como ela é construída</strong>.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#caracteristicas"
            className="rounded-sm bg-vermelho px-7 py-3 text-sm font-semibold uppercase tracking-wide text-bege-clara shadow-lg shadow-vermelho/20 transition hover:bg-vermelho-escuro"
          >
            Explorar características
          </a>
          <a
            href="#estrutura"
            className="rounded-sm border border-bege/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-bege-clara transition hover:bg-bege-clara/10"
          >
            Conhecer a estrutura da obra
          </a>
        </div>

        <p className="mt-14 max-w-xl text-xs uppercase tracking-[0.2em] text-bege/60">
          Projeto de leitura dedicado exclusivamente às características literárias de Vidas Secas
        </p>
      </div>
    </section>
  );
}
