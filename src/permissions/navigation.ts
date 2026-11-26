import {
  LayoutDashboard, ArrowLeftRight, FileText, FolderOpen,
  GitCompare, AlertTriangle, RotateCcw, Building2, Users,
  ShieldCheck, CreditCard, CheckSquare, BarChart3, ScrollText,
  Bell, Monitor, Settings, SlidersHorizontal, UserCircle,
} from 'lucide-react';
import { Permission, PERMISSIONS } from './permissions';
import { Role, ROLES } from './roles';
import { hasAnyPermission } from './access-control';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ElementType;
  permissions: Permission[];
}

export interface NavGroup {
  id: string;
  title: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'overview',
    title: 'Overview',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard,
        permissions: [],
      },
    ],
  },
  {
    id: 'financial-ops',
    title: 'Financial Operations',
    items: [
      {
        id: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: ArrowLeftRight,
        permissions: [PERMISSIONS.TRANSACTIONS_READ],
      },
      {
        id: 'settlements',
        label: 'Settlements',
        path: '/settlements',
        icon: FileText,
        permissions: [PERMISSIONS.SETTLEMENTS_READ],
      },
      {
        id: 'files',
        label: 'File Management',
        path: '/files',
        icon: FolderOpen,
        permissions: [PERMISSIONS.FILES_READ, PERMISSIONS.FILES_UPLOAD],
      },
      {
        id: 'reconciliation',
        label: 'Reconciliation',
        path: '/reconciliation',
        icon: GitCompare,
        permissions: [PERMISSIONS.RECONCILIATION_READ],
      },
      {
        id: 'discrepancies',
        label: 'Discrepancies',
        path: '/discrepancies',
        icon: AlertTriangle,
        permissions: [PERMISSIONS.DISCREPANCIES_READ],
      },
      {
        id: 'refunds',
        label: 'Refunds',
        path: '/refunds',
        icon: RotateCcw,
        permissions: [PERMISSIONS.REFUNDS_READ],
      },
    ],
  },
  {
    id: 'management',
    title: 'Management',
    items: [
      {
        id: 'organizations',
        label: 'Organizations',
        path: '/organizations',
        icon: Building2,
        permissions: [PERMISSIONS.ORGANIZATIONS_READ],
      },
      {
        id: 'users',
        label: 'Users',
        path: '/users',
        icon: Users,
        permissions: [PERMISSIONS.USERS_READ],
      },
      {
        id: 'roles',
        label: 'Roles & Permissions',
        path: '/roles',
        icon: ShieldCheck,
        permissions: [PERMISSIONS.ROLES_MANAGE],
      },
      {
        id: 'payment-providers',
        label: 'Payment Providers',
        path: '/payment-providers',
        icon: CreditCard,
        permissions: [PERMISSIONS.PAYMENT_PROVIDERS_READ],
      },
      {
        id: 'approvals',
        label: 'Approvals',
        path: '/approvals',
        icon: CheckSquare,
        permissions: [PERMISSIONS.APPROVALS_MANAGE],
      },
    ],
  },
  {
    id: 'insights',
    title: 'Insights & Control',
    items: [
      {
        id: 'reports',
        label: 'Reports',
        path: '/reports',
        icon: BarChart3,
        permissions: [PERMISSIONS.REPORTS_READ],
      },
      {
        id: 'audit-logs',
        label: 'Audit Logs',
        path: '/audit-logs',
        icon: ScrollText,
        permissions: [PERMISSIONS.AUDIT_LOGS_READ],
      },
      {
        id: 'notifications',
        label: 'Notifications',
        path: '/notifications',
        icon: Bell,
        permissions: [PERMISSIONS.NOTIFICATIONS_READ],
      },
      {
        id: 'monitoring',
        label: 'System Monitoring',
        path: '/monitoring',
        icon: Monitor,
        permissions: [PERMISSIONS.SYSTEM_MONITORING_READ],
      },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    items: [
      {
        id: 'org-settings',
        label: 'Organization Settings',
        path: '/settings/organization',
        icon: Settings,
        permissions: [PERMISSIONS.ORG_SETTINGS],
      },
      {
        id: 'profile-settings',
        label: 'Profile Settings',
        path: '/settings/profile',
        icon: UserCircle,
        permissions: [],
      },
      {
        id: 'platform-settings',
        label: 'Platform Settings',
        path: '/settings/platform',
        icon: SlidersHorizontal,
        permissions: [PERMISSIONS.PLATFORM_SETTINGS],
      },
    ],
  },
];

export function getNavForRole(role: Role): NavGroup[] {
  return NAV_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter(
      (item) => item.permissions.length === 0 || hasAnyPermission(role, item.permissions),
    ),
  })).filter((group) => group.items.length > 0);
}

export const ALL_ROLES_FOR_DEV: Role[] = [
  ROLES.SUPER_ADMIN,
  ROLES.ORGANIZATION_ADMIN,
  ROLES.FINANCE_MANAGER,
  ROLES.FINANCE_ANALYST,
  ROLES.AUDITOR,
];
