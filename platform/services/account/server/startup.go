package server

import (
	"kakao/platform/internal/proto/pb"
	"kakao/platform/services/account/controller"
	"kakao/platform/services/account/interfaces"
)

type AccountService struct {
	c interfaces.Controller
	pb.AccountServiceServer
}

func NewAccountSerivce() (*AccountService, error) {
	cont, err := controller.NewAccountController()
	if err != nil {
		return nil, err
	}

	return &AccountService{
		c: cont,
	}, nil
}
