// Original file: ../../proto/token.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GenerateAccessTokenRequest as _token_GenerateAccessTokenRequest, GenerateAccessTokenRequest__Output as _token_GenerateAccessTokenRequest__Output } from '../token/GenerateAccessTokenRequest';
import type { GenerateAccessTokenResponse as _token_GenerateAccessTokenResponse, GenerateAccessTokenResponse__Output as _token_GenerateAccessTokenResponse__Output } from '../token/GenerateAccessTokenResponse';
import type { GenerateJWTRequest as _token_GenerateJWTRequest, GenerateJWTRequest__Output as _token_GenerateJWTRequest__Output } from '../token/GenerateJWTRequest';
import type { TokenServerTestRequest as _token_TokenServerTestRequest, TokenServerTestRequest__Output as _token_TokenServerTestRequest__Output } from '../token/TokenServerTestRequest';
import type { TokenServerTestResponse as _token_TokenServerTestResponse, TokenServerTestResponse__Output as _token_TokenServerTestResponse__Output } from '../token/TokenServerTestResponse';
import type { ValidateTokenRequest as _token_ValidateTokenRequest, ValidateTokenRequest__Output as _token_ValidateTokenRequest__Output } from '../token/ValidateTokenRequest';
import type { ValidateTokenResponse as _token_ValidateTokenResponse, ValidateTokenResponse__Output as _token_ValidateTokenResponse__Output } from '../token/ValidateTokenResponse';

export interface TokenServiceClient extends grpc.Client {
  GenerateJWT(argument: _token_GenerateJWTRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateJWT(argument: _token_GenerateJWTRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateJWT(argument: _token_GenerateJWTRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateJWT(argument: _token_GenerateJWTRequest, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateJwt(argument: _token_GenerateJWTRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateJwt(argument: _token_GenerateJWTRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateJwt(argument: _token_GenerateJWTRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateJwt(argument: _token_GenerateJWTRequest, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  
  GenerateToken(argument: _token_GenerateAccessTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _token_GenerateAccessTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _token_GenerateAccessTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  GenerateToken(argument: _token_GenerateAccessTokenRequest, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _token_GenerateAccessTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _token_GenerateAccessTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _token_GenerateAccessTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  generateToken(argument: _token_GenerateAccessTokenRequest, callback: grpc.requestCallback<_token_GenerateAccessTokenResponse__Output>): grpc.ClientUnaryCall;
  
  TokenTest(argument: _token_TokenServerTestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  TokenTest(argument: _token_TokenServerTestRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  TokenTest(argument: _token_TokenServerTestRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  TokenTest(argument: _token_TokenServerTestRequest, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  tokenTest(argument: _token_TokenServerTestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  tokenTest(argument: _token_TokenServerTestRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  tokenTest(argument: _token_TokenServerTestRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  tokenTest(argument: _token_TokenServerTestRequest, callback: grpc.requestCallback<_token_TokenServerTestResponse__Output>): grpc.ClientUnaryCall;
  
  ValidateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  ValidateToken(argument: _token_ValidateTokenRequest, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  validateToken(argument: _token_ValidateTokenRequest, callback: grpc.requestCallback<_token_ValidateTokenResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TokenServiceHandlers extends grpc.UntypedServiceImplementation {
  GenerateJWT: grpc.handleUnaryCall<_token_GenerateJWTRequest__Output, _token_GenerateAccessTokenResponse>;
  
  GenerateToken: grpc.handleUnaryCall<_token_GenerateAccessTokenRequest__Output, _token_GenerateAccessTokenResponse>;
  
  TokenTest: grpc.handleUnaryCall<_token_TokenServerTestRequest__Output, _token_TokenServerTestResponse>;
  
  ValidateToken: grpc.handleUnaryCall<_token_ValidateTokenRequest__Output, _token_ValidateTokenResponse>;
  
}

export interface TokenServiceDefinition extends grpc.ServiceDefinition {
  GenerateJWT: MethodDefinition<_token_GenerateJWTRequest, _token_GenerateAccessTokenResponse, _token_GenerateJWTRequest__Output, _token_GenerateAccessTokenResponse__Output>
  GenerateToken: MethodDefinition<_token_GenerateAccessTokenRequest, _token_GenerateAccessTokenResponse, _token_GenerateAccessTokenRequest__Output, _token_GenerateAccessTokenResponse__Output>
  TokenTest: MethodDefinition<_token_TokenServerTestRequest, _token_TokenServerTestResponse, _token_TokenServerTestRequest__Output, _token_TokenServerTestResponse__Output>
  ValidateToken: MethodDefinition<_token_ValidateTokenRequest, _token_ValidateTokenResponse, _token_ValidateTokenRequest__Output, _token_ValidateTokenResponse__Output>
}
