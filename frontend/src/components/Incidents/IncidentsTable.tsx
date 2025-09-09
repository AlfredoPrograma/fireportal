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
import { LoadingSpinner } from '../LoadingSpinner'
import { ErrorAlert } from '../ErrorAlert'
import { dateFormatter } from '@/lib/dates'

export function IncidentsTable() {
  const { data: response, isLoading, isError, isSuccess } = useGetIncidents()
  const incidents = response?.data.data ?? []

  const badgeRenderer = {
    WILDFIRE: <Badge variant='default'>Wildfire</Badge>,
    STRUCTURE_FIRE: <Badge variant='secondary'>Structure Fire</Badge>,
    OTHER: <Badge variant='outline'>Other</Badge>
  } satisfies Record<IncidentType, ReactNode>

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <ErrorAlert message='Failed to load incidents. Try refreshing the page or contact with the support team.' />
      )}
      {isSuccess && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className='text-lg font-bold'>Title</TableHead>
              <TableHead className='text-lg font-bold'>Description</TableHead>
              <TableHead className='text-lg font-bold'>Type</TableHead>
              <TableHead className='text-lg font-bold'>Location</TableHead>
              <TableHead className='text-lg font-bold'>Created at</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {incidents.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className='text-center'
                >
                  No incidents found.
                </TableCell>
              </TableRow>
            )}

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
                <TableCell className='max-w-xs truncate'>
                  {incident.description}
                </TableCell>
                <TableCell>{badgeRenderer[incident.incidentType]}</TableCell>
                <TableCell className='max-w-xs truncate'>
                  {incident.location}
                </TableCell>
                <TableCell>
                  {dateFormatter.format(new Date(incident.createdAt))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}
