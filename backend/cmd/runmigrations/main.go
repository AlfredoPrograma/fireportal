package main

import (
	"io/fs"
	"log"
	"os"
	"path/filepath"

	"github.com/alfredoprograma/fireportal/bootstrap"
)

// main is the entry point of the migration runner application.
// It loads environment variables, connects to the database, and executes all SQL migration files
// found in the specified migrations folder. Each migration file is read and executed in order.
// If any file cannot be read or executed, the application logs the error and terminates.
func main() {
	env := bootstrap.LoadEnv()
	db := bootstrap.ConnectDB(env.DbDriver, env.DbConnectionString)

	filepath.WalkDir(env.MigrationsFolder, func(path string, d fs.DirEntry, _ error) error {
		if d.IsDir() {
			return nil
		}

		migration, err := os.ReadFile(path)

		if err != nil {
			log.Printf("cannot read migration file %s\n", d.Name())
			log.Fatalln(err)
		}

		_, err = db.Exec(string(migration))

		if err != nil {
			log.Printf("cannot run migration file %s\n", d.Name())
			log.Fatalln(err)
		}

		log.Printf("migration %s sucessful\n", d.Name())

		return nil
	})

	defer db.Close()
}
