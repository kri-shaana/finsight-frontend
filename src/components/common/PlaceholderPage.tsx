import { LucideIcon } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: { label: string; value: string }[];
}

export function PlaceholderPage({ title, description, icon: Icon, stats }: PlaceholderPageProps) {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2>{title}</h2>
          <p className="text-slate-500 mt-1 text-sm">{description}</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
          <Icon size={18} className="text-brand-600" />
        </div>
      </div>

      {/* Stats row */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card py-4">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-2xl font-semibold text-slate-800 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Content placeholder */}
      <div className="card min-h-64 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center">
          <Icon size={20} className="text-slate-400" />
        </div>
        <p className="text-slate-500 text-sm font-medium">{title} coming in Phase 2</p>
        <p className="text-slate-400 text-xs text-center max-w-xs">
          This module will be fully implemented with data tables, filters, and actions.
        </p>
      </div>
    </div>
  );
}
