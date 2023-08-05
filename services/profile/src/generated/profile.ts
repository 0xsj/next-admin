import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProfileServiceClient as _profile_ProfileServiceClient, ProfileServiceDefinition as _profile_ProfileServiceDefinition } from './profile/ProfileService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  profile: {
    CreateProfileRequest: MessageTypeDefinition
    CreateProfileResponse: MessageTypeDefinition
    GetProfileByIdRequest: MessageTypeDefinition
    GetProfileByIdResponse: MessageTypeDefinition
    Profile: MessageTypeDefinition
    ProfileService: SubtypeConstructor<typeof grpc.Client, _profile_ProfileServiceClient> & { service: _profile_ProfileServiceDefinition }
    RemoveProfileRequest: MessageTypeDefinition
    RemoveProfileResponse: MessageTypeDefinition
    UpdateProfileRequest: MessageTypeDefinition
    UpdateProfileResponse: MessageTypeDefinition
  }
}

