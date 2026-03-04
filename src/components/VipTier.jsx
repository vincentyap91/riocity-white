import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';

export default function VipTier() {
    const vipLevels = [
        { level: 1, btn: '180,000', dep: '8,000' },
        { level: 2, btn: '180,000', dep: '8,000' },
        { level: 3, btn: '180,000', dep: '8,000' },
        { level: 4, btn: '180,000', dep: '8,000' },
        { level: 5, btn: '180,000', dep: '8,000' },
        { level: 6, btn: '180,000', dep: '8,000' },
    ];

    return (
        <section className="w-full pt-4 relative">
            <SectionHeader
                title="VIP Group"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
                rightLink="More Details"
            />

            <p className="text-[#004C80] text-[11px] mb-8 leading-relaxed max-w-[1000px] font-semibold mt-4">
                Join the TT Wonders VIP member group, you will receive many special privileges such as promotion bonus, monthly red envelope bonus, birthday bonus. All of these are special privileges for TT Wonders VIP customers only.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center mt-4">

                {/* Left Side Character */}
                <div className="w-full md:w-1/3 flex justify-center lg:justify-start items-center relative min-h-[250px]">
                    {/* Floating elements */}
                    <div className="absolute top-0 right-[40px] text-4xl transform scale-x-[-1] animate-bounce text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">🪙</div>
                    <div className="absolute bottom-10 left-[20px] text-5xl transform scale-x-[-1] animate-pulse text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">🪙</div>
                    <div className="absolute bottom-0 right-10 text-3xl animate-[bounce_4s_infinite] text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">🪙</div>

                    {/* VIP 3D Image Placeholder */}
                    <div className="w-[180px] h-[180px] bg-gradient-to-tr from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center border-[6px] border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] relative z-10 overflow-hidden transform group hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&w=300&q=80')] bg-cover mix-blend-multiply opacity-50"></div>
                        <span className="text-white font-black text-2xl drop-shadow-md z-10 rotate-[-15deg]">ZEUS</span>
                    </div>

                    {/* VIP Pass Label */}
                    <div className="absolute -bottom-4 left-1/2 md:left-[100px] -translate-x-1/2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full px-6 py-1.5 shadow-md border-b-[3px] border-[#d39c00] transform -rotate-12 z-20">
                        <span className="text-white font-extrabold text-sm drop-shadow-sm tracking-wide mix-blend-overlay">VIP P</span>
                        <span className="text-white font-extrabold text-sm drop-shadow-md">ASS</span>
                    </div>
                </div>

                {/* Right Side 3x2 Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:pl-10">
                    {vipLevels.map((vp) => (
                        <div
                            key={vp.level}
                            className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center border border-[#CCEEFF] shadow-[0_2px_8px_rgba(0,174,239,0.08)] hover:border-[#00AEEF] hover:shadow-[0_5px_15px_rgba(0,174,239,0.2)] transition-all cursor-pointer"
                        >
                            {/* Header Box */}
                            <div className="flex items-center gap-1 mb-2">
                                <div className="bg-gradient-to-br from-[#d0f0ff] to-[#f0f8ff] p-1.5 rounded-md text-[#00AEEF] transform -skew-x-[15deg]">
                                    <Crown size={20} fill="currentColor" strokeWidth={1} />
                                </div>
                                <h3 className="text-[#0072BC] text-lg font-black italic tracking-wide">VIP {vp.level}</h3>
                            </div>

                            {/* Rules text */}
                            <div className="text-center w-full border-t border-[#CCEEFF]/50 pt-2 relative">
                                <p className="text-[9px] text-[#00AEEF] font-bold">
                                    Valid Bet Point &gt; {vp.btn}
                                </p>
                                <p className="text-[9px] text-[#00AEEF] font-bold">
                                    Deposit Point = {vp.dep}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
