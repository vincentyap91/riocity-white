import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function GameCategories() {
    const categories = [
        { name: 'Slots', icon: '🎰', bgUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&w=300&q=80' },
        { name: 'Casino', icon: '🃏', bgUrl: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&w=300&q=80' },
        { name: 'Sports', icon: '⚽', bgUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&w=300&q=80' },
        { name: 'Fishing', icon: '🐟', bgUrl: 'https://images.unsplash.com/photo-1560920452-aa9ecfb3c3b4?ixlib=rb-4.0.3&w=300&q=80' },
        { name: 'E-Sports', icon: '🎮', bgUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=300&q=80' },
        { name: 'Cockfight', icon: '🐓', bgUrl: 'https://images.unsplash.com/photo-1548675402-23f26038ceab?ixlib=rb-4.0.3&w=300&q=80' }
    ];

    return (
        <section className="w-full pt-4">
            <SectionHeader
                title="Popular Games"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col relative rounded-[15px] bg-[#E5F6FF] p-1.5 shadow-[0_5px_15px_rgba(0,174,239,0.1)] group hover:-translate-y-1 transition-transform border border-white"
                    >
                        {/* Title Ribbon - overlaps top edge */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 right-4 z-20 w-[80%] flex items-center justify-center">
                            <div className="bg-[#00AEEF] w-full text-center py-0.5 rounded-sm shadow-[0_3px_5px_rgba(0,0,0,0.2)]">
                                <span className="text-white text-[10px] uppercase font-bold tracking-wider">{cat.name}</span>
                            </div>
                            {/* Arrow decoration */}
                            <div className="w-[10px] h-[18px] bg-[#34c4f9] translate-x-[-1px] rounded-r-md skew-x-[20deg]"></div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full h-[220px] rounded-[10px] overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${cat.bgUrl})` }}
                            ></div>

                            {/* Bottom inner glow/overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Center Icon */}
                            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white/40">
                                {cat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
