import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`input ${error ? 'border-[var(--color-danger)]' : ''} ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-danger)' }}>
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
