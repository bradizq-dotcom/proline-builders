import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

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
        {/* Sticky mobile CTA bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-blue-700 border-t-4 border-blue-900 z-50 flex items-center justify-between px-4 py-3 md:hidden shadow-lg">
          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">Ready to start?</p>
            <p className="text-sm font-bold">Get a free bid →</p>
          </div>
          <Link href="/get-a-quote"
            className="bg-white text-blue-700 font-bold text-xs px-5 py-3 rounded-sm uppercase tracking-wider hover:bg-blue-50 transition-colors">
            Request Bid
          </Link>
        </div>
      </body>
    </html>
  )
}
