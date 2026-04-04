"use client";

import Link from "next/link";
import {
  Wrench,
  Shield,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function RoofingPage() {
  const roofTypes = [
    "Asphalt Shingle",
    "Concrete & Clay Tile",
    "TPO (Thermoplastic Polyolefin)",
    "Modified Bitumen",
    "Built-Up Roofing (BUR)",
  ];

  const capabilities = [
    "Full tear-off and re-roof",
    "Roof deck repair and replacement",
    "Underlayment and ice/water shield",
    "Valley waterproofing and flashing",
    "Drip edge and gutter coordination",
    "Deck protection systems",
  ];

  const idealFor = [
    "Apartment complexes (tenant-occupied)",
    "Multi-building developments",
    "HOAs",
    "Commercial properties",
    "Student housing",
  ];

  const processSteps = [
    "Inspection",
    "Detailed Estimate",
    "Permit",
    "Material Procurement",
    "Installation",
    "Final Inspection",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1a4b8c] rounded-xl">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial Roofing
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Shingle, Tile, TPO, Modified Bitumen — Built for Multi-Family and
            Commercial
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <section>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Complete re-roofing services for Florida&apos;s commercial and
            multi-family sector. From single-building repairs to multi-phase,
            multi-building re-roofing projects — we have the crew, the
            equipment, and the experience to deliver on time and on budget.
          </p>
        </section>

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Roof Types */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Shield className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Roof Types We Work With
            </h2>
            <ul className="space-y-3">
              {roofTypes.map((type) => (
                <li key={type} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Wrench className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Our Capabilities
            </h2>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Building2 className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Ideal For
            </h2>
            <ul className="space-y-3">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
          <div className="flex flex-wrap items-center gap-3">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-5 py-3 bg-[#1a4b8c] text-white rounded-full font-medium text-sm">
                  {step}
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a4b8c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Request a free roofing bid for your commercial or multi-family property.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Request a Roofing Bid
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
