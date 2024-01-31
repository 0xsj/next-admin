package repository

import (
	"fmt"
	"kakao/platform/services/account/types"
)

func (r *AccountRepository) CreateUser(user *types.User) (*types.User, error) {
	query := `
		-- INSERT INTO USERS
		INSERT INTO users
			(id, created_at, updated_at, deleted_at, email, password, salt, first_name, last_name)
		VALUES
			(:id, :created_at, :updated_at, :deleted_at, :email, :password, :salt, :first_name, :last_name)

	`
	_, err := r.db.NamedExec(query, user)
	if err != nil {
		return nil, fmt.Errorf("user-create repository error: %s", err.Error())
	}

	return user, nil
}
