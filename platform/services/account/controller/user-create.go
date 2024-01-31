package controller

import (
	"fmt"
	"kakao/platform/internal/pbjson"
	"kakao/platform/internal/proto/pb"
	"kakao/platform/services/account/types"

	"github.com/go-openapi/strfmt"
	"github.com/google/uuid"
)

func (c *AccountController) CreateUser(in *pb.User) (*pb.User, error) {
	// check we have an email present
	if in.Email == "" {
		return nil, fmt.Errorf("controller error: no email specified in CreateUser")
	}

	// is email valid?
	if !strfmt.IsEmail(in.Email) {
		return nil, fmt.Errorf("controoler error: invalid email specified in CreateUser")
	}

	// geenerate a new ID
	userID := uuid.New()

	// convert to type
	userIn := &types.User{}
	if err := pbjson.FromProto(in, userIn); err != nil {
		return nil, fmt.Errorf("controller error: %s", err.Error())
	}

	userIn.ID = userID

	//TODO - salt password

	// call method
	user, err := c.r.CreateUser(userIn)
	if err != nil {
		return nil, err
	}

	userOut := &pb.User{}
	if err := pbjson.ToProto(user, userOut); err != nil {
		return nil, fmt.Errorf("controller error: %s", err.Error())
	}

	return userOut, nil
}
