package incidents

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type Controller interface {
	GetIncidents(c echo.Context) error
	CreateIncident(c echo.Context) error
}

type controller struct {
	incidentsService Service
}

func (ctrl controller) CreateIncident(c echo.Context) error {
	panic("unimplemented")
}

func (ctrl controller) GetIncidents(c echo.Context) error {
	incidents, err := ctrl.incidentsService.GetIncidents(c.Request().Context())

	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, incidents)
}

func NewController(incidentsService Service) Controller {
	return controller{incidentsService: incidentsService}
}
