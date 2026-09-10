import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const services = [
    { label: 'Roofing', href: '/services/roofing' },
    { label: 'General Contracting', href: '/services/general-contracting' },
    { label: 'Exterior Renovations', href: '/services/exterior-renovations' },
    { label: 'Drone Roof Surveys', href: '/services/drone-roof-surveys' },
    { label: 'Project Management', href: '/services/project-management' },
    { label: 'Interior & Finishes', href: '/services/interior-finishes' },
  ]

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Projects', href: '/projects' },
    { label: 'Get a Quote', href: '/get-a-quote' },
  ]

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <img src="/logo.jpg" alt="Pro-Line Builders" className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Family-owned general contracting for Florida's commercial and multi-family sector. Licensed CGC & CCC.
            </p>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <MapPin className="w-4 h-4 text-blue-400" />
              Florida — Serving Statewide
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-100 hover:text-white text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-blue-100 hover:text-white text-sm transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:9544480298" className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  (954) 448-0298
                </a>
              </li>
              <li>
                <a href="mailto:pete@prolinebuilders.com" className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  pete@prolinebuilders.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-blue-900/50 border border-blue-800 rounded-sm p-4">
              <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">Contract Range</p>
              <p className="text-white font-bold">$50K – $10M+</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-xs">© 2026 Pro-Line Builders, LLC. All Rights Reserved. Licensed: CGC #051937 · CCC #1327345</p>
          <div className="flex items-center gap-6">
            <a href="tel:9544480298" className="text-blue-300 hover:text-white text-xs transition-colors">(954) 448-0298</a>
            <a href="mailto:pete@prolinebuilders.com" className="text-blue-300 hover:text-white text-xs transition-colors">pete@prolinebuilders.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
