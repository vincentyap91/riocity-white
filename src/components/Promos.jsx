import React from 'react';
import wineGlass from '../assets/wine-glass.png';
import penguin from '../assets/penguin.png';

export default function Promos() {
    return (
        <section className="mt-6 flex w-full flex-col gap-6 md:flex-row">
            {/* Banner 1: Special Welcome Bonus */}
            <div className="group relative h-[120px] flex-1 rounded-2xl border-2 border-white bg-[linear-gradient(180deg,#c5eefd_0%,#8ccbf0_100%)] shadow-sm">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80')] bg-cover opacity-10 mix-blend-multiply"></div>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-1">
      
                    <h3 className="w-[280px] text-lg font-bold leading-tight tracking-tight text-[var(--color-brand-secondary)]">
                        Special Welcome Bonus<br />For New Member
                    </h3>
                </div>
                <div className="absolute right-[6px] bottom-0 h-[150px] md:h-[150px] z-20 pointer-events-none group-hover:scale-[1.02] transition-transform origin-bottom">
                    <img
                        src={wineGlass}
                        alt="Welcome bonus woman"
                        className="h-full w-auto max-w-none object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.22)]"
                    />
                </div>
            </div>

            {/* Banner 2: Referral Bonus */}
            <div className="group relative h-[120px] flex-1 rounded-2xl border-2 border-white bg-[linear-gradient(180deg,#c5eefd_0%,#8ccbf0_100%)] shadow-sm">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80')] bg-cover opacity-10 mix-blend-multiply"></div>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-1">
  
                    <h3 className="w-[280px] text-lg font-bold leading-tight tracking-tight text-[var(--color-brand-secondary)]">
                        Earn Referral Bonus
                    </h3>
                </div>
                <div className="absolute right-[-20px] bottom-0 h-[140px] w-[150px] rounded-full bg-[rgb(0_174_239_/_0.2)] blur-xl"></div>
                <div className="absolute right-4 bottom-0 h-[150px] md:h-[150px] text-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform origin-bottom">
                <img
                        src={penguin}
                        alt="Earn referral bonus"
                        className="h-full w-auto max-w-none object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.22)]"
                    />
                </div>
            </div>
        </section>
    );
}
