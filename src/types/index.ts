export interface ApiSuccess<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  error: { code: string; details?: unknown };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export interface HealthStatus {
  status: 'healthy' | 'degraded';
  uptime: number;
  timestamp: string;
  services: {
    database: 'up' | 'down';
    redis: 'up' | 'down';
  };
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'ANALYST' | 'VIEWER';
  organizationId: string;
}
