import type { Metadata } from 'next'
import ExteriorRenovationsClient from './exterior-renovations-client'

export const metadata: Metadata = {
  title: 'Exterior Renovations | Pro-Line Builders',
  description:
    'Siding, exterior paint, windows, and trim for Florida multi-family and commercial properties — phased for occupied buildings.',
}

export default function Page() {
  return <ExteriorRenovationsClient />
}
