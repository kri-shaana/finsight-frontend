import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { DashboardPage } from '@/pages/DashboardPage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TransactionsPage } from '@/pages/TransactionsPage';
import { SettlementsPage } from '@/pages/SettlementsPage';
import { FileManagementPage } from '@/pages/FileManagementPage';
import { ReconciliationPage } from '@/pages/ReconciliationPage';
import { DiscrepanciesPage } from '@/pages/DiscrepanciesPage';
import { RefundsPage } from '@/pages/RefundsPage';
import { UsersPage } from '@/pages/UsersPage';
import { OrganizationsPage } from '@/pages/OrganizationsPage';
import { PaymentProvidersPage } from '@/pages/PaymentProvidersPage';
import { ApprovalsPage } from '@/pages/ApprovalsPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { AuditLogsPage } from '@/pages/AuditLogsPage';
import { NotificationsPage } from '@/pages/NotificationsPage';
import { SystemMonitoringPage } from '@/pages/SystemMonitoringPage';
import { SettingsPage } from '@/pages/SettingsPage';

// Phase 2: replace with real auth context
const IS_AUTHENTICATED = true;

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute isAuthenticated={IS_AUTHENTICATED} />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Financial Operations */}
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/settlements" element={<SettlementsPage />} />
            <Route path="/file-management" element={<FileManagementPage />} />
            <Route path="/reconciliation" element={<ReconciliationPage />} />
            <Route path="/discrepancies" element={<DiscrepanciesPage />} />
            <Route path="/refunds" element={<RefundsPage />} />

            {/* Management */}
            <Route path="/users" element={<UsersPage />} />
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/payment-providers" element={<PaymentProvidersPage />} />
            <Route path="/approvals" element={<ApprovalsPage />} />

            {/* Insights & System */}
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/audit-logs" element={<AuditLogsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/system-monitoring" element={<SystemMonitoringPage />} />

            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
