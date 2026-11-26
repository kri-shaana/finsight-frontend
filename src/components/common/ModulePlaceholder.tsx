import { LucideIcon, Construction } from 'lucide-react';

interface ModulePlaceholderProps {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function ModulePlaceholder({
  title,
  description,
  icon: Icon = Construction,
}: ModulePlaceholderProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 style={{ color: 'var(--color-text-primary)' }}>{title}</h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {description}
          </p>
        </div>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: 'var(--color-accent-subtle)' }}
        >
          <Icon size={18} style={{ color: 'var(--color-accent)' }} />
        </div>
      </div>

      {/* Placeholder body */}
      <div
        className="rounded-lg flex flex-col items-center justify-center py-20 gap-4"
        style={{
          backgroundColor: 'var(--color-card)',
          border: '1px dashed var(--color-border)',
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-elevated)' }}
        >
          <Icon size={24} style={{ color: 'var(--color-text-muted)' }} />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </p>
          <p className="text-xs mt-1 max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
            This module is under development and will be available in a future release.
          </p>
        </div>
        <span className="badge badge-warning">In Development</span>
      </div>
    </div>
  );
}
