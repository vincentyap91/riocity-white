import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function TopGames() {
    const games = [
        { name: 'Gates of Olympus', imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'X' },
        { name: 'WCasino', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_wcasino-202408150920123718.png', provider: 'PG' },
        { name: 'Dream Gaming', imgUrl: 'https://pksoftcdn.azureedge.net/media/dream gaming_casino-202603051120541084.png', provider: 'PG' },
        { name: "Dragon's Luck", imgUrl: 'https://pksoftcdn.azureedge.net/games/PragmaticPlayT/vs20olympgate.png', provider: 'PG' },
        { name: 'Nomikai Fever', imgUrl: 'https://gamifystaging.blob.core.windows.net/staging/common/8eb11693-ad04-40f3-b2f1-cd7989c7fcc6.png', provider: 'X' },
        { name: 'Lucky Sports', imgUrl: 'https://pksoftcdn.azureedge.net/media/200x200_providerbanner_luckysport-202407260917076261-202408060821509512-202410241125136236.png', provider: 'JOKER' }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Top Games"
                icon={<Crown size={22} fill="currentColor" className="text-[var(--color-brand-secondary)]" />}
                rightLink="See all"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
                {games.map((game, idx) => (
                    <div
                        key={idx}
                        className="group relative flex h-[180px] flex-col overflow-hidden rounded-xl border-b-4 border-[var(--color-brand-primary)] bg-[var(--color-surface-base)] shadow-[var(--shadow-brand-card)] transition-transform hover:-translate-y-1"
                    >
                        {/* Top Image Box inside Gold Border */}
                        <div className="w-full h-full p-1.5 pb-0">
                            <div className="relative z-10 h-full w-full overflow-hidden rounded-t-[10px] border-2 border-[rgb(255_215_0_/_0.7)]">

                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${game.imgUrl}")` }}
                                ></div>

                                {/* Provider Badge Tag */}
                                <div className="absolute top-0 left-0 bg-white px-2 py-0.5 rounded-br-lg z-20 shadow-sm flex items-center justify-center">
                                    <span className="text-[var(--color-brand-secondary)] font-black text-xs italic">{game.provider}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Title Bar (already has border-bottom set on parent) */}
                        <div className="absolute bottom-0 z-30 w-full bg-[var(--color-brand-primary)] px-1 py-1.5 text-center">
                            <span className="text-white text-xs font-bold block truncate">{game.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
