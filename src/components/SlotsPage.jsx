import React, { useMemo, useState } from 'react';
import { Info, Search, Sparkles, Zap } from 'lucide-react';
import slotsBanner from '../assets/slot-banner.jpg';
import pragmaticLogo from '../assets/pp-live-casino-202505140447187176-202506240700358930.svg';
import evolutionLogo from '../assets/evolution-202505140444284259-202506242322200281.svg';
import playtechLogo from '../assets/playtech-202505140443475046-202506242335087315.svg';

const slotProviders = [
    { name: 'Pragmatic Play', src: pragmaticLogo, featured: true },
    { name: 'Evolution', src: evolutionLogo, featured: true },
    { name: 'Playtech', src: playtechLogo, featured: true },
    { name: 'JILI', src: pragmaticLogo, featured: true },
    { name: 'JOKER', src: evolutionLogo, featured: false },
    { name: 'CQ9', src: playtechLogo, featured: false },
    { name: 'FAT', src: pragmaticLogo, featured: false },
    { name: 'RESPE', src: evolutionLogo, featured: false },
];

const topSlots = [
    { name: 'Zeus vs Hades - Gods of War', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Gates of Olympus', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Olympus 1000', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Sugar Rush', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Dragon King', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
];

const slotGames = [
    { name: 'Zeus vs Hades', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', hot: true },
    { name: 'Gates of Olympus', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', hot: true },
    { name: 'Olympus 1000', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', new: true },
    { name: 'Sugar Rush', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: "Mummy's Jewels", provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Lions Megacas', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Treasure Island', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Knights', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Cyber Heist', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Hot Tuna', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Chili Heat', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
    { name: 'Magic Eggs', provider: 'Pragmatic Play', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png' },
];

const quickStats = [
    { value: '3000+', label: 'Slot Games', icon: Zap },
    { value: 'MYR 50M', label: 'Jackpot Pool', icon: Sparkles },
    { value: 'Up to 1.2%', label: 'Instant Rebate', icon: Zap }
];

const gameTabs = ['All Games', 'Hot Games', 'New Games', 'Highest RTP'];

export default function SlotsPage() {
    const [activeTab, setActiveTab] = useState('All Games');
    const [query, setQuery] = useState('');

    const filteredGames = useMemo(() => {
        const text = query.trim().toLowerCase();
        return slotGames.filter((game) => {
            const tabMatch =
                activeTab === 'All Games'
                    ? true
                    : activeTab === 'Hot Games'
                        ? game.hot
                        : activeTab === 'New Games'
                            ? game.new
                            : true;
            const textMatch = text ? game.name.toLowerCase().includes(text) || game.provider.toLowerCase().includes(text) : true;
            return tabMatch && textMatch;
        });
    }, [activeTab, query]);

    return (
        <main
            className="w-full pb-14 bg-[linear-gradient(180deg,var(--gradient-live-page-start)_0%,var(--gradient-live-page-mid)_36%,var(--gradient-live-page-end)_100%)]"
            style={{ fontFamily: 'Bahnschrift, "Trebuchet MS", Verdana, sans-serif' }}
        >
            <section className="w-full border-y border-[rgb(219_226_240)] bg-[var(--color-surface-base-85)] backdrop-blur">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(102_112_134)]">
                        Instant Rebate Slots
                    </div>
                    <div className="hidden items-center gap-3 text-xs font-semibold text-[rgb(83_96_122)] sm:flex">
                        <span>No Waiting</span>
                        <span className="h-1 w-1 rounded-full bg-[rgb(153_166_190)]"></span>
                        <span>No One Rivals Us</span>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full mx-auto">
                    <div className="relative overflow-hidden border border-[var(--color-border-live)] shadow-[var(--shadow-live-banner)]">
                        <img
                            src={slotsBanner}
                            alt="Slots Banner - Instant Rebate"
                            className="block h-auto w-full bg-[rgb(221_232_248)]"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4">
                <p className="text-xl font-extrabold tracking-[0.02em] text-[rgb(28_40_65)] md:text-2xl">Top games</p>
                <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                    {topSlots.map((game, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="group flex shrink-0 w-[140px] md:w-[180px] flex-col overflow-hidden rounded-xl border border-[rgb(216_225_242)] bg-[var(--color-surface-base)] shadow-[var(--shadow-live-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-t-xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${game.imgUrl}")` }}
                                />
                            </div>
                            <div className="p-2 md:p-3">
                                <div className="flex items-start gap-1">
                                    <span className="text-xs md:text-sm font-bold text-[rgb(42_53_72)] line-clamp-2">{game.name}</span>
                                    <Info size={12} className="mt-0.5 shrink-0 text-[rgb(106_117_144)]" />
                                </div>
                                <p className="mt-1 text-[10px] md:text-xs text-[rgb(106_117_144)]">{game.provider}</p>
                                <span className="btn-theme-cta mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg px-2 text-xs font-bold">
                                    PLAY NOW
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4">
                <div className="flex flex-wrap gap-2">
                    {slotProviders.map((provider) => (
                        <button
                            key={provider.name}
                            type="button"
                            className="relative flex h-14 w-[100px] md:h-16 md:w-[120px] items-center justify-center rounded-2xl border border-[rgb(209_216_229)] bg-[var(--color-surface-base)] px-2 shadow-[var(--shadow-live-provider)] transition hover:-translate-y-0.5 hover:border-[rgb(183_194_215)] hover:shadow-[var(--shadow-live-provider-hover)]"
                        >
                            {provider.featured && (
                                <span className="absolute right-1 top-1 rounded-full bg-[var(--color-hot-main)] px-2 py-0.5 text-[10px] font-black text-white">
                                    HOT
                                </span>
                            )}
                            <img src={provider.src} alt={provider.name} className="max-h-8 md:max-h-10 object-contain" />
                        </button>
                    ))}
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4 md:mt-6">
                <div className="rounded-2xl border border-[rgb(219_228_243)] bg-[var(--color-surface-base-80)] p-4 shadow-[0_6px_18px_rgba(20,43,87,0.09)] backdrop-blur-sm md:p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                            {gameTabs.map((tab) => {
                                const selected = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-1.5 rounded-full text-xs md:text-xs font-bold tracking-wide border transition ${
                                            selected
                                                ? 'bg-[linear-gradient(180deg,#ffd86f_0%,#ffb038_100%)] text-[rgb(45_26_0)] border-[rgb(255_191_83)] shadow-[0_5px_10px_rgba(255,176,56,0.2)]'
                                                : 'bg-[var(--color-surface-base)] text-[rgb(64_81_114)] border-[rgb(215_224_239)] hover:border-[rgb(184_198_226)] hover:text-[rgb(34_51_90)]'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>
                        <label className="flex h-11 w-full items-center gap-2 rounded-xl border border-[var(--color-border-live)] bg-[var(--color-surface-base)] px-3 shadow-[inset_0_1px_2px_rgba(9,30,66,0.06)] lg:w-[280px]">
                            <Search size={16} className="text-[rgb(95_110_139)]" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search Games"
                                className="w-full bg-transparent text-sm font-semibold text-[rgb(42_58_88)] outline-none placeholder:text-[rgb(139_151_174)]"
                            />
                        </label>
                    </div>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-danger-main)]">
                        Live RTP updates every 30 minutes. Last system update at 3:00 PM (GMT+8).
                    </p>
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-4">
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {quickStats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <article
                                key={stat.label}
                                className="rounded-xl border border-[rgb(216_225_242)] bg-[linear-gradient(180deg,var(--gradient-soft-panel-start)_0%,#f4f8ff_100%)] px-2 py-2 text-[rgb(35_49_77)] shadow-[var(--shadow-live-card)] md:rounded-2xl md:px-4 md:py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <Icon size={14} className="text-[rgb(53_96_170)] md:h-[18px] md:w-[18px]" />
                                    <p className="text-base md:text-2xl font-extrabold leading-none">{stat.value}</p>
                                </div>
                                <p className="text-xs md:text-xs tracking-[0.08em] uppercase mt-1 opacity-90">{stat.label}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-5 md:mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {filteredGames.map((game, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgb(216_225_242)] bg-[var(--color-surface-base)] shadow-[var(--shadow-live-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                        >
                            {(game.hot || game.new) && (
                                <span className="absolute right-2 top-2 z-10 rounded-full bg-[var(--color-hot-main)] px-2.5 py-0.5 text-[10px] font-black text-white">
                                    {game.hot ? 'HOT' : 'NEW'}
                                </span>
                            )}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${game.imgUrl}")` }}
                                />
                            </div>
                            <div className="p-2 md:p-3">
                                <p className="text-xs md:text-sm font-bold text-[rgb(42_53_72)] line-clamp-2">{game.name}</p>
                                <p className="mt-1 text-[10px] md:text-xs text-[rgb(106_117_144)]">{game.provider}</p>
                                <span className="btn-theme-cta mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg px-2 text-xs font-bold">
                                    PLAY NOW
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                {filteredGames.length === 0 && (
                    <div className="mt-6 rounded-2xl border border-[rgb(220_228_242)] bg-[var(--color-surface-base)] px-4 py-7 text-center">
                        <p className="text-base font-extrabold text-[rgb(43_58_87)]">No games match your search.</p>
                        <p className="mt-1 text-xs text-[rgb(106_117_144)]">Try a different keyword or switch filter.</p>
                    </div>
                )}
                {filteredGames.length > 0 && (
                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            className="btn-theme-cta inline-flex h-12 min-w-[180px] items-center justify-center rounded-[10px] px-8 text-sm font-black tracking-[0.06em] transition hover:-translate-y-0.5 hover:brightness-105"
                        >
                            SEE MORE
                        </button>
                    </div>
                )}
            </section>

            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-8 md:mt-10 pb-8">
                <div className="rounded-2xl border border-[rgb(219_228_243)] bg-[var(--color-surface-base-80)] p-6 md:p-8 shadow-[0_6px_18px_rgba(20,43,87,0.09)]">
                    <h2 className="text-xl md:text-2xl font-extrabold text-[rgb(28_40_65)]">
                        Discover the Best Online Slot Games
                    </h2>
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-[rgb(64_81_114)]">
                        Enjoy thousands of slot games with welcome bonuses, high win rebate percentages, and frequent RTP updates.
                        Experience seamless gaming with top providers. Check official info for game tips and strategies.
                    </p>
                </div>
            </section>
        </main>
    );
}
