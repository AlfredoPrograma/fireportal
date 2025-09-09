package incidents

import (
	"time"
)

type IncidentType string

const (
	WILDFIRE       IncidentType = "WILDFIRE"
	STRUCTURE_FIRE IncidentType = "STRUCTURE_FIRE"
	OTHER          IncidentType = "OTHER"
)

type Incident struct {
	Id           int          `json:"id"`
	Title        string       `json:"title"`
	Description  *string      `json:"description,omitempty"`
	Location     *string      `json:"location,omitempty"`
	Image        *string      `json:"image,omitempty"`
	IncidentType IncidentType `json:"incidentType"`
	CreatedAt    time.Time    `json:"createdAt"`
}

type CreateIncidentDTO struct {
	Title        string       `json:"title"`
	IncidentType IncidentType `json:"incidentType"`
	Description  string       `json:"description"`
	Location     string       `json:"location"`
	Image        string       `json:"image"`
}
