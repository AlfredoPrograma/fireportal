import { Card, CardContent } from '@/components/ui/card'
import { IncidentsTable } from './IncidentsTable'

export function IncidentsCard() {
  return (
    <Card>
      <CardContent>
        <IncidentsTable />
      </CardContent>
    </Card>
  )
}
