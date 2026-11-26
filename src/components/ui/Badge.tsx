import { ReactNode } from 'react';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'accent' | 'muted';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  dot?: boolean;
}

export function Badge({ variant = 'muted', children, dot = false }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'currentColor' }}
        />
      )}
      {children}
    </span>
  );
}
