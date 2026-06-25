import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface Props {
  targetId: string
}

export function PdfExportButton({ targetId }: Props) {
  const [exporting, setExporting] = useState(false)

  async function handleExport() {
    const el = document.getElementById(targetId)
    if (!el) return

    setExporting(true)

    const root = document.documentElement
    const wasDark = root.classList.contains('dark')

    try {
      // Always capture in light mode to save ink regardless of current theme
      if (wasDark) root.classList.remove('dark')

      // One animation frame lets the browser recompute CSS before html2canvas reads styles
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()

      // 8 mm margin on every side of every page
      const margin = 8
      const usableW = pageW - margin * 2
      const usableH = pageH - margin * 2
      const imgH = (canvas.height * usableW) / canvas.width

      let remaining = imgH
      let page = 0

      while (remaining > 0) {
        if (page > 0) pdf.addPage()
        // Offset the image up by one usableH per subsequent page so the next
        // slice is visible within the top/bottom margins
        pdf.addImage(imgData, 'PNG', margin, margin - page * usableH, usableW, imgH)
        remaining -= usableH
        page++
      }

      pdf.save('real-estate-dashboard.pdf')
    } finally {
      if (wasDark) root.classList.add('dark')
      setExporting(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      title="Download PDF"
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {exporting ? (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Exporting…
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </>
      )}
    </button>
  )
}
