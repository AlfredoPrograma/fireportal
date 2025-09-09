import { IncidentsCard } from '@/components/Incidents/IncidentsCard'
import { Navbar } from '@/components/Navbar'

export function IncidentsView() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />

      <main className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>
        <IncidentsCard />
      </main>
    </div>
  )
}
