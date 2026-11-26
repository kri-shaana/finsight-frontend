import { InputHTMLAttributes, forwardRef } from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Switch({ checked, onChange, label, disabled }: SwitchProps) {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className="relative w-9 h-5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{
          backgroundColor: checked ? 'var(--color-accent)' : 'var(--color-elevated)',
          border: '1px solid var(--color-border)',
        }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-200"
          style={{
            backgroundColor: checked ? 'var(--color-text-inverse)' : 'var(--color-text-muted)',
            transform: checked ? 'translateX(16px)' : 'translateX(0)',
          }}
        />
      </button>
      {label && <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  );
}

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className = '', ...props }, ref) => {
    const checkId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
    return (
      <label htmlFor={checkId} className="inline-flex items-center gap-2 cursor-pointer select-none">
        <input
          ref={ref}
          type="checkbox"
          id={checkId}
          className={`w-4 h-4 rounded cursor-pointer accent-[var(--color-accent)] ${className}`}
          {...props}
        />
        {label && <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{label}</span>}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
