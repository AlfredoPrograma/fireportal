package incidents

import (
	"context"
)

type Service interface {
	GetIncidents(ctx context.Context) ([]Incident, error)
	CreateIncident(ctx context.Context, data CreateIncidentDTO) error
}

type service struct {
	incidentsRepo Repository
}

func (i service) CreateIncident(ctx context.Context, data CreateIncidentDTO) error {
	panic("unimplemented")
}

func (i service) GetIncidents(ctx context.Context) ([]Incident, error) {
	return i.incidentsRepo.GetIncidents(ctx)
}

func NewService(incidentsRepo Repository) Service {
	return service{incidentsRepo: incidentsRepo}
}
