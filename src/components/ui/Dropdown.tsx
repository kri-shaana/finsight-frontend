import { ReactNode, useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  icon?: React.ElementType;
  onClick: () => void;
  danger?: boolean;
  disabled?: boolean;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
}

export function Dropdown({ trigger, items, align = 'right' }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div
          className={`absolute top-full mt-1 z-30 min-w-40 rounded-lg py-1 overflow-hidden ${align === 'right' ? 'right-0' : 'left-0'}`}
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                disabled={item.disabled}
                onClick={() => { item.onClick(); setOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ color: item.danger ? 'var(--color-danger)' : 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = item.danger
                    ? 'var(--color-danger-subtle)' : 'var(--color-elevated)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                {Icon && <Icon size={13} />}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
