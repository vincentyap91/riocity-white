import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesRow from './components/FeaturesRow';
import PlayersPromo from './components/PlayersPromo';
import GameCategories from './components/GameCategories';
import TopGames from './components/TopGames';
import VipTier from './components/VipTier';
import AppDownload from './components/AppDownload';
import Promos from './components/Promos';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import './index.css';

function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-[#e6f4fd] overflow-x-hidden relative">
      <FloatingSocials />

      {/* Navbar sits at the standard document flow but controls its own absolute positioning if needed */}
      <Navbar />

      {/* Hero sits just underneath */}
      <HeroSection />

      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-8 pb-10">
        <FeaturesRow />
        <PlayersPromo />
        <GameCategories />
        <TopGames />
        <VipTier />
        <AppDownload />
        <Promos />
      </div>

      <Footer />
    </div>
  );
}

export default App;
