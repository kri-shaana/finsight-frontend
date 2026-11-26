import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: { value: string; positive: boolean };
  accent?: boolean;
}

export function StatCard({ label, value, icon: Icon, trend, accent }: StatCardProps) {
  return (
    <div
      className="card flex items-start justify-between gap-3"
      style={accent ? { borderColor: 'var(--color-accent-subtle)' } : {}}
    >
      <div className="min-w-0">
        <p
          className="text-xs font-medium uppercase tracking-wide truncate"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {label}
        </p>
        <p
          className="text-2xl font-semibold mt-1.5 tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {value}
        </p>
        {trend && (
          <p
            className="text-xs mt-1"
            style={{ color: trend.positive ? 'var(--color-success)' : 'var(--color-danger)' }}
          >
            {trend.positive ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </div>
      {Icon && (
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{
            backgroundColor: accent ? 'var(--color-accent-subtle)' : 'var(--color-elevated)',
            color: accent ? 'var(--color-accent)' : 'var(--color-text-secondary)',
          }}
        >
          <Icon size={16} />
        </div>
      )}
    </div>
  );
}
