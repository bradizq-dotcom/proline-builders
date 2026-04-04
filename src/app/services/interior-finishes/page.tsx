"use client";

import Link from "next/link";
import {
  Paintbrush,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function InteriorFinishesPage() {
  const services = [
    "Drywall installation and finishing",
    "Interior painting and protective coatings",
    "Flooring (all types — LVP, tile, carpet, VCT)",
    "Custom trim and millwork",
    "Countertop installation (solid surface, granite, quartz)",
    "Acoustic ceiling tiles and cloud systems",
    "Interior door and hardware installation",
    "Metal and plastic composite fabrication",
  ];

  const projectTypes = [
    "Apartment unit turnovers",
    "Common area renovations",
    "Clubhouse and amenity builds",
    "Commercial TI (Tenant Improvement)",
    "Pre-sale make-ready",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1a4b8c] rounded-xl">
              <Paintbrush className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interior & Finishes
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Professional Finish Work for Multi-Family and Commercial Properties
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <section>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            The details matter. Our finish work team handles everything from
            drywall to custom countertops — professional, on-schedule, and to
            spec.
          </p>
        </section>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Layers className="w-5 h-5 text-[#1a4b8c]" />
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
              <Paintbrush className="w-5 h-5 text-[#1a4b8c]" />
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

        {/* CTA */}
        <section className="bg-[#1a4b8c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Finish Strong?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Get transparent pricing for your interior finishes project.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Request Interior Finishes Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
