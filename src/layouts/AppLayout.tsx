import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/transactions': 'Transactions',
  '/settlements': 'Settlements',
  '/file-management': 'File Management',
  '/reconciliation': 'Reconciliation',
  '/discrepancies': 'Discrepancies',
  '/refunds': 'Refunds',
  '/users': 'Users & Roles',
  '/organizations': 'Organizations',
  '/payment-providers': 'Payment Providers',
  '/approvals': 'Approvals',
  '/reports': 'Reports',
  '/audit-logs': 'Audit Logs',
  '/notifications': 'Notifications',
  '/system-monitoring': 'System Monitoring',
  '/settings': 'Settings',
};

export function AppLayout() {
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] ?? 'FinSight';

  return (
    <div className="flex h-screen overflow-hidden bg-surface-muted">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
