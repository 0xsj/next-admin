package controller

import (
	"kakao/platform/services/account/interfaces"
	"kakao/platform/services/account/repository"
)

type AccountController struct {
	r interfaces.Repository
}

func NewAccountController() (*AccountController, error) {
	repo, err := repository.NewAccountRepository()
	if err != nil {
		return nil, err
	}
	// fmt.Println(repo)

	cont := &AccountController{
		r: repo,
	}

	return cont, nil
}
