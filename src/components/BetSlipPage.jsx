import React, { useState } from 'react';
import { ReceiptText, Settings } from 'lucide-react';

const betSlipTabs = ['Single', 'Combo', 'System'];

export default function BetSlipPage() {
    const [activeTab, setActiveTab] = useState('Single');

    return (
        <div className="page-container">
            <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-[22px] border border-[rgb(16_53_102)] bg-[linear-gradient(180deg,#031633_0%,#010c1f_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                <div className="flex items-center px-4 pt-5">
                    <div className="flex flex-1 items-center justify-between rounded-full bg-[linear-gradient(180deg,#082247_0%,#061731_100%)] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <span className="rounded-full bg-[linear-gradient(180deg,#2f66c9_0%,#1d4ca5_100%)] px-3.5 py-1.5 text-lg font-bold text-white shadow-[0_6px_12px_rgba(7,34,91,0.32)]">
                            Bet Slip
                        </span>
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/5 hover:text-white"
                            aria-label="Bet slip settings"
                        >
                            <Settings size={22} />
                        </button>
                    </div>
                </div>

                <div className="px-4 pt-6">
                    <div className="flex gap-3">
                        {betSlipTabs.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`min-w-[92px] rounded-[10px] px-4 py-2.5 text-base font-bold transition ${
                                        isActive
                                            ? 'bg-[linear-gradient(180deg,#1f56b6_0%,#1b4aa0_100%)] text-white shadow-[0_8px_16px_rgba(7,34,91,0.24)]'
                                            : 'bg-[linear-gradient(180deg,#061731_0%,#041126_100%)] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                                    }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex min-h-[420px] flex-col items-center justify-center px-6 pb-16 pt-10 text-center">
                    <p className="text-[2rem] font-bold leading-tight text-white/90">Your betslip is empty</p>
                    <div className="mt-10 inline-flex h-24 w-24 items-center justify-center rounded-[20px] border border-[rgb(39_92_189_/_0.35)] bg-[rgb(9_28_61_/_0.45)] text-[rgb(45_108_226)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <ReceiptText size={52} strokeWidth={1.8} />
                    </div>
                </div>

                <div className="px-5 pb-6 pt-4">
                    <button
                        type="button"
                        className="btn-theme-cta flex h-13 w-full items-center justify-center rounded-full text-[2rem] font-black tracking-[0.01em] text-black shadow-[0_10px_18px_rgba(242,154,0,0.28)]"
                    >
                        Deposit &amp; Bet
                    </button>
                </div>
            </div>
        </div>
    );
}
