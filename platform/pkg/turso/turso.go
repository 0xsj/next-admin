package turso

import (
	// "context"
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/0xsj/kakao/internal/env"
	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

// oepns a new turso client
func NewTursoClient(conf *env.Configuration) {
	// get the env configuration
	get := func(v string) string {
		res, err := conf.Get(v)
		if err != nil {
			log.Fatalf("Couldn't get configuration value for %s: %s", v, err)
		}

		fmt.Println(res)
		return res
	}

	// read the env
	tursoDbUrl := get("TURSO_DB_URL")
	tursoDbName := get("TURSO_DB_NAME")
	tursoAuthToken := get("TURSO_AUTH_TOKEN")

	// libsql://[DATABASE_NAME]-[USERNAME].turso.io?authToken=
	dsn := fmt.Sprintf("libsql://%s-%s.turso.io?authToken=%s", tursoDbName, tursoDbUrl, tursoAuthToken)
	fmt.Println("222222222", dsn)

	db, err := sql.Open("libsql", dsn)
	fmt.Println("11111", err)
	if err != nil {
		// fmt.Fprint(os.Stderr, "failed to open db %s: %s", dsn, err)
		os.Exit(1)
	}

	defer db.Close()

}
