import {
  ArrowLeftRight,
  FileText,
  GitCompare,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const stats = [
  { label: 'Total Settlements', value: '—', icon: FileText, trend: null },
  { label: 'Matched', value: '—', icon: CheckCircle2, trend: null },
  { label: 'Discrepancies', value: '—', icon: AlertTriangle, trend: null },
  { label: 'Pending Review', value: '—', icon: Clock, trend: null },
];

const recentActivity = [
  { label: 'Settlement file uploaded', time: '—', status: 'pending' },
  { label: 'Reconciliation run completed', time: '—', status: 'success' },
  { label: 'Discrepancy flagged', time: '—', status: 'error' },
  { label: 'Refund processed', time: '—', status: 'success' },
];

const statusClass: Record<string, string> = {
  pending: 'badge-yellow',
  success: 'badge-green',
  error: 'badge-red',
};

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Dashboard</h2>
        <p className="text-slate-500 mt-1 text-sm">
          Overview of your financial reconciliation activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
              <p className="text-2xl font-semibold text-slate-800 mt-2">{value}</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-brand-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent activity */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-800">Recent Activity</h3>
            <button className="text-xs text-brand-600 hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-sm text-slate-700">{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">{item.time}</span>
                  <span className={statusClass[item.status]}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="card">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { label: 'Upload Settlement File', icon: FileText },
              { label: 'Run Reconciliation', icon: GitCompare },
              { label: 'View Discrepancies', icon: AlertTriangle },
              { label: 'View Transactions', icon: ArrowLeftRight },
              { label: 'Trends & Reports', icon: TrendingUp },
              { label: 'Refund Summary', icon: TrendingDown },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-surface-subtle hover:text-slate-800 transition-colors text-left"
              >
                <Icon size={14} className="text-brand-500 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
