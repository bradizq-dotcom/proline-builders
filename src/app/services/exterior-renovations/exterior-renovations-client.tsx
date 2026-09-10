"use client";

import Link from "next/link";
import {
  Home, Wrench, Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ExteriorRenovationsPage() {
  const columns = [
    { title: 'What We Do', items: ['Siding replacement & repair', 'Exterior painting & coatings', 'Window replacement', 'Exterior trim & millwork'], icon: Home },
    { title: 'Our Capabilities', items: ['Building-by-building phased execution', 'Occupied-property coordination', 'Substrate repair before finish work', 'Weather-appropriate scheduling'], icon: Wrench },
    { title: 'Ideal For', items: ['Apartment communities', 'Condominium associations (HOAs)', 'Multi-building developments', 'Commercial properties'], icon: Building2 },
  ];
  const steps = ['Assessment', 'Detailed Estimate', 'Phasing Plan', 'Execution', 'Final Walkthrough'];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1a4b8c] rounded-xl">
              <Home className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exterior Renovations
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Siding, Paint, Windows & Trim — Built for Multi-Family and Commercial
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <section>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Complete building-envelope refreshes for Florida&apos;s apartment communities and commercial properties. We phase the work building by building, so occupied properties stay operational — and look new again — without displacing residents.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
                  <Icon className="w-5 h-5 text-[#1a4b8c]" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{col.title}</h2>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
          <div className="flex flex-wrap items-center gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-5 py-3 bg-[#1a4b8c] text-white rounded-full font-medium text-sm">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1a4b8c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Refresh Your Exteriors?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Request a free exterior renovation bid for your multi-family or commercial property.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Request an Exterior Bid
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
