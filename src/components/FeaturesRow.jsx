import React from 'react';
import SectionHeader from './SectionHeader';
import { Medal, Layers, ShieldCheck, Zap, Crown } from 'lucide-react';

export default function FeaturesRow() {
    const features = [
        {
            title: 'Prestigious Brands',
            icon: <Medal size={45} className="text-[#00AEEF] drop-shadow-md" />,
        },
        {
            title: 'Variety of game modes',
            icon: <Layers size={45} className="text-[#00AEEF] drop-shadow-md" />,
        },
        {
            title: 'Guaranteed safety',
            icon: <ShieldCheck size={45} className="text-[#00AEEF] drop-shadow-md" />,
        },
        {
            title: 'Fast action',
            icon: <Zap size={45} className="text-[#00AEEF] drop-shadow-md" />,
        },
    ];

    return (
        <section className="w-full pt-8">
            <SectionHeader
                title="Outstanding Functions"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
            />

            <div className="flex justify-between items-center px-4 gap-4 mt-8 flex-wrap">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-white/40 border border-white rounded-xl py-3 px-4 shadow-[0_5px_15px_rgba(0,174,239,0.05)] hover:-translate-y-1 transition-transform group"
                    >
                        <div className="group-hover:scale-110 transition-transform bg-white rounded-full p-2 shadow-sm border border-[#E5F6FF]">
                            {item.icon}
                        </div>
                        <span className="text-[#0072BC] font-bold text-sm leading-tight max-w-[120px]">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
