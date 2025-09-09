import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IncidentsView } from '@/views/IncidentsView'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IncidentsView />
    </QueryClientProvider>
  )
}
