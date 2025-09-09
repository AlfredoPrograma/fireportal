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
