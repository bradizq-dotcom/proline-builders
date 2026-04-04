'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Shield, HardHat, Building2, Users, Clock, CheckCircle2, ArrowRight, Star, Zap, Award, FileText, Hammer, Ruler, Truck, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const featuredProjects = [
  { name: 'Mirador at River City', location: 'Jacksonville, FL', type: 'Apartment Complex Re-roofing', scope: '4 Buildings', budget: '$450K', img: '/images/apartment.jpg' },
  { name: 'St. Pete 2025', location: 'St. Petersburg, FL', type: 'New Construction', scope: 'Ground-Up', budget: '$1.2M', img: '/images/new-construction.jpg' },
  { name: 'Reunion Crossing', location: 'Kissimmee, FL', type: 'Apartment Complex', scope: 'Full GC', budget: '$890K', img: '/images/apartment.jpg' },
  { name: 'Polo Glen', location: 'Rockledge, FL', type: 'Multi-building Roofing', scope: 'Roofing Only', budget: '$320K', img: '/images/roofing.jpg' },
]

const services = [
  { icon: <HardHat className="w-7 h-7" />, title: 'Roofing', href: '/services/roofing', desc: 'Shingle, tile, TPO, flat, modified bitumen. Multi-building re-roofing with tenants on-site.' },
  { icon: <Building2 className="w-7 h-7" />, title: 'General Contracting', href: '/services/general-contracting', desc: 'Full-scope commercial and multi-family construction from permit to closeout.' },
  { icon: <Ruler className="w-7 h-7" />, title: 'Project Management', href: '/services/project-management', desc: 'End-to-end oversight. Permits, subcontractors, procurement, inspections.' },
  { icon: <Hammer className="w-7 h-7" />, title: 'Interior & Finishes', href: '/services/interior-finishes', desc: 'Drywall, flooring, painting, trim, countertops. Professional finish work.' },
]

const clients = [
  'Property Management Firms', 'Apartment Complex Owners', 'Real Estate Developers', 'HOAs', 'Commercial Property Owners', 'National REITs', 'Hotel & Hospitality Groups', 'Student Housing Operators'
]

const process = [
  { step: '01', title: 'Site Visit', desc: 'We assess the scope, condition, and constraints of your project.' },
  { step: '02', title: 'Proposal', desc: 'Detailed estimate with budget range, timeline, and scope of work.' },
  { step: '03', title: 'Permitting', desc: 'We handle permit acquisition and city inspection coordination.' },
  { step: '04', title: 'Execution', desc: 'Professional construction with daily coordination and quality control.' },
  { step: '05', title: 'Closeout', desc: 'Final inspection, documentation, and project handover.' },
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-construction.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-sm px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Commercial & Multi-Family Contractors — Florida</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-6 animate-fadeUp">
              We Build<br />
              <span className="text-blue-300">Florida.</span>
            </h1>

            <p className="text-lg text-blue-100 max-w-xl mb-10 animate-fadeUp delay-100 leading-relaxed">
              Roofing, general contracting, and project management for Florida's commercial and multi-family sector. Licensed CGC & CCC. $10M+ in completed projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp delay-200">
              <Link href="/get-a-quote"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all hover:scale-105">
                Request a Bid <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/projects"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all">
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar — Scrolling Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 overflow-hidden py-4">
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="mx-8 text-slate-500 text-xs font-bold uppercase tracking-widest">{c}<span className="text-blue-600 mx-2">|</span></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 uppercase">Our Services</h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto">Full-scope general contracting for Florida's commercial and multi-family sector.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={i} href={s.href}
                className="bg-white border border-gray-100 rounded-sm p-8 card-hover group">
                <div className="w-14 h-14 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-5 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-700 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 uppercase">Featured Projects</h2>
              <p className="text-slate-500 mt-3 max-w-md">A selection of our completed work across Florida's commercial and multi-family sector.</p>
            </div>
            <Link href="/projects"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-sm uppercase tracking-wider transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group">
                <div className="h-48 relative overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase">
                    {p.budget}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-slate-900 uppercase tracking-wide mb-1">{p.name}</h3>
                  <p className="text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">{p.type}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.location}</span>
                    <span className="font-semibold text-slate-600">{p.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-300 text-sm font-bold uppercase tracking-widest">Why Pro-Line</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 uppercase">Built Different.<br />Built Right.</h2>
              <p className="text-blue-200 mt-6 leading-relaxed">
                We're not a residential roofer wearing a commercial hat. We specialize exclusively in large-scale commercial and multi-family projects — which means we understand the complexity that comes with occupied buildings, tight schedules, and code compliance.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: 'Licensed CGC & CCC' },
                  { icon: <Building2 className="w-5 h-5" />, text: 'Multi-Building Specialists' },
                  { icon: <Users className="w-5 h-5" />, text: 'Tenant-Occupied Experience' },
                  { icon: <Clock className="w-5 h-5" />, text: 'Fast Permitting' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: '$200K–$10M+ Projects' },
                  { icon: <Star className="w-5 h-5" />, text: 'Trusted by PM Firms' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                    <span className="text-blue-400">{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/50 border border-blue-800 rounded-sm p-8">
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-6">Our Process</h3>
              <div className="space-y-5">
                {process.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="font-display text-2xl font-bold text-blue-400 w-10 flex-shrink-0">{p.step}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-blue-200 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/process"
                className="mt-8 flex items-center gap-2 text-blue-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors">
                Full Process Breakdown <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-4">Have Plans Ready?</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">Upload your plans and get a fast, detailed pricing response. We handle everything from $200K to $5M.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-a-quote"
              className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all hover:scale-105">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:7276422953"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all">
              <Phone className="w-5 h-5" /> (727) 642-2953
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
