import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function TopGames() {
    const games = [
        { name: 'Aztec Gold Treasure', imgUrl: 'https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-4.0.3&w=300&q=80', provider: 'X' },
        { name: 'Roma', imgUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&w=300&q=80', provider: 'PG' },
        { name: 'Treasures of Aztec', imgUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&w=300&q=80', provider: 'PG' },
        { name: 'Lucky Neko', imgUrl: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&w=300&q=80', provider: 'PG' },
        { name: 'Long Long Long', imgUrl: 'https://images.unsplash.com/photo-1577907572620-1aee3c582845?ixlib=rb-4.0.3&w=300&q=80', provider: 'X' },
        { name: 'Lucky Streak', imgUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&w=300&q=80', provider: 'JOKER' }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Top Games"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
                rightLink="See all"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
                {games.map((game, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-white rounded-xl shadow-[0_5px_15px_rgba(0,174,239,0.15)] group hover:-translate-y-1 transition-transform border-b-4 border-[#00AEEF] relative overflow-hidden h-[180px]"
                    >
                        {/* Top Image Box inside Gold Border */}
                        <div className="w-full h-full p-1.5 pb-0">
                            <div className="w-full h-full relative rounded-t-[10px] overflow-hidden border-2 border-[#FFD700]/70 z-10">

                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${game.imgUrl})` }}
                                ></div>

                                {/* Provider Badge Tag */}
                                <div className="absolute top-0 left-0 bg-white px-2 py-0.5 rounded-br-lg z-20 shadow-sm flex items-center justify-center">
                                    <span className="text-[#0072BC] font-black text-xs italic">{game.provider}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Title Bar (already has border-bottom set on parent) */}
                        <div className="bg-[#00AEEF] w-full py-1.5 text-center px-1 absolute bottom-0 z-30">
                            <span className="text-white text-[10px] font-bold block truncate">{game.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
