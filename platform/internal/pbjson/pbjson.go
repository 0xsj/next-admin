package pbjson

import "google.golang.org/protobuf/encoding/protojson"

// marshaller 
func M() protojson.MarshalOptions {
  return protojson.MarshalOptions{
    AllowPartial: true,
    UseProtoNames: true,
  } 
}

// global unmarshal
func U() protojson.UnmarshalOptions {
  return protojson.UnmarshalOptions{
    AllowPartial: true,
    DiscardUnknown: true,
  } 
}

// convert proto object to specified output

