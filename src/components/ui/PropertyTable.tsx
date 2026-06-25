import { useState } from 'react'
import type { PropertyListing } from '../../hooks/useListings'

interface Props {
  listings: PropertyListing[]
}

type SortKey = 'price' | 'daysOnMarket' | 'listDate' | 'neighborhood'
type SortDir = 'asc' | 'desc'

const fmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const STATUS_CLASSES: Record<PropertyListing['status'], string> = {
  Active:  'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  Pending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  Sold:    'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
}

export function PropertyTable({ listings }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('listDate')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const sorted = [...listings].sort((a, b) => {
    const av: string | number = a[sortKey]
    const bv: string | number = b[sortKey]
    if (typeof av === 'string' && typeof bv === 'string') {
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    }
    return sortDir === 'asc' ? (av as number) - (bv as number) : (bv as number) - (av as number)
  })

  function SortIcon({ col }: { col: SortKey }) {
    if (col !== sortKey) return <span className="ml-1 text-gray-300 dark:text-gray-600">↕</span>
    return <span className="ml-1 text-blue-500 dark:text-blue-400">{sortDir === 'asc' ? '↑' : '↓'}</span>
  }

  function Th({ col, label }: { col: SortKey; label: string }) {
    return (
      <th
        className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer select-none hover:text-gray-800 dark:hover:text-gray-200 whitespace-nowrap"
        onClick={() => handleSort(col)}
      >
        {label}
        <SortIcon col={col} />
      </th>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Current Listings
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Address
              </th>
              <Th col="neighborhood" label="Neighborhood" />
              <Th col="price" label="List Price" />
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Beds / Baths
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Sq Ft
              </th>
              <Th col="daysOnMarket" label="DOM" />
              <Th col="listDate" label="List Date" />
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
            {sorted.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                  {l.address}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{l.neighborhood}</td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium whitespace-nowrap">
                  {fmt.format(l.price)}
                  {l.soldPrice && (
                    <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">
                      sold {fmt.format(l.soldPrice)}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {l.bedrooms} bd / {l.bathrooms} ba
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {l.sqft.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">{l.daysOnMarket}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">{l.listDate}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_CLASSES[l.status]}`}>
                    {l.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
