// Original file: ../../proto/profile.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateProfileRequest as _profile_CreateProfileRequest, CreateProfileRequest__Output as _profile_CreateProfileRequest__Output } from '../profile/CreateProfileRequest';
import type { CreateProfileResponse as _profile_CreateProfileResponse, CreateProfileResponse__Output as _profile_CreateProfileResponse__Output } from '../profile/CreateProfileResponse';
import type { GetProfileByIdRequest as _profile_GetProfileByIdRequest, GetProfileByIdRequest__Output as _profile_GetProfileByIdRequest__Output } from '../profile/GetProfileByIdRequest';
import type { GetProfileByIdResponse as _profile_GetProfileByIdResponse, GetProfileByIdResponse__Output as _profile_GetProfileByIdResponse__Output } from '../profile/GetProfileByIdResponse';
import type { RemoveProfileRequest as _profile_RemoveProfileRequest, RemoveProfileRequest__Output as _profile_RemoveProfileRequest__Output } from '../profile/RemoveProfileRequest';
import type { RemoveProfileResponse as _profile_RemoveProfileResponse, RemoveProfileResponse__Output as _profile_RemoveProfileResponse__Output } from '../profile/RemoveProfileResponse';
import type { UpdateProfileRequest as _profile_UpdateProfileRequest, UpdateProfileRequest__Output as _profile_UpdateProfileRequest__Output } from '../profile/UpdateProfileRequest';
import type { UpdateProfileResponse as _profile_UpdateProfileResponse, UpdateProfileResponse__Output as _profile_UpdateProfileResponse__Output } from '../profile/UpdateProfileResponse';

export interface ProfileServiceClient extends grpc.Client {
  createProfile(argument: _profile_CreateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  createProfile(argument: _profile_CreateProfileRequest, callback: grpc.requestCallback<_profile_CreateProfileResponse__Output>): grpc.ClientUnaryCall;
  
  getProfileById(argument: _profile_GetProfileByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  getProfileById(argument: _profile_GetProfileByIdRequest, callback: grpc.requestCallback<_profile_GetProfileByIdResponse__Output>): grpc.ClientUnaryCall;
  
  removeProfile(argument: _profile_RemoveProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  removeProfile(argument: _profile_RemoveProfileRequest, callback: grpc.requestCallback<_profile_RemoveProfileResponse__Output>): grpc.ClientUnaryCall;
  
  updateProfile(argument: _profile_UpdateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _profile_UpdateProfileRequest, callback: grpc.requestCallback<_profile_UpdateProfileResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ProfileServiceHandlers extends grpc.UntypedServiceImplementation {
  createProfile: grpc.handleUnaryCall<_profile_CreateProfileRequest__Output, _profile_CreateProfileResponse>;
  
  getProfileById: grpc.handleUnaryCall<_profile_GetProfileByIdRequest__Output, _profile_GetProfileByIdResponse>;
  
  removeProfile: grpc.handleUnaryCall<_profile_RemoveProfileRequest__Output, _profile_RemoveProfileResponse>;
  
  updateProfile: grpc.handleUnaryCall<_profile_UpdateProfileRequest__Output, _profile_UpdateProfileResponse>;
  
}

export interface ProfileServiceDefinition extends grpc.ServiceDefinition {
  createProfile: MethodDefinition<_profile_CreateProfileRequest, _profile_CreateProfileResponse, _profile_CreateProfileRequest__Output, _profile_CreateProfileResponse__Output>
  getProfileById: MethodDefinition<_profile_GetProfileByIdRequest, _profile_GetProfileByIdResponse, _profile_GetProfileByIdRequest__Output, _profile_GetProfileByIdResponse__Output>
  removeProfile: MethodDefinition<_profile_RemoveProfileRequest, _profile_RemoveProfileResponse, _profile_RemoveProfileRequest__Output, _profile_RemoveProfileResponse__Output>
  updateProfile: MethodDefinition<_profile_UpdateProfileRequest, _profile_UpdateProfileResponse, _profile_UpdateProfileRequest__Output, _profile_UpdateProfileResponse__Output>
}
