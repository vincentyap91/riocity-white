import React, { useState } from 'react';
import { X, QrCode } from 'lucide-react';
import CopyInputField from './CopyInputField';

export default function QRCodeModal({ open, onClose, secret, onVerify }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleVerify = async (e) => {
        e.preventDefault();
        setError('');
        if (!/^\d{6}$/.test(code)) {
            setError('Please enter a valid 6-digit code');
            return;
        }
        const result = await onVerify(code);
        if (result?.success) {
            onClose();
        } else {
            setError(result?.error || 'Verification failed');
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" aria-hidden onClick={onClose} />
            <div className="relative z-[1] w-full max-w-md rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-6 shadow-[var(--shadow-modal)]" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-lg p-1 text-[var(--color-text-soft)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text-strong)]"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
                <h3 className="mb-6 text-xl font-bold tracking-tight text-[var(--color-text-strong)]">Verify & Activate 2FA</h3>

                <div className="mb-6 flex flex-col items-center gap-4">
                    <div className="flex h-40 w-40 items-center justify-center rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-muted)] p-4">
                        <QrCode size={120} className="text-[var(--color-text-soft)]" />
                    </div>
                    <div className="w-full">
                        <CopyInputField label="Manual key" value={secret} />
                    </div>
                </div>

                <form onSubmit={handleVerify} className="space-y-4">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">6-digit verification code</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={code}
                            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                            placeholder="000000"
                            className="w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] px-4 py-3 text-center text-lg font-mono tracking-[0.3em] text-[var(--color-text-strong)] shadow-[var(--shadow-subtle)] outline-none placeholder:text-[var(--color-text-soft)] focus:border-[var(--color-accent-400)] focus:ring-2 focus:ring-[rgb(96_165_250_/_0.2)]"
                        />
                    </label>
                    {error && <p className="text-sm text-[var(--color-danger-main)]">{error}</p>}
                    <button
                        type="submit"
                        className="btn-theme-cta w-full rounded-xl py-3.5 text-base font-bold shadow-[var(--shadow-cta)] transition hover:-translate-y-0.5 hover:brightness-105"
                    >
                        Verify & Activate
                    </button>
                </form>
            </div>
        </div>
    );
}
