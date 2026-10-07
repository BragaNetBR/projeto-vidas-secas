# Projeto de Leitura — Vidas Secas
## Características da Obra

Projeto digital educacional dedicado exclusivamente ao estudo das **características literárias, narrativas,
estruturais e estilísticas** do romance *Vidas Secas* (1938), de Graciliano Ramos.

> **Importante:** este NÃO é um portal geral sobre a obra. Ele não traz biografia completa do autor, resumo
> capítulo por capítulo, nem um estudo isolado dos personagens, da seca ou da desigualdade social. Todo o conteúdo
> só é incluído quando ajuda a explicar **uma característica literária da obra**. Outros grupos podem usar a mesma
> obra com recortes diferentes (ex.: contexto histórico, personagens, crítica social) sem conflito com este projeto.

---

## 1. Objetivo

Mostrar **como Vidas Secas é construída**: como Graciliano Ramos usa a linguagem, organiza a estrutura narrativa,
posiciona o narrador, constrói a focalização, trabalha espaço e tempo, e como a obra dialoga com a segunda fase do
Modernismo brasileiro (geração de 1930).

## 2. Tema do projeto

**Características da obra.** Esse recorte aparece na identidade visual (selo "Características da obra" no topo do
site), na navegação e em cada seção.

## 3. Stack técnica

Este projeto foi implementado como uma aplicação **React + TypeScript + Vite + Tailwind CSS v4**, em vez de arquivos
soltos `index.html` / `style.css` / `dados.js`, pois esse é o ambiente de desenvolvimento utilizado nesta plataforma.
A lógica e a organização pedidas no briefing original foram mantidas, adaptadas para esta arquitetura:

| Pedido original      | Equivalente neste projeto                             |
|-----------------------|--------------------------------------------------------|
| `index.html`          | `index.html` (ponto de entrada do Vite)                |
| `style.css`           | `src/index.css` (tema, paleta, acessibilidade)         |
| `dados.js`            | `src/data/dados.ts` (todo o conteúdo editável + `config`) |
| Pastas `img/`         | `public/images/`                                        |
| Seções HTML fixas     | Componentes React em `src/components/`                 |

O site final é compilado para arquivos estáticos (`npm run build`) e pode ser publicado em qualquer hospedagem
estática, como descrito na seção 14.

## 4. Estrutura de pastas

```
├── index.html                  → título, metadados, ponto de entrada
├── src/
│   ├── App.tsx                 → monta todas as seções, controla config e busca
│   ├── index.css               → paleta de cores, tipografia, acessibilidade
│   ├── data/
│   │   └── dados.ts            → TODO o conteúdo editável + objeto "config"
│   └── components/
│       ├── Nav.tsx             → menu (desktop e mobile) + botão de busca
│       ├── Hero.tsx            → abertura do projeto
│       ├── CharacteristicsSection.tsx
│       ├── LanguageSection.tsx
│       ├── StructureSection.tsx
│       ├── NarratorSection.tsx
│       ├── SpaceTimeSection.tsx
│       ├── ModernismSection.tsx
│       ├── ConnectionsSection.tsx
│       ├── GlossarySection.tsx
│       ├── QuizSection.tsx
│       ├── ReferencesSection.tsx
│       ├── Footer.tsx
│       ├── SearchPanel.tsx     → busca interna (modal)
│       └── ui/                 → Modal.tsx e SectionHeading.tsx (reutilizáveis)
└── public/
    └── images/                 → hero-sertao.jpg, textura-papel.jpg
```

Se uma imagem referenciada em `public/images/` não existir, o site continua funcionando normalmente (o `<img>` do
Hero está preparado para ocultar-se silenciosamente em caso de erro de carregamento).

## 5. Como abrir / rodar localmente

1. Instale as dependências: `npm install`
2. Rode em modo desenvolvimento: `npm run dev`
3. Gere a versão final: `npm run build` (gera a pasta `dist/`)
4. Veja a versão final: `npm run preview`

## 6. Como editar as características

1. Abra `src/data/dados.ts`.
2. Localize o array `caracteristicas`.
3. Copie um objeto inteiro (do `{` ao `}`) para criar uma característica nova.
4. Ajuste `id` (use um número ainda não utilizado), `numero`, `titulo`, `categoria`, `resumo`, `explicacao`,
   `comoAparece`, `importancia`, `elementos` (lista de tags) e `exemplo`.
5. Em `conexoes`, use os `id`s de outras características relacionadas (aparecem como botões no modal de detalhe).
6. Salve o arquivo em UTF-8 e rode `npm run build` para conferir.

## 7. Como adicionar conceitos ao glossário

1. Abra `src/data/dados.ts` e localize o array `glossario`.
2. Copie um bloco existente (`{ termo, definicao, relacao, exemplo }`).
3. Edite os textos mantendo a estrutura.
4. O glossário já possui busca/filtro automático — nenhum passo extra é necessário.

## 8. Como adicionar perguntas ao quiz

1. Localize o array `quiz` em `src/data/dados.ts`.
2. Copie um objeto existente: `pergunta`, `opcoes` (array de 4 alternativas), `correta` (índice da alternativa certa,
   começando em 0) e `explicacao`.
3. A propriedade `perguntasPorPagina`, em `config`, está disponível para uma futura paginação do quiz.

## 9. Como adicionar imagens

1. Coloque o arquivo de imagem dentro de `public/images/`.
2. Referencie o caminho como `/images/nome-do-arquivo.jpg` dentro do componente desejado (ex.: `Hero.tsx`).
3. Prefira imagens otimizadas (abaixo de 500KB) para manter a performance do site.

## 10. Como alterar as cores

As cores do projeto ficam centralizadas em `src/index.css`, dentro do bloco `@theme`:

```css
--color-areia: #e9dcc2;
--color-terra: #9a5a35;
--color-marrom: #4a3626;
--color-bege: #f4ecdd;
--color-vermelho: #a3402b;
--color-azul: #5c7480;
```

Basta alterar os valores hexadecimais. As classes Tailwind (`bg-marrom-escuro`, `text-vermelho-escuro` etc.) são
geradas automaticamente a partir desses nomes.

## 11. Como mostrar/ocultar seções inteiras

No topo de `src/data/dados.ts`, o objeto `config` controla a visibilidade de cada seção:

```ts
export const config = {
  mostrarInicio: true,
  mostrarCaracteristicas: true,
  mostrarLinguagem: true,
  mostrarEstrutura: true,
  mostrarNarrador: true,
  mostrarEspacoTempo: true,
  mostrarModernismo: true,
  mostrarConexoes: true,
  mostrarGlossario: true,
  mostrarQuiz: true,
  mostrarReferencias: true,
  layoutCaracteristicas: "grid",
  perguntasPorPagina: 10,
};
```

Troque qualquer `true` por `false` para ocultar a seção correspondente sem apagar o código.

## 12. Como testar

- Teste em larguras de 320px até 1440px (o layout é mobile-first e responsivo).
- Teste a navegação apenas pelo teclado (Tab, Shift+Tab, Enter, Escape).
- Teste o menu mobile, a busca (modal) e o quiz.
- Verifique se nenhum elemento gera rolagem horizontal.

## 13. Como publicar

### GitHub Pages
1. Rode `npm run build`.
2. Publique o conteúdo da pasta `dist/` na branch `gh-pages` (manualmente ou com uma Action de deploy).
3. Ative o GitHub Pages apontando para essa branch nas configurações do repositório.

### Netlify
1. Conecte o repositório no painel da Netlify.
2. Comando de build: `npm run build`. Diretório de publicação: `dist`.
3. Clique em "Deploy".

### Cloudflare Pages
1. Conecte o repositório no painel da Cloudflare Pages.
2. Comando de build: `npm run build`. Diretório de saída: `dist`.
3. Finalize o deploy.

## 14. Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`, `fieldset`/`legend`).
- Texto alternativo vazio (`alt=""`) em imagens puramente decorativas, com `aria-hidden`.
- Hierarquia de headings coerente (`h1` no Hero, `h2` em cada seção, `h3`/`h4` em subdivisões).
- `:focus-visible` com contorno de alto contraste em toda a interface.
- Modais (busca e detalhe de característica) fecham com `Escape`, travam a rolagem do fundo e movem o foco ao abrir.
- Suporte a `prefers-reduced-motion`, desativando animações para quem prefere menos movimento.
- Nenhuma `div` clicável é usada onde `button` ou `a` seriam mais adequados.

## 15. Direitos autorais

Este projeto **não reproduz a obra integralmente** e **não resume capítulo por capítulo**. O conteúdo é composto por
explicações, análises e paráfrases com finalidade educacional, acompanhadas de referências bibliográficas reais
(ver seção "Referências" do site). Para a leitura completa da obra, consulte uma edição publicada de *Vidas Secas*.
