import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { MonthlyMetric } from '../../hooks/useMonthlyMetrics'
import { useTheme } from '../../context/ThemeContext'

const fmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

interface Props {
  data: MonthlyMetric[]
}

export function PriceHistoryChart({ data }: Props) {
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
        Median Home Price
      </h2>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: tickColor }}
              interval={3}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
              tick={{ fontSize: 11, fill: tickColor }}
              tickLine={false}
              axisLine={false}
              domain={['auto', 'auto']}
              width={48}
            />
            <Tooltip
              formatter={(value) => [fmt.format(Number(value)), 'Median Price']}
              contentStyle={tooltipStyle}
              labelStyle={{ fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="medianPrice"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
