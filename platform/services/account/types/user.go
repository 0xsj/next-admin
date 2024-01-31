package types

import (
	"time"

	"github.com/go-openapi/strfmt"
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID    `db:"id" json:"id"`
	CreatedAt time.Time    `db:"created_at" json:"created_at"`
	UpdatedAt time.Time    `db:"updated_at" json:"updated_at"`
	DeletedAt *time.Time   `db:"deleted_at" json:"deleted_at"`
	Email     strfmt.Email `db:"email" json:"email"`
	Password  string       `db:"password" json:"password"`
	Salt      string       `db:"salt" json:"salt"`
	FirstName string       `db:"first_name" json:"first_name"`
	LastName  string       `db:"last_name" json:"last_name"`
}
