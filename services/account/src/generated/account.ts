import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccountServiceClient as _account_AccountServiceClient, AccountServiceDefinition as _account_AccountServiceDefinition } from './account/AccountService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  account: {
    Account: MessageTypeDefinition
    AccountServerTestRequest: MessageTypeDefinition
    AccountServerTestResponse: MessageTypeDefinition
    AccountService: SubtypeConstructor<typeof grpc.Client, _account_AccountServiceClient> & { service: _account_AccountServiceDefinition }
    CreatAccountResponse: MessageTypeDefinition
    CreateAccountRequest: MessageTypeDefinition
    GetAccountByIdRequest: MessageTypeDefinition
    GetAccountByIdResponse: MessageTypeDefinition
    Role: EnumTypeDefinition
    Status: EnumTypeDefinition
  }
}

