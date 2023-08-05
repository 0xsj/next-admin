// Original file: ../../proto/account.proto

export const Role = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  CREATOR: 'CREATOR',
} as const;

export type Role =
  | 'ADMIN'
  | 0
  | 'USER'
  | 1
  | 'CREATOR'
  | 2

export type Role__Output = typeof Role[keyof typeof Role]
