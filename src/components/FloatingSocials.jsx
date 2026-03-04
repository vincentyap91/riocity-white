import React from 'react';
import { MessageCircle, Facebook, Send, Mail, Phone, X } from 'lucide-react';

export default function FloatingSocials() {
    const socials = [
        { icon: <MessageCircle size={20} className="text-[#00AEEF]" />, alt: 'Line' },
        { icon: <Facebook size={20} className="text-[#00AEEF] fill-current" />, alt: 'Facebook' },
        { icon: <Send size={20} className="text-[#00AEEF] fill-current -rotate-45" />, alt: 'Telegram' },
        { icon: <Mail size={20} className="text-[#00AEEF]" />, alt: 'Mail' },
        { icon: <Phone size={20} className="text-[#00AEEF] fill-current" />, alt: 'Phone' },
        { icon: <X size={20} className="text-[#00AEEF]" />, alt: 'Close' },
    ];

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3">
            {socials.map((item, idx) => (
                <button
                    key={idx}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#00AEEF] shadow-[0_2px_5px_rgba(0,174,239,0.3)] hover:scale-110 hover:bg-[#F0F8FF] transition-all"
                    title={item.alt}
                >
                    {item.icon}
                </button>
            ))}
        </div>
    );
}
