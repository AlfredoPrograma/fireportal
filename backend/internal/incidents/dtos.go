package incidents

import "time"

type IncidentType string

const (
	WILDFIRE       IncidentType = "WILDFIRE"
	STRUCTURE_FIRE IncidentType = "STRUCTURE_FIRE"
	OTHER          IncidentType = "OTHER"
)

type Incident struct {
	Id           int          `json:"id"`
	Title        string       `json:"title"`
	Description  string       `json:"description"`
	Location     string       `json:"location"`
	Image        string       `json:"image"`
	IncidentType IncidentType `json:"incident_type"`
	CreatedAt    time.Time    `json:"created_at"`
}

type CreateIncidentDTO struct {
	Title        string       `json:"title"`
	Description  string       `json:"description"`
	Location     string       `json:"location"`
	Image        string       `json:"image"`
	IncidentType IncidentType `json:"incident_type"`
}
