// Original file: ../../proto/authentication.proto

export const Status = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED',
  SUSPENDED: 'SUSPENDED',
} as const;

export type Status =
  | 'PENDING'
  | 0
  | 'ACTIVE'
  | 1
  | 'DEACTIVATED'
  | 2
  | 'SUSPENDED'
  | 3

export type Status__Output = typeof Status[keyof typeof Status]
