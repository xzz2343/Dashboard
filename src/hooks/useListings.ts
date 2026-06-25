import { useQuery } from '@tanstack/react-query'
import { mockListings } from '../data/mockListings'

export type { PropertyListing } from '../data/mockListings'

const fetchListings = () =>
  new Promise<typeof mockListings>((resolve) =>
    setTimeout(() => resolve(mockListings), 300)
  )

export function useListings() {
  return useQuery({
    queryKey: ['listings'],
    queryFn: fetchListings,
  })
}
