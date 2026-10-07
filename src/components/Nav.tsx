import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#linguagem", label: "Linguagem" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#narrador", label: "Narrador" },
  { href: "#espaco-tempo", label: "Espaço e tempo" },
  { href: "#modernismo", label: "Modernismo" },
  { href: "#conexoes", label: "Conexões" },
  { href: "#glossario", label: "Glossário" },
  { href: "#quiz", label: "Quiz" },
  { href: "#referencias", label: "Referências" },
];

interface NavProps {
  aoAbrirBusca: () => void;
}

export default function Nav({ aoAbrirBusca }: NavProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aoApertarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setMenuAberto(false);
    };
    document.addEventListener("keydown", aoApertarTecla);
    return () => document.removeEventListener("keydown", aoApertarTecla);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
  }, [menuAberto]);

  return (
    <header className="sticky top-0 z-40 border-b border-marrom/10 bg-bege-clara/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-serif-editorial">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marrom-escuro text-sm font-bold text-bege-clara">
            VS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-marrom-escuro sm:text-lg">Vidas Secas</span>
            <span className="text-[11px] font-sans-editorial font-semibold uppercase tracking-[0.18em] text-vermelho-escuro">
              Características da obra
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-medium text-marrom">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded px-1 py-1 transition hover:text-vermelho-escuro">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={aoAbrirBusca}
            className="flex h-10 items-center gap-2 rounded-full border border-marrom/20 bg-bege px-3 text-sm font-medium text-marrom-escuro transition hover:bg-areia sm:px-4"
            aria-label="Abrir busca no projeto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.3-4.3" />
            </svg>
            <span className="hidden sm:inline">Buscar</span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-marrom/20 text-marrom-escuro lg:hidden"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuAberto((valor) => !valor)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              {menuAberto ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuAberto ? (
        <div
          id="menu-mobile"
          ref={menuRef}
          className="border-t border-marrom/10 bg-bege-clara px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-marrom/10 text-base font-medium text-marrom-escuro">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="block py-3 transition hover:text-vermelho-escuro"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
