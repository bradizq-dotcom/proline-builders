'use client'

import Link from 'next/link'

const phases = [
  {
    number: '01',
    title: 'SITE ASSESSMENT',
    timeline: '1–3 Days',
    items: [
      'Initial consultation and scope review',
      'Site walkthrough and condition assessment',
      'Budget range establishment',
      'Preliminary timeline outline',
    ],
  },
  {
    number: '02',
    title: 'PROPOSAL & ESTIMATING',
    timeline: '3–7 Days',
    items: [
      'Detailed scope of work document',
      'Line-item pricing by scope',
      'Budget finalization',
      'Client review and approval',
    ],
  },
  {
    number: '03',
    title: 'PERMITTING & PRE-CONSTRUCTION',
    timeline: '2–6 Weeks',
    items: [
      'Permit application submission',
      'Variance handling if needed',
      'Subcontractor procurement',
      'Material scheduling',
      'Insurance and bond coordination',
    ],
  },
  {
    number: '04',
    title: 'CONSTRUCTION',
    timeline: 'Varies by Project Scope',
    items: [
      'Mobilization and staging',
      'Daily coordination and reporting',
      'Quality control inspections',
      'Change order management',
      'Safety compliance',
    ],
  },
  {
    number: '05',
    title: 'CLOSEOUT',
    timeline: '1–2 Weeks',
    items: [
      'Final inspection and sign-off',
      'As-built documentation',
      'Warranty registration',
      'Project handover',
    ],
  },
]

const differentiators = [
  {
    title: 'Family-Owned & Operated',
    description:
      'Two generations of construction expertise with hands-on leadership on every project.',
  },
  {
    title: 'Licensed CGC & CCC',
    description:
      'Fully licensed in Florida for both General Contracting (CGC) and Roofing (CCC).',
  },
  {
    title: '$50K–$10M+ Project Focus',
    description:
      'We specialize in mid-market commercial and multi-family projects — right in your wheelhouse.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Detailed line-item proposals with no surprise changes. Budget certainty is our baseline.',
  },
  {
    title: 'Direct Point of Contact',
    description:
      'You work directly with decision-makers — no layers of project managers slowing you down.',
  },
  {
    title: 'Florida Climate Expertise',
    description:
      "Decades of experience building for Florida's heat, humidity, hurricanes, and coastal conditions.",
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a4b8c] to-[#0f2d5e] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#60a5fa] font-semibold uppercase tracking-widest text-sm mb-4">
            How We Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-oswald mb-6">
            Our Project Process
          </h1>
          <p className="text-[#bfdbfe] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A clear, structured approach from first conversation to final walkthrough.
            Every phase is designed to protect your investment and keep your project on track.
          </p>
        </div>
      </section>

      {/* Phase Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a4b8c] via-[#2563eb] to-[#1a4b8c] hidden md:block" />

            {phases.map((phase, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div
                  key={phase.number}
                  className={`relative mb-16 md:mb-20 ${
                    isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'
                  }`}
                >
                  {/* Circle node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#1a4b8c] to-[#2563eb] flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-sm">{phase.number}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-20 md:ml-0 card-hover bg-white border border-slate-100 rounded-2xl p-8 shadow-sm ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a4b8c] font-oswald tracking-wide">
                        {phase.title}
                      </h3>
                    </div>
                    <div
                      className={`inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      ⏱ {phase.timeline}
                    </div>
                    <ul
                      className={`space-y-2 ${
                        isLeft ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-slate-700 text-sm leading-relaxed ${
                            isLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="text-[#2563eb] mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#2563eb] font-semibold uppercase tracking-widest text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-oswald text-[#1a4b8c]">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a4b8c] to-[#2563eb] flex items-center justify-center mb-4">
                  <span className="text-white text-lg">✦</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a4b8c] mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1a4b8c] to-[#0f2d5e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-oswald mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[#bfdbfe] text-lg mb-10 leading-relaxed">
            Whether you have a project in mind or just want to understand your options,
            our team is ready to help. Let&apos;s talk scope, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-900/30"
            >
              Get a Free Quote →
            </Link>
            <a
              href="tel:7276422953"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-colors"
            >
              Call (727) 642-2953
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
