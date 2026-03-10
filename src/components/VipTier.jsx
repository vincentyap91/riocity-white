import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';
import vipBgImage from '../assets/vip-bg.png';

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
                icon={<Crown size={22} fill="currentColor" className="text-[var(--color-brand-secondary)]" />}
                rightLink="More Details"
            />

            <p className="mt-4 mb-8 max-w-[1000px] text-xs font-semibold leading-relaxed text-[var(--color-text-brand-soft)]">
                Join the Riocity9 VIP member group, you will receive many special privileges such as promotion bonus, monthly red envelope bonus, birthday bonus. All of these are special privileges for Riocity9 VIP customers only.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center mt-4">

                {/* Left Side VIP Visual */}
                <div className="w-full md:w-1/3 flex justify-center lg:justify-start items-center relative min-h-[250px]">
                    <img
                        src={vipBgImage}
                        alt="VIP Group"
                        className="w-[260px] md:w-[500px] h-auto object-contain select-none"
                    />
                </div>

                {/* Right Side 3x2 Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:pl-10">
                    {vipLevels.map((vp) => (
                        <div
                            key={vp.level}
                            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[var(--color-brand-soft-border)] bg-[var(--color-surface-base)] px-2 py-3 shadow-[var(--shadow-brand-soft)] transition-all hover:border-[var(--color-brand-primary)] hover:shadow-[var(--shadow-brand-card-strong)]"
                        >
                            {/* Header Box */}
                            <div className="flex items-center gap-1 mb-2">
                                <div className="bg-[linear-gradient(135deg,#d0f0ff_0%,#f0f8ff_100%)] p-1.5 rounded-md text-[var(--color-brand-primary)] transform -skew-x-[15deg]">
                                    <Crown size={20} fill="currentColor" strokeWidth={1} />
                                </div>
                                <h3 className="text-lg font-black italic tracking-wide text-[var(--color-brand-secondary)]">VIP {vp.level}</h3>
                            </div>

                            {/* Rules text */}
                            <div className="relative w-full border-t border-[rgb(204_238_255_/_0.5)] pt-2 text-center">
                                <p className="text-xs font-bold text-[var(--color-brand-primary)]">
                                    Valid Bet Point &gt; {vp.btn}
                                </p>
                                <p className="text-xs font-bold text-[var(--color-brand-primary)]">
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

