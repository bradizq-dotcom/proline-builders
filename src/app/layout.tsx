import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pro-Line Builders | Commercial & Multi-Family General Contractors Florida',
  description: 'Family-owned general contracting serving Florida. Specializing in $200K–$10M+ commercial, multi-family, and apartment projects. Roofing, general contracting, and project management.',
  keywords: 'commercial contractor Florida, multi-family contractor, apartment roofing, general contractor Florida, CGC CCC licensed',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
