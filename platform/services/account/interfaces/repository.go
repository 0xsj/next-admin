package interfaces

import (
	"kakao/platform/services/account/types"
)

type Repository interface {
	CreateUser(user *types.User) (*types.User, error)
	// GetUserById(userID uuid.UUID) (*types.User, error)
	// GetUserByEmail(email strfmt.Email) (*types.User, error)
	// GetAllUsers() ([]*types.User, error)
}
