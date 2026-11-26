export const PERMISSIONS = {
  // Organizations
  ORGANIZATIONS_READ:   'organizations:read',
  ORGANIZATIONS_MANAGE: 'organizations:manage',

  // Users
  USERS_READ:   'users:read',
  USERS_MANAGE: 'users:manage',

  // Roles
  ROLES_MANAGE: 'roles:manage',

  // Transactions
  TRANSACTIONS_READ: 'transactions:read',

  // Settlements
  SETTLEMENTS_READ:   'settlements:read',
  SETTLEMENTS_UPLOAD: 'settlements:upload',

  // File Management
  FILES_READ:   'files:read',
  FILES_UPLOAD: 'files:upload',

  // Reconciliation
  RECONCILIATION_READ: 'reconciliation:read',
  RECONCILIATION_RUN:  'reconciliation:run',

  // Discrepancies
  DISCREPANCIES_READ:        'discrepancies:read',
  DISCREPANCIES_INVESTIGATE: 'discrepancies:investigate',

  // Refunds
  REFUNDS_READ:   'refunds:read',
  REFUNDS_MANAGE: 'refunds:manage',

  // Reports
  REPORTS_READ:   'reports:read',
  REPORTS_EXPORT: 'reports:export',

  // Audit Logs
  AUDIT_LOGS_READ: 'audit_logs:read',

  // Approvals
  APPROVALS_MANAGE: 'approvals:manage',

  // Notifications
  NOTIFICATIONS_READ: 'notifications:read',

  // Payment Providers
  PAYMENT_PROVIDERS_READ:   'payment_providers:read',
  PAYMENT_PROVIDERS_MANAGE: 'payment_providers:manage',

  // System
  SYSTEM_MONITORING_READ: 'system_monitoring:read',
  PLATFORM_SETTINGS:      'platform:settings',
  ORG_SETTINGS:           'org:settings',
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
