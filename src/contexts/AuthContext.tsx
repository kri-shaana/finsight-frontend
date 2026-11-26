import { createContext, useContext, useState, ReactNode } from 'react';
import { Role, ROLES } from '@/permissions/roles';
import { Permission } from '@/permissions/permissions';
import { hasPermission, hasAnyPermission, hasAllPermissions } from '@/permissions/access-control';

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  organizationName: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  can: (permission: Permission) => boolean;
  canAny: (permissions: Permission[]) => boolean;
  canAll: (permissions: Permission[]) => boolean;
  // Dev only
  setDevRole: (role: Role) => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  can: () => false,
  canAny: () => false,
  canAll: () => false,
  setDevRole: () => {},
});

const DEV_USER: AuthUser = {
  id: 'dev-user-1',
  name: 'Admin User',
  email: 'admin@finsight.dev',
  role: ROLES.ORGANIZATION_ADMIN,
  organizationName: 'FinSight Demo',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(DEV_USER);

  const can = (permission: Permission) => hasPermission(user.role, permission);
  const canAny = (permissions: Permission[]) => hasAnyPermission(user.role, permissions);
  const canAll = (permissions: Permission[]) => hasAllPermissions(user.role, permissions);

  const setDevRole = (role: Role) => {
    setUser((prev) => ({ ...prev, role }));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: true, can, canAny, canAll, setDevRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
