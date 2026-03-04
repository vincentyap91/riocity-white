import React from 'react';

export default function SectionHeader({ title, icon, rightLink }) {
    return (
        <div className="flex items-end justify-between w-full mb-4 border-b-2 border-[#7AD0F5] pb-1">
            <div className="flex items-center gap-2">
                <div className="text-[#00AEEF] flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-[#00AEEF] font-bold text-lg">{title}</h2>
                <div className="flex gap-1 ml-4 mt-1 relative top-1">
                    <div className="w-4 h-5 bg-[#00AEEF] skew-x-[-20deg]"></div>
                    <div className="w-2 h-5 bg-[#00AEEF] skew-x-[-20deg]"></div>
                    <div className="w-1 h-5 bg-[#00AEEF] skew-x-[-20deg]"></div>
                </div>
            </div>
            {rightLink && (
                <a href="#" className="text-xs text-[#00AEEF] hover:underline mb-1">
                    {rightLink}
                </a>
            )}
        </div>
    );
}
