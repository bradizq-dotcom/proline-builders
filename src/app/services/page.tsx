import type { Metadata } from 'next'
import ServicesClient from './services-client'

export const metadata: Metadata = {
  title: 'Our Services | Pro-Line Builders',
  description:
    "Roofing, exterior renovations, interior finishes, general contracting, drone roof surveys, and project management for Florida's commercial and multi-family sector. $50K–$10M+ projects.",
}

export default function Page() {
  return <ServicesClient />
}
