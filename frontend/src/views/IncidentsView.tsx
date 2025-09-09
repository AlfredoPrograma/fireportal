import { Navbar } from '@/components/Navbar'

export function IncidentsView() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />

      <main className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>
        <h2 className='text-2xl font-bold mb-4'>Incidents</h2>
      </main>
    </div>
  )
}
