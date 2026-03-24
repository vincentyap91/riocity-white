import React from 'react';
import EeziePayIcon from './footerPayments/EeziePayIcon';
import TouchNGoIcon from './footerPayments/TouchNGoIcon';
import DuitNowIcon from './footerPayments/DuitNowIcon';
import GrabPayIcon from './footerPayments/GrabPayIcon';
import ShopeePayIcon from './footerPayments/ShopeePayIcon';
import BoostIcon from './footerPayments/BoostIcon';
import TruePayIcon from './footerPayments/TruePayIcon';
import SurePayIcon from './footerPayments/SurePayIcon';
import UsdtIcon from './footerPayments/UsdtIcon';
import BtcIcon from './footerPayments/BtcIcon';
import LitecoinIcon from './footerPayments/LitecoinIcon';
import EthereumIcon from './footerPayments/EthereumIcon';

/** Dark branded chip so logos with white fills stay visible on light (or white) footer areas */
function PaymentMethodChip({ children, minWide = false }) {
    return (
        <span
            className={`inline-flex items-center justify-center rounded-xl border border-white/25 bg-[linear-gradient(180deg,var(--color-brand-deep)_0%,rgb(10_45_88)_100%)] px-2.5 py-2 shadow-[0_2px_12px_rgba(0,50,95,0.28)] ring-1 ring-black/10 transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(0,50,95,0.35)] sm:px-3 sm:py-2.5 ${
                minWide ? 'min-h-[2.75rem] min-w-[4.5rem] sm:min-h-[3rem]' : ''
            }`}
        >
            {children}
        </span>
    );
}

const wideIconClass =
    'h-6 w-auto max-h-6 brightness-[1.02] contrast-[1.05] sm:h-7 sm:max-h-7 md:h-8 md:max-h-8';
const squareIconClass =
    'h-6 w-6 shrink-0 brightness-[1.02] contrast-[1.05] sm:h-7 sm:w-7 md:h-8 md:w-8';

export default function FooterPaymentMethods() {
    return (
        <div
            className="footer-payment-methods-container flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5"
            aria-label="Accepted payment methods"
        >
            <PaymentMethodChip minWide>
                <EeziePayIcon className={wideIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip>
                <TouchNGoIcon className={squareIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <DuitNowIcon className={wideIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <GrabPayIcon className={wideIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <ShopeePayIcon className={wideIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <BoostIcon className="h-5 w-auto max-h-5 sm:h-5 sm:max-h-5 md:h-6 md:max-h-6" />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <TruePayIcon className="h-5 w-auto max-h-5 sm:h-5 sm:max-h-5 md:h-6 md:max-h-6" />
            </PaymentMethodChip>
            <PaymentMethodChip minWide>
                <SurePayIcon className="h-5 w-auto max-h-5 sm:h-6 sm:max-h-6 md:h-7 md:max-h-7" />
            </PaymentMethodChip>
            <PaymentMethodChip>
                <UsdtIcon className={squareIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip>
                <BtcIcon className={squareIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip>
                <LitecoinIcon className={squareIconClass} />
            </PaymentMethodChip>
            <PaymentMethodChip>
                <EthereumIcon className={squareIconClass} />
            </PaymentMethodChip>
        </div>
    );
}
