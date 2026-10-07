import { useState } from "react";
import { quiz } from "../data/dados";
import SectionHeading from "./ui/SectionHeading";

export default function QuizSection() {
  const [respostas, setRespostas] = useState<(number | null)[]>(() => quiz.map(() => null));
  const [enviado, setEnviado] = useState(false);

  const acertos = respostas.reduce<number>(
    (total, resposta, indice) => (resposta === quiz[indice].correta ? total + 1 : total),
    0
  );
  const todasRespondidas = respostas.every((resposta) => resposta !== null);

  function selecionar(perguntaIndice: number, opcaoIndice: number) {
    if (enviado) return;
    setRespostas((atual) => {
      const copia = [...atual];
      copia[perguntaIndice] = opcaoIndice;
      return copia;
    });
  }

  function reiniciar() {
    setRespostas(quiz.map(() => null));
    setEnviado(false);
  }

  return (
    <section id="quiz" className="bg-bege py-20 sm:py-28" aria-labelledby="quiz-titulo">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Avaliar a compreensão"
          titulo="Quiz: características de Vidas Secas"
          descricao="Perguntas sobre linguagem, estrutura, narrador e contexto estético — não sobre datas ou biografia."
        />
        <h3 id="quiz-titulo" className="sr-only">Perguntas do quiz</h3>

        {enviado ? (
          <div
            className="mt-10 rounded-sm border border-vermelho/30 bg-bege-clara p-6 text-center"
            role="status"
            aria-live="polite"
          >
            <p className="font-serif-editorial text-2xl font-semibold text-marrom-escuro">
              Você acertou {acertos} de {quiz.length}
            </p>
            <button
              type="button"
              onClick={reiniciar}
              className="mt-4 rounded-full bg-vermelho px-6 py-2.5 text-sm font-semibold text-bege-clara transition hover:bg-vermelho-escuro"
            >
              Refazer o quiz
            </button>
          </div>
        ) : null}

        <form
          className="mt-10 space-y-6"
          onSubmit={(evento) => {
            evento.preventDefault();
            setEnviado(true);
          }}
        >
          {quiz.map((pergunta, perguntaIndice) => {
            const respostaAtual = respostas[perguntaIndice];
            return (
              <fieldset
                key={pergunta.pergunta}
                className="rounded-sm border border-marrom/15 bg-bege-clara p-5 sm:p-6"
              >
                <legend className="px-1 font-serif-editorial text-base font-semibold text-marrom-escuro">
                  {perguntaIndice + 1}. {pergunta.pergunta}
                </legend>
                <div className="mt-3 space-y-2">
                  {pergunta.opcoes.map((opcao, opcaoIndice) => {
                    const id = `pergunta-${perguntaIndice}-opcao-${opcaoIndice}`;
                    const correta = enviado && opcaoIndice === pergunta.correta;
                    const incorretaSelecionada =
                      enviado && respostaAtual === opcaoIndice && opcaoIndice !== pergunta.correta;
                    return (
                      <label
                        key={id}
                        htmlFor={id}
                        className={`flex cursor-pointer items-start gap-3 rounded-sm border px-4 py-2.5 text-sm transition ${
                          correta
                            ? "border-green-700/40 bg-green-700/10 text-green-900"
                            : incorretaSelecionada
                              ? "border-vermelho/50 bg-vermelho/10 text-vermelho-escuro"
                              : "border-marrom/15 bg-bege text-marrom-escuro hover:border-vermelho/30"
                        }`}
                      >
                        <input
                          id={id}
                          type="radio"
                          name={`pergunta-${perguntaIndice}`}
                          checked={respostaAtual === opcaoIndice}
                          onChange={() => selecionar(perguntaIndice, opcaoIndice)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-vermelho"
                        />
                        <span>{opcao}</span>
                      </label>
                    );
                  })}
                </div>
                {enviado ? (
                  <p className="mt-3 rounded-sm bg-areia/50 px-4 py-2 text-xs leading-relaxed text-marrom-escuro">
                    <strong>Por quê: </strong>
                    {pergunta.explicacao}
                  </p>
                ) : null}
              </fieldset>
            );
          })}

          {!enviado ? (
            <button
              type="submit"
              disabled={!todasRespondidas}
              className="w-full rounded-full bg-vermelho px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bege-clara transition hover:bg-vermelho-escuro disabled:cursor-not-allowed disabled:opacity-40"
            >
              {todasRespondidas ? "Ver resultado" : "Responda todas as perguntas para ver o resultado"}
            </button>
          ) : null}
        </form>
      </div>
    </section>
  );
}
