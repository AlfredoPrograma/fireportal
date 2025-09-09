package bootstrap

import (
	"log"

	"github.com/spf13/viper"
)

// Env holds the configuration values loaded from environment variables.
type Env struct {
	ApiPort            int    `mapstructure:"API_PORT"`
	DbConnectionString string `mapstructure:"DB_CONNECTION_STRING"`
	DbDriver           string `mapstructure:"DB_DRIVER"`
	MigrationsFolder   string `mapstructure:"MIGRATIONS_FOLDER"`
}

// LoadEnv loads environment variables from a .env file using Viper,
// unmarshals them into an Env struct, and returns the populated Env.
// If the .env file cannot be read or unmarshaled, the function logs the error and terminates the application.
func LoadEnv() Env {
	viper.SetConfigFile(".env")

	if err := viper.ReadInConfig(); err != nil {
		log.Println("cannot read environment variables from .env file")
		log.Fatalln(err)
	}

	var env Env

	if err := viper.Unmarshal(&env); err != nil {
		log.Println("cannot unmarshal environment variables in to Env struct")
		log.Fatalln(err)
	}

	return env
}
