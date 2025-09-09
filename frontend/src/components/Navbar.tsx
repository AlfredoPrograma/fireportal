import { FlameIcon } from 'lucide-react'

export function Navbar() {
  return (
    <header className='bg-primary shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FlameIcon className='size-8 text-secondary' />
            <h1 className='text-xl font-bold text-primary-foreground'>
              Fire Incidents Portal
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
