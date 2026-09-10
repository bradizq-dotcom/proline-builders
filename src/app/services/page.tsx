import type { Metadata } from 'next'
import ServicesClient from './services-client'

export const metadata: Metadata = {
  title: 'Our Services | Pro-Line Builders',
  description:
    "Roofing, general contracting, project management, and interior finishes for Florida's commercial and multi-family sector. $50K–$10M+ projects.",
}

export default function Page() {
  return <ServicesClient />
}
