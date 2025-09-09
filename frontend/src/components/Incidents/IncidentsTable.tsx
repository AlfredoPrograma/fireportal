import type { Incident, IncidentType } from '@/types/incidents'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import type { ReactNode } from 'react'
import { Badge } from '../ui/badge'

const incidents: Incident[] = [
  {
    title: 'Forest Fire near Lakeview',
    incidentType: 'WILDFIRE',
    description: 'A wildfire spreading rapidly near the lake.',
    location: 'Lakeview National Park',
    id: 1,
    createdAt: new Date()
  },
  {
    title: 'Warehouse Blaze',
    incidentType: 'STRUCTURE_FIRE',
    description: 'Fire broke out in an industrial warehouse.',
    location: 'Downtown Industrial Area',
    id: 2,
    createdAt: new Date()
  },
  {
    title: 'Small Brush Fire',
    incidentType: 'OTHER',
    description: 'Minor brush fire contained quickly.',
    location: 'Hillside Avenue',
    id: 3,
    createdAt: new Date()
  }
]

export function IncidentsTable() {
  const badgeRenderer = {
    WILDFIRE: <Badge variant='default'>Wildfire</Badge>,
    STRUCTURE_FIRE: <Badge variant='secondary'>Structure Fire</Badge>,
    OTHER: <Badge variant='outline'>Other</Badge>
  } satisfies Record<IncidentType, ReactNode>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {incidents.map((incident) => (
          <TableRow key={incident.id}>
            <TableCell>
              <img
                src={
                  incident.image ??
                  'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg'
                }
                alt={incident.title}
                className='w-16 h-16 object-cover'
              />
            </TableCell>
            <TableCell className='font-medium'>{incident.title}</TableCell>
            <TableCell>{incident.description}</TableCell>
            <TableCell>{badgeRenderer[incident.incidentType]}</TableCell>
            <TableCell>{incident.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
