package pbjson

import (
	"encoding/json"

	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

// type ProtoResponse struct {
// 	state         protoimpl.MessageState
// 	sizeCache     protoimpl.SizeCache
// 	unknownFields protoimpl.UnknownFields
// }

// // ProtoReflect implements protoreflect.ProtoMessage.
// func (*ProtoResponse) ProtoReflect() protoreflect.Message {
// 	panic("unimplemented")
// }

func M() protojson.MarshalOptions {
	return protojson.MarshalOptions{
		AllowPartial:  true,
		UseProtoNames: true,
	}
}

func U() protojson.UnmarshalOptions {
	return protojson.UnmarshalOptions{
		AllowPartial:   true,
		DiscardUnknown: true,
	}
}

// func (r *ProtoResponse) MarshalJSON() ([]byte, error) {
// 	return protojson.Marshal((r))
// }

// func (r *ProtoResponse) UnmarshalJSON(data []byte) error {
// 	return protojson.Unmarshal(data, r)
// }

func FromProto(in proto.Message, out interface{}) error {
	b, err := M().Marshal(in)
	if err != nil {
		return err
	}

	if err := json.Unmarshal(b, out); err != nil {
		return err
	}

	return nil
}

func ToProto(in interface{}, out proto.Message) error {
	b, err := json.Marshal(in)
	if err != nil {
		return err
	}

	if err := U().Unmarshal(b, out); err != nil {
		return err
	}

	return nil
}
