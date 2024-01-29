package interfaces

import (
	"kakao/platform/internal/proto/pb"

	"github.com/golang/protobuf/ptypes/empty"
	"github.com/golang/protobuf/ptypes/wrappers"
)

type Controller interface {
	CreateUser(in *pb.User) (*pb.User, error)
	GetUserById(in *wrappers.StringValue) (*pb.User, error)
	GetUserByEmail(in *wrappers.StringValue) (*pb.User, error)
	GetAllUsers(in *empty.Empty) (*pb.UserList, error)
}
