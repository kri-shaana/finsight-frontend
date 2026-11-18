export const ENDPOINTS = {
  health: '/health',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  users: '/users',
  reconciliations: '/reconciliations',
  settlements: '/settlements',
} as const;
