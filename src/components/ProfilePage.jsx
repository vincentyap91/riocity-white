import React, { useState } from 'react';
import {
    Banknote,
    CalendarDays,
    Landmark,
    Mail,
    PencilLine,
    Phone,
    UserCircle2,
} from 'lucide-react';
import AccountLayout from './AccountLayout';

const personalFields = [
    { key: 'username', label: 'Username' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'referralCode', label: 'Referral Code' },
    { key: 'referralLink', label: 'Referral Link' },
    { key: 'rank', label: 'Rank' },
    { key: 'birthday', label: 'Birthday', placeholder: 'MM/DD/YYYY' },
    { key: 'gender', label: 'Gender' }
];

const contactFields = [
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'phone', label: 'Phone Number', type: 'tel' }
];

const bankingFields = [
    { key: 'bankName', label: 'Bank Name' },
    { key: 'accountHolder', label: 'Account Holder' },
    { key: 'accountNumber', label: 'Account Number' },
    { key: 'branchName', label: 'Branch Name' }
];

function Field({ label, value, placeholder, type = 'text', editable, onChange, icon: Icon }) {
    return (
        <label className="space-y-2.5">
            <span className="block text-[15px] font-semibold text-[var(--color-text-main)]">{label}</span>
            <div
                className={`group flex min-h-[56px] items-center gap-3 rounded-2xl border px-4 shadow-[var(--shadow-input)] transition-all duration-200 focus-within:ring-2 focus-within:ring-[rgb(96_165_250_/_0.4)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-surface-base)] ${
                    editable
                        ? 'border-[var(--color-accent-300)] bg-[var(--color-surface-base)] hover:border-[var(--color-accent-400)]'
                        : 'border-[var(--color-border-default)] bg-[rgb(248_250_252_/_0.9)] hover:border-[var(--color-accent-200)]'
                }`}
            >
                {Icon && (
                    <Icon
                        size={18}
                        className={`shrink-0 transition-colors ${editable ? 'text-[var(--color-accent-600)]' : 'text-[var(--color-text-soft)] group-hover:text-[var(--color-accent-500)]'}`}
                    />
                )}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={!editable}
                    onChange={onChange}
                    className={`w-full bg-transparent text-sm font-medium outline-none ${
                        editable ? 'text-[var(--color-text-strong)]' : 'text-[var(--color-text-muted)]'
                    } placeholder:text-[var(--color-text-soft)] disabled:cursor-not-allowed`}
                />
            </div>
        </label>
    );
}

function SectionCard({ title, description, editing, onToggleEdit, children, actions }) {
    return (
        <section className="surface-card rounded-[24px] p-8 transition-all md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-2xl">{title}</h2>
                    {description && (
                        <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)]">{description}</p>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {actions}
                    <button
                        type="button"
                        onClick={onToggleEdit}
                        aria-pressed={editing}
                        className="btn-theme-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                    >
                        <PencilLine size={16} />
                        {editing ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className="mt-8">{children}</div>
        </section>
    );
}

export default function ProfilePage({ authUser, onLogout, onNavigate }) {
    const [editing, setEditing] = useState({
        personal: false,
        contact: false,
        banking: false
    });
    const [showBankForm, setShowBankForm] = useState(false);
    const [formValues, setFormValues] = useState({
        username: authUser?.name || 'vincentzo',
        fullName: 'Vincent Yap',
        referralCode: 'Zy4REBcM',
        referralLink: 'https://riocity.com/register?code=Zy4REBcM',
        rank: 'Iron',
        birthday: '08/01/2026',
        gender: 'Male',
        email: 'vincentzo@gmail.com',
        phone: '60 123456701',
        bankName: 'Maybank',
        accountHolder: 'Vincent Yap',
        accountNumber: '1122 3344 5566',
        branchName: 'Kuala Lumpur Main Branch'
    });

    const toggleEdit = (sectionKey) => {
        setEditing((current) => ({
            ...current,
            [sectionKey]: !current[sectionKey]
        }));
    };

    const updateField = (field) => (event) => {
        const value = event.target.value;
        setFormValues((current) => ({
            ...current,
            [field]: value
        }));
    };

    return (
        <AccountLayout activePage="profile" authUser={authUser} onNavigate={onNavigate} onLogout={onLogout}>
            <div className="surface-panel rounded-[28px] p-4 md:p-6">
                            <div className="soft-blue-panel rounded-[24px] p-6 md:p-8">
                                <div className="h-1.5 w-full rounded-full bg-[linear-gradient(90deg,var(--color-accent-500)_0%,var(--color-accent-300)_100%)]" />

                                <div className="soft-blue-panel mt-8 flex flex-col gap-5 rounded-[24px] p-6 shadow-[var(--shadow-accent)] md:flex-row md:items-center md:p-8">
                                    <div className="relative shrink-0">
                                        <div className="blue-accent-avatar flex h-22 w-22 items-center justify-center rounded-full">
                                            <UserCircle2 size={52} className="text-[var(--color-accent-600)]" />
                                        </div>
                                        <button
                                            type="button"
                                            className="absolute bottom-1 right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent-100)] bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-sm transition-all hover:scale-105 hover:bg-[var(--color-accent-50)]"
                                            aria-label="Edit profile image"
                                        >
                                            <PencilLine size={14} />
                                        </button>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-600)]">
                                            Verified Account Profile
                                        </p>
                                        <h1 className="mt-2 truncate text-3xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-4xl">
                                            {formValues.username}
                                        </h1>
                                        <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{formValues.email}</p>
                                        <div className="mt-4 flex flex-wrap items-center gap-2">
                                            <span className="inline-flex rounded-full border border-[var(--color-accent-100)] bg-[var(--color-accent-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-700)]">
                                                Joined 08/01/2026
                                            </span>
                                            <span className="inline-flex rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                                                Player ID 679129
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-6">
                                    <SectionCard
                                        title="Personal Info"
                                        description="Core account identity and referral information."
                                        editing={editing.personal}
                                        onToggleEdit={() => toggleEdit('personal')}
                                    >
                                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                            {personalFields.map(({ key, label, placeholder }) => (
                                                <Field
                                                    key={key}
                                                    label={label}
                                                    value={formValues[key]}
                                                    placeholder={placeholder}
                                                    editable={editing.personal}
                                                    onChange={updateField(key)}
                                                    icon={key === 'birthday' ? CalendarDays : undefined}
                                                />
                                            ))}
                                        </div>
                                    </SectionCard>

                                    <SectionCard
                                        title="Contact Info"
                                        description="Keep your recovery and communication details up to date."
                                        editing={editing.contact}
                                        onToggleEdit={() => toggleEdit('contact')}
                                    >
                                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                            {contactFields.map(({ key, label, type }) => (
                                                <Field
                                                    key={key}
                                                    label={label}
                                                    type={type}
                                                    value={formValues[key]}
                                                    editable={editing.contact}
                                                    onChange={updateField(key)}
                                                    icon={key === 'email' ? Mail : Phone}
                                                />
                                            ))}
                                        </div>
                                    </SectionCard>

                                    <SectionCard
                                        title="Banking Details"
                                        description="Manage payout-ready banking information in a secure format."
                                        editing={editing.banking}
                                        onToggleEdit={() => {
                                            if (!showBankForm) {
                                                setShowBankForm(true);
                                            }
                                            toggleEdit('banking');
                                        }}
                                        actions={
                                            !showBankForm ? (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowBankForm(true);
                                                        setEditing((current) => ({
                                                            ...current,
                                                            banking: true
                                                        }));
                                                    }}
                                                    className="btn-theme-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                                                >
                                                    <Banknote size={16} />
                                                    Add Bank Account
                                                </button>
                                            ) : null
                                        }
                                    >
                                        {showBankForm ? (
                                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                                {bankingFields.map(({ key, label }) => (
                                                    <Field
                                                        key={key}
                                                        label={label}
                                                        value={formValues[key]}
                                                        editable={editing.banking}
                                                        onChange={updateField(key)}
                                                        icon={Landmark}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="mt-0 flex min-h-[260px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[var(--color-accent-200)] bg-[linear-gradient(180deg,var(--gradient-blue-panel-start)_0%,var(--gradient-blue-panel-end)_100%)] px-6 text-center shadow-[var(--inset-white-glow)]">
                                                <div className="inline-flex h-18 w-18 items-center justify-center rounded-full bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-[var(--shadow-accent-avatar)]">
                                                    <Landmark size={32} />
                                                </div>
                                                <p className="mt-5 text-xl font-bold text-[var(--color-text-strong)]">No bank account added</p>
                                                <p className="mt-2 max-w-[420px] text-sm font-medium leading-6 text-[var(--color-text-muted)]">
                                                    Add your bank profile to enable secure withdrawals and faster account verification.
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowBankForm(true);
                                                        setEditing((current) => ({
                                                            ...current,
                                                            banking: true
                                                        }));
                                                    }}
                                                    className="btn-theme-primary mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                                                >
                                                    <Banknote size={16} />
                                                    + Add Bank Account
                                                </button>
                                            </div>
                                        )}
                                    </SectionCard>
                                </div>
                            </div>
                        </div>
        </AccountLayout>
    );
}
