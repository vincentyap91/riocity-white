import React, { useState } from 'react';

const NOTIFICATION_OPTIONS = [
    { id: 'email', label: 'Allow E-Mail Notifications' },
    { id: 'push', label: 'Allow Push Notifications' },
    { id: 'sms', label: 'Allow SMS Notifications' },
];

function ToggleRow({ label, checked, onChange }) {
    return (
        <div className="surface-card flex min-h-[56px] items-center justify-between gap-4 rounded-2xl px-4 py-4 transition hover:border-[var(--color-accent-200)] md:px-6">
            <span className="text-sm font-medium text-[var(--color-text-strong)] md:text-base">{label}</span>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    checked
                        ? 'bg-[var(--color-success-main)]'
                        : 'bg-[var(--color-border-default)] hover:bg-[var(--color-accent-200)]'
                }`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
                        checked ? 'left-[22px]' : 'left-1'
                    }`}
                />
            </button>
        </div>
    );
}

export default function NotificationsPage() {
    const [preferences, setPreferences] = useState({
        email: true,
        push: true,
        sms: true,
    });

    const handleToggle = (id) => {
        setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="page-container">
            <h1 className="page-title mb-8">Notifications</h1>

            <div className="space-y-4">
                {NOTIFICATION_OPTIONS.map(({ id, label }) => (
                    <ToggleRow
                        key={id}
                        label={label}
                        checked={preferences[id]}
                        onChange={() => handleToggle(id)}
                    />
                ))}
            </div>
        </div>
    );
}
