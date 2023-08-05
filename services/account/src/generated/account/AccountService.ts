// Original file: ../../proto/account.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AccountServerTestRequest as _account_AccountServerTestRequest, AccountServerTestRequest__Output as _account_AccountServerTestRequest__Output } from '../account/AccountServerTestRequest';
import type { AccountServerTestResponse as _account_AccountServerTestResponse, AccountServerTestResponse__Output as _account_AccountServerTestResponse__Output } from '../account/AccountServerTestResponse';
import type { CreatAccountResponse as _account_CreatAccountResponse, CreatAccountResponse__Output as _account_CreatAccountResponse__Output } from '../account/CreatAccountResponse';
import type { CreateAccountRequest as _account_CreateAccountRequest, CreateAccountRequest__Output as _account_CreateAccountRequest__Output } from '../account/CreateAccountRequest';
import type { GetAccountByIdRequest as _account_GetAccountByIdRequest, GetAccountByIdRequest__Output as _account_GetAccountByIdRequest__Output } from '../account/GetAccountByIdRequest';
import type { GetAccountByIdResponse as _account_GetAccountByIdResponse, GetAccountByIdResponse__Output as _account_GetAccountByIdResponse__Output } from '../account/GetAccountByIdResponse';

export interface AccountServiceClient extends grpc.Client {
  AccountTest(argument: _account_AccountServerTestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  AccountTest(argument: _account_AccountServerTestRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  AccountTest(argument: _account_AccountServerTestRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  AccountTest(argument: _account_AccountServerTestRequest, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  accountTest(argument: _account_AccountServerTestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  accountTest(argument: _account_AccountServerTestRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  accountTest(argument: _account_AccountServerTestRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  accountTest(argument: _account_AccountServerTestRequest, callback: grpc.requestCallback<_account_AccountServerTestResponse__Output>): grpc.ClientUnaryCall;
  
  CreateAccount(argument: _account_CreateAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  CreateAccount(argument: _account_CreateAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  CreateAccount(argument: _account_CreateAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  CreateAccount(argument: _account_CreateAccountRequest, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _account_CreateAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _account_CreateAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _account_CreateAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _account_CreateAccountRequest, callback: grpc.requestCallback<_account_CreatAccountResponse__Output>): grpc.ClientUnaryCall;
  
  GetAccountById(argument: _account_GetAccountByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  GetAccountById(argument: _account_GetAccountByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  GetAccountById(argument: _account_GetAccountByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  GetAccountById(argument: _account_GetAccountByIdRequest, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  getAccountById(argument: _account_GetAccountByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  getAccountById(argument: _account_GetAccountByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  getAccountById(argument: _account_GetAccountByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  getAccountById(argument: _account_GetAccountByIdRequest, callback: grpc.requestCallback<_account_GetAccountByIdResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AccountServiceHandlers extends grpc.UntypedServiceImplementation {
  AccountTest: grpc.handleUnaryCall<_account_AccountServerTestRequest__Output, _account_AccountServerTestResponse>;
  
  CreateAccount: grpc.handleUnaryCall<_account_CreateAccountRequest__Output, _account_CreatAccountResponse>;
  
  GetAccountById: grpc.handleUnaryCall<_account_GetAccountByIdRequest__Output, _account_GetAccountByIdResponse>;
  
}

export interface AccountServiceDefinition extends grpc.ServiceDefinition {
  AccountTest: MethodDefinition<_account_AccountServerTestRequest, _account_AccountServerTestResponse, _account_AccountServerTestRequest__Output, _account_AccountServerTestResponse__Output>
  CreateAccount: MethodDefinition<_account_CreateAccountRequest, _account_CreatAccountResponse, _account_CreateAccountRequest__Output, _account_CreatAccountResponse__Output>
  GetAccountById: MethodDefinition<_account_GetAccountByIdRequest, _account_GetAccountByIdResponse, _account_GetAccountByIdRequest__Output, _account_GetAccountByIdResponse__Output>
}
