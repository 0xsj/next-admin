package repository

import (
	"fmt"
	"kakao/platform/services/account/interfaces"
	"os"

	"github.com/jmoiron/sqlx"
)

type AccountRepository struct {
	interfaces.Repository
	db *sqlx.DB
}

func NewAccountRepository() (*AccountRepository, error) {
	dbHost, exists := os.LookupEnv("POSTGRES_HOST")
	if !exists {
		return nil, fmt.Errorf("no .env for POSTGRES_HOST")
	}

	dbPort, exists := os.LookupEnv("POSTGRES_PORT")
	if !exists {
		return nil, fmt.Errorf("no .env for POSTGRES_PORT")
	}

	dbUser, exists := os.LookupEnv("POSTGRES_USER")
	if !exists {
		return nil, fmt.Errorf("no .env for PSOETGRES_USER ")
	}

	dbPass, exists := os.LookupEnv("POSTGRES_PASSWORD")
	if !exists {
		return nil, fmt.Errorf("no .env for POSTGRES_PASSWORD")
	}

	dbData, exists := os.LookupEnv("KAKAO_ACCOUNT_DB")
	if !exists {
		return nil, fmt.Errorf("no .env for KAKA_ACCOUNT_DB")
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=UTC", dbHost, dbUser, dbPass, dbData, dbPort)

	db, err := sqlx.Connect("postgres", dsn)
	if err != nil {
		return nil, fmt.Errorf(err.Error())
	}

	// if _, err := db.Exec()

	repo := &AccountRepository{
		db: db,
	}

	return repo, nil

}