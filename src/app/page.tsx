import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Pro-Line Builders | Commercial & Multi-Family General Contractors Florida',
  description:
    "Roofing, general contracting, and project management for Florida's commercial and multi-family sector. Licensed CGC #051937 & CCC #1327345. $50K–$10M+ projects.",
}

export default function Page() {
  return <HomeClient />
}
