import type { IncidentType } from '@/types/incidents'
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
import { useGetIncidents } from '@/hooks/incidents'

export function IncidentsTable() {
  const { data } = useGetIncidents()
  const incidents = data?.data.data ?? []

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
