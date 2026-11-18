export const APP_NAME = 'FinSight';
export const APP_VERSION = '1.0.0';

export const QUERY_KEYS = {
  health: ['health'] as const,
  user: (id: string) => ['user', id] as const,
  reconciliations: ['reconciliations'] as const,
} as const;
