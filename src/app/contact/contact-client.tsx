'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const projectTypes = [
  'Apartment Complex — Roofing',
  'Apartment Complex — Full GC',
  'Commercial Building',
  'Multi-Family Residential',
  'HOA / Community',
  'New Construction',
  'Renovation / Remodel',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const buildMailto = () => {
    const lines = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType || '—'}`,
      '',
      form.message,
    ]
    const subject = encodeURIComponent(`Website Contact — ${form.name}`)
    const body = encodeURIComponent(lines.join('\n'))
    return `mailto:pete@prolinebuilders.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = buildMailto()
    setSubmitted(true)
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div className="min-h-screen bg-white">

      {/* HERO HEADER */}
      <section className="bg-blue-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mt-3">Contact Us</h1>
          <p className="text-blue-200 mt-4 max-w-lg text-lg leading-relaxed">
            Ready to start your project or have questions? Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT: Contact Info + CTA */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact Card */}
              <div className="bg-slate-50 border border-gray-100 rounded-sm p-8">
                <h2 className="font-display text-2xl font-bold text-slate-900 uppercase mb-6">Contact Information</h2>

                <div className="space-y-5">
                  <a href="tel:9544480298" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-700 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</p>
                      <p className="text-slate-900 font-semibold group-hover:text-blue-700 transition-colors">(954) 448-0298</p>
                    </div>
                  </a>

                  <a href="mailto:pete@prolinebuilders.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-700 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</p>
                      <p className="text-slate-900 font-semibold group-hover:text-blue-700 transition-colors">pete@prolinebuilders.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-700 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Service Area</p>
                      <p className="text-slate-900 font-semibold">Florida — Statewide</p>
                      <p className="text-slate-500 text-sm">Serving All of Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-700 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Response Time</p>
                      <p className="text-slate-900 font-semibold">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Large CTA */}
              <div className="bg-blue-700 rounded-sm p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">Ready to Start Your Project?</h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  For detailed quotes, project scope, and pricing — use our full quote request form.
                </p>
                <Link href="/get-a-quote"
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all hover:scale-105">
                  Get a Detailed Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-4">
                  <a href="tel:9544480298"
                    className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-semibold transition-colors">
                    <Phone className="w-4 h-4" /> Or call (954) 448-0298
                  </a>
                </div>
              </div>

              {/* Quick note */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-700">Licensed & Insured.</span> CGC & CCC certified. We work with property managers, developers, and owners across Florida.
                </p>
              </div>

            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-slate-900 uppercase mb-2">Send a Message</h2>
                <p className="text-slate-500 text-sm mb-8">For detailed quote requests, use our full form instead — <Link href="/get-a-quote" className="text-blue-700 hover:underline font-semibold">click here</Link>.</p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 uppercase mb-2">Check Your Email</h3>
                    <p className="text-slate-500 mb-2">Thanks, {form.name} — your email app should have opened with your message ready to send. Hit send and we'll be in touch within 24 hours.</p>
                    <p className="text-slate-400 text-sm mb-6">Email app didn't open? <a href={buildMailto()} className="text-blue-700 font-semibold hover:underline">Click here to open it manually</a>.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', projectType: '', message: '' }) }}
                      className="text-blue-700 font-semibold text-sm hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                        <input required type="text" value={form.name} onChange={update('name')}
                          placeholder="John Smith" autoComplete="name"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone *</label>
                        <input required type="tel" value={form.phone} onChange={update('phone')}
                          placeholder="(555) 000-0000" autoComplete="tel"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={update('email')}
                        placeholder="you@example.com" autoComplete="email"
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Type</label>
                      <select value={form.projectType} onChange={update('projectType')}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 transition-colors text-sm appearance-none bg-white">
                        <option value="">Select project type (optional)</option>
                        {projectTypes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={update('message')}
                        placeholder="Tell us about your project, location, timeline..."
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none" />
                    </div>

                    <div className="flex items-center justify-between pt-2 gap-4">
                      <p className="text-xs text-slate-400 max-w-xs">
                        For detailed pricing and scope, we'll redirect you to our full quote form.
                      </p>
                      <button type="submit"
                        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all whitespace-nowrap">
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="bg-blue-950 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase">Have a Larger Project?</h2>
            <p className="text-blue-300 mt-2">For projects under $50K, call us. For projects over $50K, our full quote form captures everything we need for an accurate proposal.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/get-a-quote"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all hover:scale-105">
              Full Quote Request <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:9544480298"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
