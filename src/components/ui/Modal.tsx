import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  titulo: string;
  aberto: boolean;
  aoFechar: () => void;
  children: ReactNode;
  rotulo?: string;
}

export default function Modal({ titulo, aberto, aoFechar, children, rotulo }: ModalProps) {
  const fecharBotaoRef = useRef<HTMLButtonElement>(null);
  const conteudoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;

    const aoApertarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        aoFechar();
      }
    };

    document.addEventListener("keydown", aoApertarTecla);
    document.body.style.overflow = "hidden";
    fecharBotaoRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", aoApertarTecla);
      document.body.style.overflow = "";
    };
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-preto/70 p-4 py-10 backdrop-blur-sm sm:p-6"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) aoFechar();
      }}
    >
      <div
        ref={conteudoRef}
        role="dialog"
        aria-modal="true"
        aria-label={rotulo ?? titulo}
        className="relative w-full max-w-2xl rounded-sm border border-marrom/15 bg-bege-clara shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b-2 border-marrom/10 bg-areia/40 px-5 py-4 sm:px-8 sm:py-5">
          <h3 className="font-serif-editorial text-xl font-semibold text-marrom-escuro sm:text-2xl">{titulo}</h3>
          <button
            ref={fecharBotaoRef}
            type="button"
            onClick={aoFechar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-marrom/20 bg-bege-clara text-marrom-escuro transition hover:bg-vermelho hover:text-bege-clara"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">{children}</div>
      </div>
    </div>
  );
}
