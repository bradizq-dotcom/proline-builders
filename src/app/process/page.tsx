import type { Metadata } from 'next'
import ProcessClient from './process-client'

export const metadata: Metadata = {
  title: 'Our Process | Pro-Line Builders',
  description:
    'From site visit to closeout: how Pro-Line Builders delivers commercial and multi-family projects — permitting, execution, inspections, and handover.',
}

export default function Page() {
  return <ProcessClient />
}
