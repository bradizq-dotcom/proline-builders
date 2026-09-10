'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'
import { Shield, Building2, ClipboardCheck, PaintRoller, Home, Camera, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    slug: 'roofing',
    icon: Shield,
    title: 'Roofing',
    tagline: 'Complete Roof Systems',
    description:
      'Full re-roofing for commercial and multi-family properties. We specialize in shingle, tile, TPO, and flat roof systems with expert waterproofing and deck protection. Multi-building apartment complexes are our specialty.',
    highlights: [
      'Shingle, tile, TPO & flat roof systems',
      'Waterproofing & deck protection',
      'Multi-building apartment specialists',
      'Licensed & insured installation',
    ],
    href: '/services/roofing',
  },
  {
    slug: 'general-contracting',
    icon: Building2,
    title: 'General Contracting',
    tagline: 'Full-Scope Commercial Construction',
    description:
      'End-to-end commercial and multi-family construction from permit to closeout. New ground-up builds and full renovations handled with precision. We manage every trade so your project stays on time and on budget.',
    highlights: [
      'New construction & renovation',
      'Permit to closeout management',
      'Multi-family & commercial focus',
      '$50K–$5M project expertise',
    ],
    href: '/services/general-contracting',
  },
  {
    slug: 'exterior-renovations',
    icon: Home,
    title: 'Exterior Renovations',
    tagline: 'Building Envelope',
    description:
      'Siding, exterior paint, windows, and trim for multi-family communities and commercial buildings. Full envelope refreshes phased building by building, so occupied properties stay operational while we work.',
    highlights: [
      'Siding replacement & repair',
      'Exterior painting & coatings',
      'Window & trim replacement',
      'Phased for occupied properties',
    ],
    href: '/services/exterior-renovations',
  },
  {
    slug: 'drone-roof-surveys',
    icon: Camera,
    title: 'Drone Roof Surveys',
    tagline: 'Aerial Assessment',
    description:
      'Aerial roof surveys with high-resolution photo documentation. Know exactly what your roofs need — and what they don\u2019t — before you budget the CapEx. The same survey process behind every Pro-Line reroof.',
    highlights: [
      'High-resolution aerial imagery',
      'Photo-documented condition reports',
      'CapEx planning support',
      'Multi-building portfolio coverage',
    ],
    href: '/services/drone-roof-surveys',
  },
  {
    slug: 'project-management',
    icon: ClipboardCheck,
    title: 'Project Management',
    tagline: 'End-to-End Oversight',
    description:
      'We handle every detail of your build — permits, subcontractors, material procurement, inspections, and documentation. One point of contact from groundbreaking to ribbon-cutting.',
    highlights: [
      'Permit & regulatory management',
      'Subcontractor coordination',
      'Material procurement & logistics',
      'Inspections & documentation',
    ],
    href: '/services/project-management',
  },
  {
    slug: 'interior-finishes',
    icon: PaintRoller,
    title: 'Interior & Finishes',
    tagline: 'Professional Craftsmanship',
    description:
      'High-quality interior finishes for commercial and multi-family projects. From drywall and flooring to painting, trim, countertops, and custom metal or plastic composite fabrication.',
    highlights: [
      'Drywall, flooring & painting',
      'Trim, millwork & custom fabrication',
      'Countertops & surfaces',
      'Metal & plastic composite work',
    ],
    href: '/services/interior-finishes',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Commercial Construction<br />
              <span className="text-blue-700">Done Right</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Pro-Line Builders delivers full-scope commercial and multi-family construction across Florida —
              from initial permit through final closeout. Licensed CGC &amp; CCC, serving projects from $50K to $10M+.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you need a complete re-roof, ground-up construction, or polished interior finishes,
              our team has the expertise and trade relationships to get it done.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group bg-white rounded-sm border border-slate-200 p-8 flex flex-col hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-700 rounded-sm flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-1">
                        {service.tagline}
                      </p>
                      <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$10M+', label: 'Completed Projects' },
              { value: 'CGC & CCC', label: 'Licensed & Insured' },
              { value: 'All of Florida', label: 'Serving Statewide' },
              { value: '1 Point of Contact', label: 'From Permit to Closeout' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-blue-200 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-950 rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-200 text-sm max-w-lg">
                Get a free consultation. We&apos;ll review your scope, provide an honest assessment,
                and deliver a competitive proposal — typically within 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/get-a-quote"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-wider transition-all"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9544480298"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-300 hover:border-white hover:text-white font-bold px-8 py-4 rounded-sm text-sm uppercase tracking-wider transition-all"
              >
                (954) 448-0298
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
