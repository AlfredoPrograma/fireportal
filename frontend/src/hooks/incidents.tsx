import { createIncident, getIncidents } from '@/services/incidents'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

const INCIDENTS_QUERY_KEY = ['INCIDENTS']

export function useGetIncidents() {
  return useQuery({
    queryKey: INCIDENTS_QUERY_KEY,
    queryFn: getIncidents
  })
}

export function useCreateIncident() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createIncident,
    onSuccess: () => {
      toast.success(
        'Incident created successfully! Form keeps open for creating more incidents.',
        {
          position: 'top-center'
        }
      )
      queryClient.invalidateQueries({ queryKey: INCIDENTS_QUERY_KEY })
    },
    onError: () => {
      toast.error('Failed to create incident. Please try again later.', {
        position: 'top-center'
      })
    }
  })
}
