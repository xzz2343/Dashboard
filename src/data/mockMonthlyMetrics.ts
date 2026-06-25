export interface MonthlyMetric {
  month: string
  medianPrice: number
  avgDaysOnMarket: number
  unitsSold: number
  activeListings: number
}

export const mockMonthlyMetrics: MonthlyMetric[] = [
  // 2023 — market softening, then recovery
  { month: 'Jun 2023', medianPrice: 575000, avgDaysOnMarket: 18, unitsSold: 72, activeListings: 298 },
  { month: 'Jul 2023', medianPrice: 582000, avgDaysOnMarket: 14, unitsSold: 81, activeListings: 312 },
  { month: 'Aug 2023', medianPrice: 578000, avgDaysOnMarket: 16, unitsSold: 76, activeListings: 341 },
  { month: 'Sep 2023', medianPrice: 565000, avgDaysOnMarket: 22, unitsSold: 58, activeListings: 355 },
  { month: 'Oct 2023', medianPrice: 552000, avgDaysOnMarket: 31, unitsSold: 44, activeListings: 328 },
  { month: 'Nov 2023', medianPrice: 545000, avgDaysOnMarket: 38, unitsSold: 32, activeListings: 274 },
  { month: 'Dec 2023', medianPrice: 548000, avgDaysOnMarket: 44, unitsSold: 22, activeListings: 189 },

  // 2024 — spring surge, summer plateau, fall dip
  { month: 'Jan 2024', medianPrice: 558000, avgDaysOnMarket: 48, unitsSold: 19, activeListings: 112 },
  { month: 'Feb 2024', medianPrice: 572000, avgDaysOnMarket: 41, unitsSold: 24, activeListings: 128 },
  { month: 'Mar 2024', medianPrice: 595000, avgDaysOnMarket: 28, unitsSold: 38, activeListings: 165 },
  { month: 'Apr 2024', medianPrice: 628000, avgDaysOnMarket: 15, unitsSold: 57, activeListings: 214 },
  { month: 'May 2024', medianPrice: 651000, avgDaysOnMarket: 10, unitsSold: 74, activeListings: 262 },
  { month: 'Jun 2024', medianPrice: 668000, avgDaysOnMarket: 9,  unitsSold: 85, activeListings: 305 },
  { month: 'Jul 2024', medianPrice: 672000, avgDaysOnMarket: 11, unitsSold: 79, activeListings: 318 },
  { month: 'Aug 2024', medianPrice: 665000, avgDaysOnMarket: 14, unitsSold: 71, activeListings: 347 },
  { month: 'Sep 2024', medianPrice: 648000, avgDaysOnMarket: 21, unitsSold: 55, activeListings: 362 },
  { month: 'Oct 2024', medianPrice: 635000, avgDaysOnMarket: 29, unitsSold: 41, activeListings: 334 },
  { month: 'Nov 2024', medianPrice: 624000, avgDaysOnMarket: 37, unitsSold: 28, activeListings: 256 },
  { month: 'Dec 2024', medianPrice: 619000, avgDaysOnMarket: 45, unitsSold: 18, activeListings: 148 },

  // 2025 — inventory-constrained spring surge
  { month: 'Jan 2025', medianPrice: 632000, avgDaysOnMarket: 43, unitsSold: 21, activeListings: 98  },
  { month: 'Feb 2025', medianPrice: 651000, avgDaysOnMarket: 35, unitsSold: 27, activeListings: 118 },
  { month: 'Mar 2025', medianPrice: 672000, avgDaysOnMarket: 22, unitsSold: 44, activeListings: 152 },
  { month: 'Apr 2025', medianPrice: 688000, avgDaysOnMarket: 13, unitsSold: 62, activeListings: 198 },
  { month: 'May 2025', medianPrice: 695000, avgDaysOnMarket: 10, unitsSold: 68, activeListings: 241 },
]
