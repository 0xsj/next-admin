package server

import (
	"context"
	"kakao/platform/internal/proto/pb"
)

func (s *AccountService) CreateUser(ctx context.Context, in *pb.User) (*pb.User, error) {

	//
	user, err := s.c.CreateUser(in)
	if err != nil {
		return nil, err
	}

	return user, nil
}
