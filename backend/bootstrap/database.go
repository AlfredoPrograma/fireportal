package bootstrap

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func ConnectDB(driver string, connString string) *sql.DB {
	db, err := sql.Open(driver, connString)

	if err != nil {
		log.Printf("cannot connect to database with driver %s and connection string %s\n", driver, connString)
		log.Fatalln(err)
	}

	return db
}
