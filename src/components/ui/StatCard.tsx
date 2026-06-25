interface StatCardProps {
  title: string
  value: string
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

export function StatCard({ title, value, subtitle, trend, trendValue }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      {(subtitle || trendValue) && (
        <div className="mt-1 flex items-center gap-2">
          {trend && trendValue && (
            <span
              className={`text-xs font-medium ${
                trend === 'up'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : trend === 'down'
                  ? 'text-red-500 dark:text-red-400'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—'} {trendValue}
            </span>
          )}
          {subtitle && <p className="text-xs text-gray-400 dark:text-gray-500">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}
