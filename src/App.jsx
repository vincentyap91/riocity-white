import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesRow from './components/FeaturesRow';
import PlayersPromo from './components/PlayersPromo';
import GameCategories from './components/GameCategories';
import TopGames from './components/TopGames';
import VipTier from './components/VipTier';
import AppDownload from './components/AppDownload';
import Promos from './components/Promos';
import LiveCasinoPage from './components/LiveCasinoPage';
import SlotsPage from './components/SlotsPage';
import ProfilePage from './components/ProfilePage';
import AccountLayout from './components/AccountLayout';
import RegisterPage from './components/RegisterPage';
import VerificationPage from './components/VerificationPage';
import FavouritesPage from './components/FavouritesPage';
import MyBetsPage from './components/MyBetsPage';
import BetSlipPage from './components/BetSlipPage';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import LoginModal from './components/LoginModal';
import './index.css';
import LiveChatModal from './components/LiveChatModal';

function resolvePageFromPath() {
  const pathname = window.location.pathname.toLowerCase();
  if (pathname === '/casino' || pathname === '/live-casino') {
    return 'live-casino';
  }
  if (pathname === '/slots') {
    return 'slots';
  }
  if (pathname === '/register') {
    return 'register';
  }
  if (pathname === '/profile' || pathname === '/account-details') {
    return 'profile';
  }
  if (pathname === '/verification') {
    return 'verification';
  }
  if (pathname === '/favourites') {
    return 'favourites';
  }
  if (pathname === '/my-bets') {
    return 'my-bets';
  }
  if (pathname === '/bet-slip') {
    return 'bet-slip';
  }
  return 'home';
}

function App() {
  const [page, setPage] = useState(resolvePageFromPath);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const onPopState = () => setPage(resolvePageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (targetPage) => {
    const pathByPage = {
      home: '/',
      'live-casino': '/casino',
      slots: '/slots',
      register: '/register',
      profile: '/profile',
      verification: '/verification',
      favourites: '/favourites',
      'my-bets': '/my-bets',
      'bet-slip': '/bet-slip',
    };
    const nextPath = pathByPage[targetPage] ?? '/';
    setPage(targetPage);

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden font-sans ${
      page === 'home'
        ? 'bg-[var(--color-page-home)]'
        : page === 'register'
          ? 'bg-[var(--color-page-register)]'
          : page === 'slots'
            ? 'bg-[var(--color-page-default)]'
            : page === 'profile' || page === 'verification' || page === 'favourites' || page === 'my-bets' || page === 'bet-slip'
              ? 'bg-[var(--color-page-account)]'
              : 'bg-[var(--color-page-default)]'
    }`}>
      {(page === 'home' || page === 'slots') && <FloatingSocials onLiveChatClick={() => setLiveChatOpen((open) => !open)} />}

      <Navbar
        onNavigate={handleNavigate}
        activePage={page}
        onLoginClick={() => setLoginModalOpen(true)}
        onRegisterClick={() => handleNavigate('register')}
        authUser={authUser}
        onLogout={() => setAuthUser(null)}
        onAccountDetailsClick={() => handleNavigate('profile')}
        onBetSlipClick={() => handleNavigate('bet-slip')}
      />

      <div className="pt-[88px]">
      {page === 'home' ? (
        <>
          {/* Hero sits just underneath */}
          <HeroSection />

          {/* Main Content Area */}
          <div className="page-container flex flex-col gap-8 pb-10">
            <FeaturesRow />
            <PlayersPromo />
            <GameCategories />
            <TopGames />
            <VipTier />
            <AppDownload />
            <Promos />
          </div>
        </>
      ) : page === 'live-casino' ? (
        <LiveCasinoPage />
      ) : page === 'slots' ? (
        <SlotsPage />
      ) : page === 'profile' ? (
        <ProfilePage authUser={authUser} onLogout={() => setAuthUser(null)} onNavigate={handleNavigate} />
      ) : page === 'verification' ? (
        <AccountLayout activePage="verification" authUser={authUser} onNavigate={handleNavigate} onLogout={() => setAuthUser(null)}>
          <VerificationPage />
        </AccountLayout>
      ) : page === 'favourites' ? (
        <AccountLayout activePage="favourites" authUser={authUser} onNavigate={handleNavigate} onLogout={() => setAuthUser(null)}>
          <FavouritesPage />
        </AccountLayout>
      ) : page === 'my-bets' ? (
        <AccountLayout activePage="my-bets" authUser={authUser} onNavigate={handleNavigate} onLogout={() => setAuthUser(null)}>
          <MyBetsPage />
        </AccountLayout>
      ) : page === 'bet-slip' ? (
        <AccountLayout activePage="bet-slip" authUser={authUser} onNavigate={handleNavigate} onLogout={() => setAuthUser(null)}>
          <BetSlipPage />
        </AccountLayout>
      ) : (
        <RegisterPage onLoginClick={() => setLoginModalOpen(true)} />
      )}

      <Footer />
      </div>

      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        logoText="LOGO"
        onLogin={(username) => {
          setAuthUser({
            name: username || 'vincentzo',
            balance: 'MYR 0.00',
            notifications: 1,
          });
          setLoginModalOpen(false);
        }}
        onRegisterClick={() => {
          setLoginModalOpen(false);
          handleNavigate('register');
        }}
      />

      <LiveChatModal
        open={liveChatOpen}
        onClose={() => setLiveChatOpen(false)}
        authUser={authUser}
      />
    </div>
  );
}

export default App;
