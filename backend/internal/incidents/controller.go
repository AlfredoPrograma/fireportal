package incidents

import (
	"log"
	"net/http"

	"github.com/alfredoprograma/fireportal/internal/httputils"
	"github.com/labstack/echo/v4"
)

const controllerRepoName = "[INCIDENTS CONTROLLER]"

type Controller interface {
	GetIncidents(c echo.Context) error
	CreateIncident(c echo.Context) error
}

type controller struct {
	incidentsService Service
}

func (ctrl controller) CreateIncident(c echo.Context) error {
	var data CreateIncidentDTO

	if err := c.Bind(&data); err != nil {
		log.Printf("%s: cannot bind incoming body to CreateIncidentDTO struct", controllerRepoName)
		log.Println(err)
		return echo.NewHTTPError(http.StatusBadRequest, "invalid payload")
	}

	if err := ctrl.incidentsService.CreateIncident(c.Request().Context(), data); err != nil {
		return err
	}

	return c.NoContent(http.StatusCreated)
}

func (ctrl controller) GetIncidents(c echo.Context) error {
	incidents, err := ctrl.incidentsService.GetIncidents(c.Request().Context())

	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, httputils.APIResponse[[]Incident]{
		Data: incidents,
	})
}

func NewController(incidentsService Service) Controller {
	return controller{incidentsService: incidentsService}
}
