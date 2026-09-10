import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact Us | Pro-Line Builders',
  description:
    'Reach Pro-Line Builders for your commercial or multi-family project. Florida — serving the entire state. Response within 24 hours.',
}

export default function Page() {
  return <ContactClient />
}
