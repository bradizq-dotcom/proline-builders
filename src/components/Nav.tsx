'use client'
import { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ]

  const services = [
    { label: 'Roofing', href: '/services/roofing' },
    { label: 'General Contracting', href: '/services/general-contracting' },
    { label: 'Project Management', href: '/services/project-management' },
    { label: 'Interior & Finishes', href: '/services/interior-finishes' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Pro-Line Builders" className="h-14 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map(l => (
            l.hasDropdown ? (
              <div key={l.href} className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-slate-700 hover:text-blue-700'}`}>
                  {l.label} <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-sm py-2 min-w-[200px]">
                    {services.map(s => (
                      <Link key={s.href} href={s.href}
                        className="block px-5 py-2.5 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={l.href} href={l.href}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${scrolled ? 'text-blue-900 hover:text-blue-600' : 'text-slate-700 hover:text-blue-700'}`}>
                {l.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/get-a-quote"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:7276422953"
            className={`flex items-center gap-2 font-semibold text-sm transition-colors ${scrolled ? 'text-blue-900' : 'text-slate-700'}`}>
            <Phone className="w-4 h-4" /> (727) 642-2953
          </a>
        </div>

        <button className={`lg:hidden ${scrolled ? 'text-blue-900' : 'text-slate-700'}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-1">
          {navLinks.map(l => (
            l.hasDropdown ? (
              <div key={l.href}>
                <button className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-700 font-semibold uppercase tracking-wider text-sm">
                  {l.label}
                </button>
                <div className="pl-6 space-y-1">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                      className="block py-2 text-slate-500 hover:text-blue-700 text-sm">{s.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-slate-700 hover:text-blue-700 font-semibold uppercase tracking-wider text-sm">
                {l.label}
              </Link>
            )
          ))}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <Link href="/get-a-quote" onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-blue-700 text-white font-bold py-3 rounded-sm text-sm uppercase tracking-wider mb-3">
              Get a Quote
            </Link>
            <a href="tel:7276422953" className="flex items-center justify-center gap-2 text-slate-700 font-semibold text-sm">
              <Phone className="w-4 h-4" /> (727) 642-2953
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
