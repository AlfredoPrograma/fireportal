export type IncidentType = 'WILDFIRE' | 'STRUCTURE_FIRE' | 'OTHER'

export type Incident = {
  id: number
  title: string
  incidentType: IncidentType
  createdAt: Date
  description?: string
  location?: string
  image?: string
}

export type CreateIncidentPayload = {
  title: string
  incidentType: IncidentType
  description?: string
  location?: string
  image?: string 
}