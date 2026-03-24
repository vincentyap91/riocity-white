import React from 'react';
import { Apple, Play } from 'lucide-react';

const GearSVG = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
            <radialGradient id="g1" cx="38%" cy="28%" r="65%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="45%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#B87800" />
            </radialGradient>
            <filter id="gearShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#FFB80066" />
            </filter>
        </defs>
        <path
            d="M40 10 L44 6 L48 10 L54 8 L56 14 L62 14 L63 20 L69 22 L68 28 L74 32 L71 38
               L76 43 L71 48 L74 54 L68 57 L69 63 L63 65 L62 71 L56 71 L54 76 L48 74
               L44 78 L40 74 L36 78 L32 74 L26 76 L24 71 L18 71 L17 65 L11 63 L12 57
               L6 54 L9 48 L4 43 L9 38 L6 32 L12 28 L11 22 L17 20 L18 14 L24 14
               L26 8 L32 10 L36 6 Z"
            fill="url(#g1)"
            filter="url(#gearShadow)"
        />
        <circle cx="40" cy="42" r="12" fill="#E09000" />
        <circle cx="40" cy="42" r="9" fill="#FFD740" />
        <ellipse cx="34" cy="34" rx="7" ry="4" fill="rgba(255,255,255,0.30)" transform="rotate(-25 34 34)" />
    </svg>
);

const ShieldSVG = () => (
    <svg viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
            <radialGradient id="sh1" cx="35%" cy="22%" r="70%">
                <stop offset="0%" stopColor="#6FE4FF" />
                <stop offset="50%" stopColor="#00AEEF" />
                <stop offset="100%" stopColor="#005FA0" />
            </radialGradient>
        </defs>
        <path d="M28 3L4 13v16c0 14.3 10.3 27.7 24 31C41.7 56.7 52 43.3 52 29V13L28 3z" fill="url(#sh1)" stroke="white" strokeWidth="2.5" />
        <path d="M17 30l7 7 15-14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="22" cy="17" rx="7" ry="3.5" fill="rgba(255,255,255,0.28)" transform="rotate(-20 22 17)" />
    </svg>
);

const BadgeSVG = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
            <radialGradient id="bd1" cx="35%" cy="25%" r="70%">
                <stop offset="0%" stopColor="#FF9A80" />
                <stop offset="50%" stopColor="#F44336" />
                <stop offset="100%" stopColor="#A00000" />
            </radialGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#bd1)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <text x="32" y="31" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" style={{ fontFamily: 'var(--font-family-sans)' }}>13</text>
        <line x1="14" y1="37" x2="50" y2="37" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <text x="32" y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontWeight="700" style={{ fontFamily: 'var(--font-family-sans)' }}>BONUS</text>
        <ellipse cx="22" cy="14" rx="9" ry="4" fill="rgba(255,255,255,0.22)" transform="rotate(-15 22 14)" />
    </svg>
);

const PhoneBack = () => (
    <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#48C8F0_0%,#006EB5_100%)] p-2 pt-8">
        <div className="flex items-center justify-between px-1">
            <div className="rounded bg-white/20 px-2 py-0.5 text-xs font-black text-white">LOGO</div>
            <div className="flex gap-1">
                <div className="h-3 w-3 rounded-full bg-white/30" />
                <div className="h-3 w-3 rounded-full bg-white/30" />
            </div>
        </div>
        <div className="flex h-14 w-full items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/15">
            {[0, 1, 2].map((item) => <div key={item} className="h-10 w-7 rounded-md bg-white/20" />)}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="rounded-md border border-white/20 bg-white/15" />
            ))}
        </div>
    </div>
);

const PhoneFront = () => (
    <div className="flex h-full w-full flex-col gap-1.5 overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,var(--color-brand-primary)_0%,#004E96_100%)] p-2 pt-9">
        <div className="flex items-center justify-between rounded-md bg-white/10 px-1 py-0.5">
            <div className="h-2.5 w-12 rounded-sm bg-white/60" />
            <div className="flex gap-0.5">
                <div className="flex h-3 w-5 items-center justify-center rounded-sm bg-[#FFB800] text-xs font-black text-white">EN</div>
                <div className="h-3 w-3 rounded-sm bg-white/30" />
            </div>
        </div>
        <div className="flex h-12 w-full items-center justify-around rounded-lg border border-white/20 bg-gradient-to-r from-[#0080C8] to-[#005090] px-1">
            <div className="h-9 w-7 rounded-md bg-white/20" />
            <div className="h-9 w-7 rounded-md bg-white/20" />
            <div className="h-9 w-7 rounded-md bg-white/20" />
        </div>
        <div className="flex gap-1">
            {['ALL', 'HOT', 'NEW'].map((tab) => (
                <div key={tab} className="flex h-3.5 flex-1 items-center justify-center rounded-full bg-white/20">
                    <span className="text-xs font-bold text-white">{tab}</span>
                </div>
            ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1">
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex items-center justify-center rounded-md border border-white/25 bg-white/15">
                    <div className="h-2 w-2 rounded-sm bg-white/30" />
                </div>
            ))}
        </div>
    </div>
);

export default function AppDownload() {
    const downloadOptions = [
        { icon: <Apple size={14} fill="currentColor" />, label: 'iOS Download' },
        { icon: <Play size={10} fill="currentColor" className="ml-0.5" />, label: 'APK Download' }
    ];

    return (
        <section
            id="download-app"
            className="relative mt-4 scroll-mt-[114px] overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#edf8ff_0%,#dceffb_100%)] px-5 py-6 shadow-[0_14px_32px_rgba(0,114,188,0.08)] sm:px-6 sm:py-8 md:scroll-mt-[92px] lg:px-8 lg:py-10"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl" />
            <div className="pointer-events-none absolute right-[-40px] top-12 h-32 w-32 rounded-full bg-[rgb(0_174_239_/_0.12)] blur-3xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1fr_0.85fr] lg:gap-10">
                <div className="w-full max-w-[360px]">
                    <div className="inline-flex rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-secondary)]">
                        Mobile App
                    </div>
                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--color-text-brand-soft)] sm:text-[2.1rem]">
                        Download the <span className="text-[var(--color-brand-primary)]">Riocity9 APP</span>
                    </h2>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-[var(--color-brand-secondary)]/85 sm:text-[15px]">
                        Playing through the application is more convenient than playing through the website.
                        You can feel the difference and enjoy free credit plus bonuses through this channel.
                    </p>
                </div>

                <div className="relative mx-auto flex h-[290px] w-full max-w-[360px] items-center justify-center">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-[60%] bg-[#c6eeff]/75 blur-2xl" />

                    <div
                        className="absolute left-[6%] top-1/2 h-14 w-14 -translate-y-1/2 drop-shadow-lg sm:h-16 sm:w-16"
                        style={{ animation: 'spin 9s linear infinite' }}
                    >
                        <GearSVG />
                    </div>

                    <div
                        className="absolute right-[15%] top-6 z-10"
                        style={{ transform: 'rotate(10deg)', filter: 'drop-shadow(0 12px 24px rgba(0,100,180,0.22))' }}
                    >
                        <div className="flex h-[238px] w-[118px] flex-col overflow-hidden rounded-[22px] border-[4px] border-gray-100 bg-white">
                            <div className="flex justify-center pt-1.5">
                                <div className="h-2 w-9 rounded-full bg-gray-200" />
                            </div>
                            <PhoneBack />
                        </div>
                    </div>

                    <div
                        className="absolute left-[18%] top-0 z-20"
                        style={{ transform: 'rotate(-10deg)', filter: 'drop-shadow(0 16px 32px rgba(0,100,180,0.28))' }}
                    >
                        <div className="flex h-[258px] w-[128px] flex-col overflow-hidden rounded-[24px] border-[5px] border-white bg-white">
                            <div className="flex justify-center pt-1.5">
                                <div className="h-2.5 w-10 rounded-full bg-black/10" />
                            </div>
                            <PhoneFront />
                        </div>
                    </div>

                    <div className="absolute left-[45%] top-[30%] z-30 h-[52px] w-11 drop-shadow-xl">
                        <ShieldSVG />
                    </div>

                    <div
                        className="absolute right-[6%] top-[28%] z-30 h-14 w-14 drop-shadow-xl"
                        style={{ transform: 'rotate(12deg)' }}
                    >
                        <BadgeSVG />
                    </div>
                </div>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {downloadOptions.map(({ icon, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-3 rounded-[22px] border border-white/80 bg-white/72 p-4 shadow-[0_12px_24px_rgba(0,114,188,0.08)] backdrop-blur-sm"
                        >
                            <div className="relative overflow-hidden rounded-[16px] border border-gray-200 bg-white p-1 shadow-sm group">
                                <div className="flex h-[96px] w-[96px] items-center justify-center rounded-[12px] border border-dashed border-gray-300">
                                    <span className="text-xs font-bold text-gray-300">QR CODE</span>
                                </div>
                                <div className="absolute left-0 top-0 h-[1px] w-full -translate-y-full bg-[var(--color-brand-primary)] shadow-[var(--shadow-scan)] group-hover:animate-[scan_1.5s_linear_infinite]" />
                            </div>
                            <button className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(90deg,#00CFFF_0%,var(--color-brand-primary)_100%)] px-4 py-2 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,174,239,0.2)] transition-transform hover:scale-[1.02]">
                                {icon}
                                {label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
