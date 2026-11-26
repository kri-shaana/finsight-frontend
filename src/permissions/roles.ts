export const ROLES = {
  SUPER_ADMIN:        'SUPER_ADMIN',
  ORGANIZATION_ADMIN: 'ORGANIZATION_ADMIN',
  FINANCE_MANAGER:    'FINANCE_MANAGER',
  FINANCE_ANALYST:    'FINANCE_ANALYST',
  AUDITOR:            'AUDITOR',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  SUPER_ADMIN:        'Super Admin',
  ORGANIZATION_ADMIN: 'Organization Admin',
  FINANCE_MANAGER:    'Finance Manager',
  FINANCE_ANALYST:    'Finance Analyst',
  AUDITOR:            'Auditor',
};
