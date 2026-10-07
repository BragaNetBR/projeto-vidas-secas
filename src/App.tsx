import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CharacteristicsSection from "./components/CharacteristicsSection";
import LanguageSection from "./components/LanguageSection";
import StructureSection from "./components/StructureSection";
import NarratorSection from "./components/NarratorSection";
import SpaceTimeSection from "./components/SpaceTimeSection";
import ModernismSection from "./components/ModernismSection";
import ConnectionsSection from "./components/ConnectionsSection";
import GlossarySection from "./components/GlossarySection";
import QuizSection from "./components/QuizSection";
import ReferencesSection from "./components/ReferencesSection";
import Footer from "./components/Footer";
import SearchPanel from "./components/SearchPanel";
import { config } from "./data/dados";

export default function App() {
  const [buscaAberta, setBuscaAberta] = useState(false);

  return (
    <div className="min-h-screen bg-bege-clara">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-vermelho focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bege-clara"
      >
        Pular para o conteúdo principal
      </a>

      <Nav aoAbrirBusca={() => setBuscaAberta(true)} />

      <main id="conteudo-principal">
        {config.mostrarInicio ? <Hero /> : null}
        {config.mostrarCaracteristicas ? <CharacteristicsSection /> : null}
        {config.mostrarLinguagem ? <LanguageSection /> : null}
        {config.mostrarEstrutura ? <StructureSection /> : null}
        {config.mostrarNarrador ? <NarratorSection /> : null}
        {config.mostrarEspacoTempo ? <SpaceTimeSection /> : null}
        {config.mostrarModernismo ? <ModernismSection /> : null}
        {config.mostrarConexoes ? <ConnectionsSection /> : null}
        {config.mostrarGlossario ? <GlossarySection /> : null}
        {config.mostrarQuiz ? <QuizSection /> : null}
        {config.mostrarReferencias ? <ReferencesSection /> : null}
      </main>

      <Footer />

      <SearchPanel aberto={buscaAberta} aoFechar={() => setBuscaAberta(false)} />
    </div>
  );
}
