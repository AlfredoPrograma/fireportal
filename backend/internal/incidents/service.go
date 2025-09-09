package incidents

import (
	"context"
)

type Service interface {
	GetIncidents(ctx context.Context) ([]Incident, error)
	CreateIncident(ctx context.Context, data CreateIncidentDTO) error
}

type service struct {
}

func (i service) CreateIncident(ctx context.Context, data CreateIncidentDTO) error {
	panic("unimplemented")
}

func (i service) GetIncidents(ctx context.Context) ([]Incident, error) {
	panic("unimplemented")
}

func NewService() Service {
	return service{}
}
