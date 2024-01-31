package repository

import (
	"fmt"
	"kakao/platform/services/account/interfaces"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type AccountRepository struct {
	interfaces.Repository
	db *sqlx.DB
}

func NewAccountRepository() (*AccountRepository, error) {
	fmt.Println("repository.startup.go")
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
		return nil, fmt.Errorf("no .env for POSTGRES_USER ")
	}

	dbPass, exists := os.LookupEnv("POSTGRES_PASSWORD")
	if !exists {
		return nil, fmt.Errorf("no .env for POSTGRES_PASSWORD")
	}

	dbData, exists := os.LookupEnv("ACCOUNT_DB")
	if !exists {
		return nil, fmt.Errorf("no .env for KAKAO_ACCOUNT_DB")
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=UTC", dbHost, dbUser, dbPass, dbData, dbPort)
	fmt.Println(dsn)

	db, err := sqlx.Connect("postgres", dsn)
	if err != nil {
		return nil, fmt.Errorf(err.Error())
	}

	// check if connection is valid
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("error pinging db")
	}

	repo := &AccountRepository{
		db: db,
	}

	return repo, nil

}

func (r *AccountRepository) Close() {
	if r.db != nil {
		r.db.Close()
	}
}
