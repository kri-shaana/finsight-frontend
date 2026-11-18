export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Dashboard</h2>
        <p className="text-slate-500 mt-1">Overview of your reconciliation activity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Total Settlements', 'Matched', 'Unmatched', 'Pending Review'].map((label) => (
          <div key={label} className="card">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
            <p className="text-2xl font-semibold text-slate-800 mt-2">—</p>
          </div>
        ))}
      </div>

      <div className="card">
        <p className="text-slate-400 text-sm text-center py-12">
          Reconciliation data will appear here in Phase 2.
        </p>
      </div>
    </div>
  );
}
