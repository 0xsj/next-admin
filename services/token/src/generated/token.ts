import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TokenServiceClient as _token_TokenServiceClient, TokenServiceDefinition as _token_TokenServiceDefinition } from './token/TokenService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  token: {
    GenerateAccessTokenRequest: MessageTypeDefinition
    GenerateAccessTokenResponse: MessageTypeDefinition
    GenerateJWTRequest: MessageTypeDefinition
    GenerateJWTResponse: MessageTypeDefinition
    GenerateRefreshTokenRequest: MessageTypeDefinition
    InvalidateTokenResponse: MessageTypeDefinition
    TokenServerTestRequest: MessageTypeDefinition
    TokenServerTestResponse: MessageTypeDefinition
    TokenService: SubtypeConstructor<typeof grpc.Client, _token_TokenServiceClient> & { service: _token_TokenServiceDefinition }
    ValidateTokenRequest: MessageTypeDefinition
    ValidateTokenResponse: MessageTypeDefinition
  }
}

