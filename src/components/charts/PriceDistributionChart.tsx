import { useMemo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { PropertyListing } from '../../hooks/useListings'
import { useTheme } from '../../context/ThemeContext'

interface Props {
  listings: PropertyListing[]
}

const BUCKETS = [
  { label: '<$500k',    min: 0,         max: 500_000 },
  { label: '$500–600k', min: 500_000,   max: 600_000 },
  { label: '$600–700k', min: 600_000,   max: 700_000 },
  { label: '$700–800k', min: 700_000,   max: 800_000 },
  { label: '$800k–1M',  min: 800_000,   max: 1_000_000 },
  { label: '>$1M',      min: 1_000_000, max: Infinity },
]

export function PriceDistributionChart({ listings }: Props) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const gridColor    = dark ? '#374151' : '#f3f4f6'
  const tickColor    = dark ? '#9ca3af' : '#9ca3af'
  const tooltipStyle = {
    fontSize: 12,
    borderRadius: 8,
    border: `1px solid ${dark ? '#374151' : '#e5e7eb'}`,
    background: dark ? '#1f2937' : '#ffffff',
    color: dark ? '#f9fafb' : '#111827',
  }

  const bucketData = useMemo(
    () =>
      BUCKETS.map((b) => ({
        label: b.label,
        count: listings.filter((l) => l.price >= b.min && l.price < b.max).length,
      })),
    [listings]
  )

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
        Listings by Price Range
      </h2>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={bucketData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: tickColor }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: tickColor }}
              tickLine={false}
              axisLine={false}
              width={28}
              allowDecimals={false}
            />
            <Tooltip
              formatter={(value) => [Number(value), 'Properties']}
              contentStyle={tooltipStyle}
              labelStyle={{ fontWeight: 600 }}
              cursor={{ fill: dark ? '#374151' : '#f5f3ff' }}
            />
            <Bar dataKey="count" fill="#8b5cf6" radius={[3, 3, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
