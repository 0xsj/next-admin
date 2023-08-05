// Original file: ../../proto/authentication.proto

import type { Role as _authentication_Role, Role__Output as _authentication_Role__Output } from '../authentication/Role';
import type { Status as _authentication_Status, Status__Output as _authentication_Status__Output } from '../authentication/Status';
import type { Long } from '@grpc/proto-loader';

export interface Account {
  'id'?: (string);
  'email'?: (string);
  'password'?: (string);
  'role'?: (_authentication_Role);
  'status'?: (_authentication_Status);
  'createdAt'?: (number | string | Long);
  'updatedAt'?: (number | string | Long);
}

export interface Account__Output {
  'id': (string);
  'email': (string);
  'password': (string);
  'role': (_authentication_Role__Output);
  'status': (_authentication_Status__Output);
  'createdAt': (string);
  'updatedAt': (string);
}
