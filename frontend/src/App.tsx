import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IncidentsView } from '@/views/IncidentsView'
import { Toaster } from '@/components/ui/sonner'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IncidentsView />
      <Toaster />
    </QueryClientProvider>
  )
}
