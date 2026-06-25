import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { MonthlyMetric } from '../../hooks/useMonthlyMetrics'
import { useTheme } from '../../context/ThemeContext'

interface Props {
  data: MonthlyMetric[]
}

export function DaysOnMarketChart({ data }: Props) {
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
        Avg Days on Market
      </h2>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: tickColor }}
              interval={3}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(v: number) => `${v}d`}
              tick={{ fontSize: 11, fill: tickColor }}
              tickLine={false}
              axisLine={false}
              width={36}
              domain={[0, 'auto']}
            />
            <Tooltip
              formatter={(value) => [`${Number(value)} days`, 'Avg DOM']}
              contentStyle={tooltipStyle}
              labelStyle={{ fontWeight: 600 }}
            />
            <Line
              type="monotone"
              dataKey="avgDaysOnMarket"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
