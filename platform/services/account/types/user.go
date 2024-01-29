package types

import (
	"time"

	"github.com/go-openapi/strfmt"
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time
	Email     strfmt.Email
	Password  string
	Salt      string
	FirstName string
	LastName  string
}
