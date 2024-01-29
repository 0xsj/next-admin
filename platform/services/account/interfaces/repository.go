package interfaces

import (
	"kakao/platform/services/account/types"

	"github.com/go-openapi/strfmt"
	"github.com/google/uuid"
)

type Repository interface {
	CreateUser(user *types.User) (*types.User, error)
	GetUserById(userID uuid.UUID) (*types.User, error)
	GetUserByEmail(email strfmt.Email) (*types.User, error)
	GetAllUsers() ([]*types.User, error)
}
