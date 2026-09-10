import type { Metadata } from 'next'
import RoofingClient from './roofing-client'

export const metadata: Metadata = {
  title: 'Commercial Roofing Contractors Florida | Pro-Line Builders',
  description:
    'Multi-building apartment and commercial re-roofing across Florida. Shingle, tile, TPO, flat, modified bitumen. Licensed CCC #1327345.',
}

export default function Page() {
  return <RoofingClient />
}
