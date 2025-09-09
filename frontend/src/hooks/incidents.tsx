import { createIncident, getIncidents } from '@/services/incidents'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

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
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: INCIDENTS_QUERY_KEY })
  })
}
