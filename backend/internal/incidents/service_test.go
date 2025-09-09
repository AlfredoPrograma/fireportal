package incidents

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/alfredoprograma/fireportal/internal/dbutils"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type IncidentsRepoMock struct {
	mock.Mock
}

func (i *IncidentsRepoMock) CreateIncident(ctx context.Context, data CreateIncidentDTO) error {
	args := i.Called(ctx, data)
	return args.Error(0)
}

func (i *IncidentsRepoMock) GetIncidents(ctx context.Context) ([]Incident, error) {
	args := i.Called(ctx)
	return args.Get(0).([]Incident), args.Error(1)
}

func SetupTest() (Service, *IncidentsRepoMock) {
	incidentsRepoMock := new(IncidentsRepoMock)
	incidentsService := NewService(incidentsRepoMock)

	return incidentsService, incidentsRepoMock
}

func TestIncidentsService(t *testing.T) {
	t.Run("GetIncidents", func(t *testing.T) {
		t.Run("should return a list of incidents", func(t *testing.T) {
			incidentsService, incidentsRepoMock := SetupTest()
			ctx := context.Background()

			stubIncidents := []Incident{
				{
					Id:           1,
					Title:        "Fire incident",
					Description:  dbutils.PtrString("A fireful incidental"),
					Location:     dbutils.PtrString("Miami beach"),
					Image:        dbutils.PtrString("/imageurl"),
					IncidentType: WILDFIRE,
					CreatedAt:    time.Now(),
				},
				{
					Id:           2,
					Title:        "Structure incident",
					Description:  nil,
					Location:     nil,
					Image:        nil,
					IncidentType: STRUCTURE_FIRE,
					CreatedAt:    time.Now(),
				},
			}

			incidentsRepoMock.On("GetIncidents", ctx).Return(stubIncidents, nil)

			incidents, err := incidentsService.GetIncidents(ctx)

			assert.Equal(t, stubIncidents, incidents)
			assert.NoError(t, err)
			incidentsRepoMock.AssertExpectations(t)
		})

		t.Run("should return an error if cannot get incidents", func(t *testing.T) {
			incidentsService, incidentsRepoMock := SetupTest()
			ctx := context.Background()

			incidentsRepoMock.On("GetIncidents", ctx).Return([]Incident{}, errors.New("repo listing error"))

			incidents, err := incidentsService.GetIncidents(ctx)

			assert.Equal(t, []Incident{}, incidents)
			assert.Error(t, err)
			incidentsRepoMock.AssertExpectations(t)
		})
	})

	t.Run("CreateIncident", func(t *testing.T) {
		t.Run("should create a new incident successfully", func(t *testing.T) {
			incidentsService, incidentsRepoMock := SetupTest()
			ctx := context.Background()

			incidentDTOStub := CreateIncidentDTO{
				Title:        "Fire report",
				IncidentType: OTHER,
				Description:  "A random fire report",
				Location:     "Miami Beach",
				Image:        "/imageurl",
			}

			incidentsRepoMock.On("CreateIncident", ctx, incidentDTOStub).Return(nil)

			err := incidentsService.CreateIncident(ctx, incidentDTOStub)

			assert.NoError(t, err)
			incidentsRepoMock.AssertExpectations(t)
		})

		t.Run("should return an error on failed incident creation", func(t *testing.T) {
			incidentsService, incidentsRepoMock := SetupTest()
			ctx := context.Background()

			incidentDTOStub := CreateIncidentDTO{
				Title:        "Fire report",
				IncidentType: OTHER,
				Description:  "A random fire report",
				Location:     "Miami Beach",
				Image:        "/imageurl",
			}

			incidentsRepoMock.On("CreateIncident", ctx, incidentDTOStub).Return(errors.New("repo creation error"))

			err := incidentsService.CreateIncident(ctx, incidentDTOStub)

			assert.Error(t, err)
			incidentsRepoMock.AssertExpectations(t)
		})

	})
}
