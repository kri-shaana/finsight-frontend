import { Role } from './roles';
import { Permission } from './permissions';
import { ROLE_PERMISSIONS } from './role-permissions';

export function getPermissions(role: Role): Permission[] {
  return ROLE_PERMISSIONS[role] ?? [];
}

export function hasPermission(role: Role, permission: Permission): boolean {
  return getPermissions(role).includes(permission);
}

export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  const granted = getPermissions(role);
  return permissions.some((p) => granted.includes(p));
}

export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  const granted = getPermissions(role);
  return permissions.every((p) => granted.includes(p));
}
