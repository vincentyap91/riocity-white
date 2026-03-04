import React from 'react';
import { Apple, Play } from 'lucide-react';

export default function AppDownload() {
    return (
        <section className="w-full relative mt-16 mb-8 pt-8 px-4 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-white/40 blur-3xl pointer-events-none rounded-[100%] z-0"></div>

            {/* Left Text */}
            <div className="flex-1 z-10 w-full max-w-sm">
                <h2 className="text-3xl font-bold text-[#004C80] mb-4 tracking-tight leading-tight">
                    Download the <span className="text-[#00AEEF]">TT Wonders APP</span>
                </h2>
                <p className="text-[10px] text-[#0072BC] font-semibold leading-relaxed opacity-80">
                    Playing through the application is more convenient than playing through the website. You can definitely feel the difference. Register to receive free credit and many bonuses through this channel.
                </p>
                {/* Floating gear icon placeholder from design */}
                <div className="mt-6 flex pl-8 relative">
                    <div className="w-10 h-10 border-[6px] border-[#00AEEF] rounded-full relative shadow-[0_5px_15px_rgba(0,174,239,0.3)] bg-white ml-2 flex justify-center items-center">
                        <div className="w-4 h-4 bg-[#00AEEF] rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 border-[4px] border-[#FFB800] rounded-full relative shadow-[0_5px_15px_rgba(255,184,0,0.3)] bg-white absolute top-6 left-16 flex justify-center items-center">
                        <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Center Phone Mockups */}
            <div className="flex-1 w-full flex justify-center items-center relative h-[300px] z-10">
                {/* Back Phone */}
                <div className="w-[140px] h-[280px] bg-white rounded-[25px] border-4 border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] absolute right-[25%] top-2 transform rotate-12 flex flex-col items-center">
                    <div className="w-[80px] h-3 bg-gray-200 mt-2 rounded-full absolute top-0"></div>
                    {/* Stub App UI */}
                    <div className="w-full h-full p-2 pt-6 opacity-30 flex flex-col gap-2">
                        <div className="w-full h-20 bg-[#00AEEF] rounded-lg"></div>
                        <div className="w-full flex-1 grid grid-cols-2 gap-2">
                            <div className="bg-gray-100 rounded"></div>
                            <div className="bg-gray-100 rounded"></div>
                            <div className="bg-gray-100 rounded"></div>
                            <div className="bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Front Phone */}
                <div className="w-[150px] h-[300px] bg-white rounded-[25px] border-[5px] border-white shadow-[0_15px_40px_rgba(0,114,188,0.2)] absolute left-[25%] -top-4 transform -rotate-12 flex flex-col items-center z-20">
                    <div className="w-[70px] h-3 bg-black/10 mt-2 rounded-full absolute top-0 z-30"></div>
                    <div className="w-full h-full bg-gradient-to-b from-[#00AEEF] to-[#0072BC] rounded-[20px] p-2 pt-10 relative overflow-hidden flex flex-col gap-3">
                        <div className="w-full h-8 flex justify-center"><h3 className="text-white font-black italic">LOGO</h3></div>
                        <div className="w-full bg-white/20 backdrop-blur rounded p-1 mb-1">
                            <div className="w-full h-2 bg-white/40 rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-white/40 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 w-full flex-1">
                            <div className="bg-white/10 border border-white/20 rounded-md"></div>
                            <div className="bg-white/10 border border-white/20 rounded-md"></div>
                            <div className="bg-white/10 border border-white/20 rounded-md"></div>
                            <div className="bg-white/10 border border-white/20 rounded-md"></div>
                        </div>
                    </div>
                </div>

                {/* Promotional Red Envelope icon floating */}
                <div className="absolute right-0 top-1/2 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded drop-shadow-xl border-2 border-red-400 rotate-12 flex items-center justify-center text-white font-black text-2xl z-30">
                    13
                </div>
                {/* Green Check tick */}
                <div className="absolute left-[20%] top-1/4 w-8 h-8 rounded-full bg-[#00AEEF] flex justify-center items-center shadow-md z-30 border border-white">
                    <span className="text-white font-bold text-sm">✔</span>
                </div>
            </div>

            {/* Right QR Codes */}
            <div className="flex-1 w-full flex justify-center md:justify-end gap-6 z-10">
                <div className="flex flex-col gap-3 items-center">
                    <div className="w-[90px] h-[90px] bg-white p-1 rounded-lg border border-gray-200 shadow-sm relative group overflow-hidden">
                        <div className="w-full h-full border border-dashed border-gray-300 rounded flex items-center justify-center">
                            <span className="text-[8px] font-bold text-gray-300">QR CODE</span>
                        </div>
                        {/* Scan line effect */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00AEEF] -translate-y-full group-hover:animate-[scan_1.5s_linear_infinite] shadow-[0_0_8px_#00a8e8]"></div>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-[#4FCHFF] to-[#00AEEF] text-white px-5 py-1.5 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                        <Apple size={14} fill="currentColor" /> Download
                    </button>
                </div>

                <div className="flex flex-col gap-3 items-center">
                    <div className="w-[90px] h-[90px] bg-white p-1 rounded-lg border border-gray-200 shadow-sm relative group overflow-hidden">
                        <div className="w-full h-full border border-dashed border-gray-300 rounded flex items-center justify-center">
                            <span className="text-[8px] font-bold text-gray-300">QR CODE</span>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00AEEF] -translate-y-full group-hover:animate-[scan_1.5s_linear_infinite] shadow-[0_0_8px_#00a8e8]"></div>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-[#4FCHFF] to-[#00AEEF] text-white px-5 py-1.5 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                        <Play size={10} fill="currentColor" className="ml-1" /> Download
                    </button>
                </div>
            </div>

        </section>
    );
}
