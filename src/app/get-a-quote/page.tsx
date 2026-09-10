import type { Metadata } from 'next'
import GetAQuoteClient from './quote-client'

export const metadata: Metadata = {
  title: 'Request a Bid | Pro-Line Builders',
  description:
    'Upload your plans and get a fast, detailed pricing response. Commercial and multi-family projects from $50K to $10M+ across Florida.',
}

export default function Page() {
  return <GetAQuoteClient />
}
