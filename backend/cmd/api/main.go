package main

import (
	"fmt"

	"github.com/alfredoprograma/fireportal/bootstrap"
	"github.com/alfredoprograma/fireportal/internal/incidents"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	env := bootstrap.LoadEnv()
	db := bootstrap.ConnectDB(env.DbDriver, env.DbConnectionString)

	incidentsRepo := incidents.NewRepository(db)
	incidentsService := incidents.NewService(incidentsRepo)
	incidentsController := incidents.NewController(incidentsService)

	e := echo.New()
	e.Use(middleware.AddTrailingSlash())

	apiGroup := e.Group("/api/v1")
	incidentsGroup := apiGroup.Group("/incidents")

	incidentsGroup.GET("", incidentsController.GetIncidents)

	e.Logger.Fatal(
		e.Start(fmt.Sprintf(":%d", env.ApiPort)),
	)
}
