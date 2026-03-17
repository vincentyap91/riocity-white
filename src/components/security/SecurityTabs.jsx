import React from 'react';

export default function SecurityTabs({ activeTab, onTabChange, tabs }) {
    return (
        <div className="flex flex-wrap gap-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-1 shadow-[var(--shadow-subtle)]">
            {tabs.map(({ id, label }) => (
                <button
                    key={id}
                    type="button"
                    onClick={() => onTabChange(id)}
                    className={`flex-1 min-w-[140px] rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                        activeTab === id
                            ? 'btn-theme-primary shadow-sm'
                            : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent-50)] hover:text-[var(--color-accent-600)]'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
