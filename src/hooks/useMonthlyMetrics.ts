import { useQuery } from '@tanstack/react-query'
import { mockMonthlyMetrics } from '../data/mockMonthlyMetrics'

export type { MonthlyMetric } from '../data/mockMonthlyMetrics'

const fetchMonthlyMetrics = () =>
  new Promise<typeof mockMonthlyMetrics>((resolve) =>
    setTimeout(() => resolve(mockMonthlyMetrics), 300)
  )

export function useMonthlyMetrics() {
  return useQuery({
    queryKey: ['monthlyMetrics'],
    queryFn: fetchMonthlyMetrics,
  })
}
