"use client";

import Link from "next/link";
import {
  HardHat,
  Building2,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function GeneralContractingPage() {
  const services = [
    "New construction (ground-up)",
    "Building additions and expansions",
    "Structural renovations",
    "Facade upgrades",
    "ADA compliance updates",
    "Fire/water damage restoration coordination",
  ];

  const projectTypes = [
    "Apartment complexes",
    "Commercial buildings",
    "Multi-family developments",
    "Mixed-use properties",
    "Industrial facilities",
  ];

  const weHandle = [
    "Permits and inspections",
    "Subcontractors (concrete, plumbing, electrical, HVAC)",
    "Material procurement",
    "Daily coordination",
    "Documentation and closeout",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1a4b8c] rounded-xl">
              <HardHat className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Contracting
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Full-Scope Commercial and Multi-Family Construction — From Permit to
            Final Inspection
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <section>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Complete general contracting for commercial and multi-family
            projects. We manage the full construction lifecycle — coordination,
            scheduling, subcontractors, procurement, and quality control — so you
            can focus on your business.
          </p>
        </section>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <ClipboardList className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Services</h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Types */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Building2 className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Project Types
            </h2>
            <ul className="space-y-3">
              {projectTypes.map((type) => (
                <li key={type} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* We Handle */}
        <section className="bg-[#1a4b8c]/5 rounded-2xl p-8 border border-[#1a4b8c]/20">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            We Handle Everything
          </h2>
          <div className="flex flex-wrap gap-3">
            {weHandle.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a4b8c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Build?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Get a comprehensive bid for your commercial or multi-family construction project.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Request a General Contracting Bid
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
