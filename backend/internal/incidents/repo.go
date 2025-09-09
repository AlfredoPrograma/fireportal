package incidents

import (
	"context"
	"database/sql"
	"log"
)

const repoLoggerName = "[INCIDENTS_REPO]"

type Repository interface {
	GetIncidents(ctx context.Context) ([]Incident, error)
	CreateIncident(ctx context.Context, data CreateIncidentDTO) error
}

type repository struct {
	db *sql.DB
}

func (r repository) CreateIncident(ctx context.Context, data CreateIncidentDTO) error {
	panic("unimplemented")
}

func (r repository) GetIncidents(ctx context.Context) ([]Incident, error) {
	var incidents []Incident
	query := `SELECT id, title, incident_type, description, location, image, created_at FROM incidents ORDER BY created_at;`
	rows, err := r.db.QueryContext(ctx, query)

	if err != nil {
		log.Printf("%s: get incidents query failed\n", repoLoggerName)
		log.Println(err)
		return nil, err
	}

	for rows.Next() {
		var incident Incident

		if err := rows.Scan(
			&incident.Id,
			&incident.Title,
			&incident.IncidentType,
			&incident.Description,
			&incident.Location,
			&incident.Image,
			&incident.CreatedAt,
		); err != nil {
			log.Printf("%s: scanning rows failed\n", repoLoggerName)
			log.Println(err)
			return nil, err
		}

		incidents = append(incidents, incident)
	}

	return incidents, nil
}

func NewRepository(db *sql.DB) Repository {
	return repository{db: db}
}
