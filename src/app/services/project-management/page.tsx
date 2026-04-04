"use client";

import Link from "next/link";
import {
  BarChart3,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ProjectManagementPage() {
  const included = [
    "Permit acquisition and variance handling",
    "City inspection coordination",
    "Subcontractor management (concrete, plumbing, electrical, HVAC, etc.)",
    "Material procurement coordination",
    "Project documentation and submittals",
    "Budget tracking and change order management",
    "Daily/weekly progress reporting",
    "Quality control inspections",
  ];

  const whoItsFor = [
    "Property managers with multiple properties",
    "Developers with active projects",
    "HOAs managing community improvements",
    "Owners with limited construction staff",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1a4b8c] rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project Management
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            End-to-End Oversight — Permits, Subcontractors, Inspections, and
            Everything In Between
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <section>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            You don&apos;t have the time or bandwidth to manage every call, every
            contractor, and every inspection. We do it for you. Our project
            management service means one point of contact from groundbreaking to
            closeout.
          </p>
        </section>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's Included */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <FileCheck className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              What&apos;s Included
            </h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It's For */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="p-2 bg-[#1a4b8c]/10 rounded-lg w-fit mb-4">
              <Users className="w-5 h-5 text-[#1a4b8c]" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Who It&apos;s For
            </h2>
            <ul className="space-y-3">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-[#1a4b8c] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Need a Project Manager?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Let us take the reins on your next project. One call, one contact, full oversight.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
