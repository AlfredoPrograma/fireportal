import { PlusIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { IncidentsTable } from './IncidentsTable'
import { CreateIncidentDialog } from './CreateIncidentDialog'

export function IncidentsCard() {
  return (
    <Card>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-2xl font-bold'>Incidents</CardTitle>
        <CreateIncidentDialog
          trigger={
            <Button variant='default'>
              <PlusIcon />
              Add Incident
            </Button>
          }
        />
      </CardHeader>
      <CardContent>
        <IncidentsTable />
      </CardContent>
    </Card>
  )
}
