import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
  FolderOpen,
  GitCompare,
  AlertTriangle,
  RotateCcw,
  Users,
  Building2,
  CreditCard,
  CheckSquare,
  BarChart3,
  ScrollText,
  Bell,
  Monitor,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { APP_NAME } from '@/constants';

interface NavItem {
  to: string;
  icon: React.ElementType;
  label: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    ],
  },
  {
    title: 'Financial Operations',
    items: [
      { to: '/transactions', icon: ArrowLeftRight, label: 'Transactions' },
      { to: '/settlements', icon: FileText, label: 'Settlements' },
      { to: '/file-management', icon: FolderOpen, label: 'File Management' },
      { to: '/reconciliation', icon: GitCompare, label: 'Reconciliation' },
      { to: '/discrepancies', icon: AlertTriangle, label: 'Discrepancies' },
      { to: '/refunds', icon: RotateCcw, label: 'Refunds' },
    ],
  },
  {
    title: 'Management',
    items: [
      { to: '/users', icon: Users, label: 'Users & Roles' },
      { to: '/organizations', icon: Building2, label: 'Organizations' },
      { to: '/payment-providers', icon: CreditCard, label: 'Payment Providers' },
      { to: '/approvals', icon: CheckSquare, label: 'Approvals' },
    ],
  },
  {
    title: 'Insights & System',
    items: [
      { to: '/reports', icon: BarChart3, label: 'Reports' },
      { to: '/audit-logs', icon: ScrollText, label: 'Audit Logs' },
      { to: '/notifications', icon: Bell, label: 'Notifications' },
      { to: '/system-monitoring', icon: Monitor, label: 'System Monitoring' },
    ],
  },
];

function NavSection({ section }: { section: NavSection }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-1">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-2xs font-semibold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
      >
        {section.title}
        <ChevronDown
          size={12}
          className={`transition-transform ${collapsed ? '-rotate-90' : ''}`}
        />
      </button>

      {!collapsed && (
        <div className="space-y-0.5">
          {section.items.map(({ to, icon: Icon, label }) => (
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
              <Icon size={15} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-60 shrink-0 bg-slate-900 text-slate-100 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-4 border-b border-slate-700/60">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center">
            <GitCompare size={14} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none">{APP_NAME}</p>
            <p className="text-2xs text-slate-400 mt-0.5">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-3 scrollbar-thin">
        {navSections.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </nav>

      {/* Settings */}
      <div className="px-3 py-3 border-t border-slate-700/60">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              isActive
                ? 'bg-brand-600 text-white'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          <Settings size={15} />
          Settings
        </NavLink>
      </div>

      {/* User */}
      <div className="px-4 py-3 border-t border-slate-700/60 bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
            A
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">Admin User</p>
            <p className="text-2xs text-slate-400 truncate">Organization Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
