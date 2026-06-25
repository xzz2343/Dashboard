import { useMonthlyMetrics } from '../hooks/useMonthlyMetrics'
import { useListings } from '../hooks/useListings'
import { StatCard } from './ui/StatCard'
import { PropertyTable } from './ui/PropertyTable'
import { ThemeToggle } from './ui/ThemeToggle'
import { PdfExportButton } from './ui/PdfExportButton'
import { PriceHistoryChart } from './charts/PriceHistoryChart'
import { SalesVolumeChart } from './charts/SalesVolumeChart'
import { DaysOnMarketChart } from './charts/DaysOnMarketChart'
import { PriceDistributionChart } from './charts/PriceDistributionChart'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export default function Dashboard() {
  const { data: metrics, isPending: metricsPending } = useMonthlyMetrics()
  const { data: listings, isPending: listingsPending } = useListings()

  if (metricsPending || listingsPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading market data…</p>
        </div>
      </div>
    )
  }

  const latestMonth  = metrics?.at(-1)
  const safeListings = listings ?? []
  const avgPrice     = safeListings.length > 0
    ? safeListings.reduce((sum, l) => sum + l.price, 0) / safeListings.length
    : 0
  const avgDom       = safeListings.length > 0
    ? safeListings.reduce((sum, l) => sum + l.daysOnMarket, 0) / safeListings.length
    : 0

  return (
    <div id="dashboard-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Real Estate Market Dashboard
          </h1>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            Seattle Metro • {latestMonth?.month}
          </span>
        </div>
        <div data-html2canvas-ignore="true" className="flex items-center gap-1">
          <PdfExportButton targetId="dashboard-content" />
          <ThemeToggle />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Avg List Price"
          value={currency.format(avgPrice)}
          subtitle="all active listings"
        />
        <StatCard
          title="Avg Days on Market"
          value={`${Math.round(avgDom)} days`}
          subtitle="current listings"
        />
        <StatCard
          title="Active Listings"
          value={String(latestMonth?.activeListings ?? '—')}
          trend="up"
          trendValue="vs prior month"
        />
        <StatCard
          title="Units Sold"
          value={String(latestMonth?.unitsSold ?? '—')}
          subtitle={latestMonth?.month}
        />
      </div>

      {/* Chart Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PriceHistoryChart data={metrics ?? []} />
        <SalesVolumeChart data={metrics ?? []} />
      </div>

      {/* Chart Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DaysOnMarketChart data={metrics ?? []} />
        <PriceDistributionChart listings={safeListings} />
      </div>

      {/* Listings Table */}
      <PropertyTable listings={safeListings} />
    </div>
  )
}

