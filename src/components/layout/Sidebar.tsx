import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, CreditCard, Settings, TrendingUp } from 'lucide-react';
import { APP_NAME } from '@/constants';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/reconciliations', icon: TrendingUp, label: 'Reconciliations' },
  { to: '/settlements', icon: FileText, label: 'Settlements' },
  { to: '/payments', icon: CreditCard, label: 'Payments' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 bg-slate-900 text-slate-100 flex flex-col h-screen sticky top-0">
      <div className="px-6 py-5 border-b border-slate-700">
        <span className="text-lg font-semibold text-white">{APP_NAME}</span>
        <p className="text-2xs text-slate-400 mt-0.5">Reconciliation Platform</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
