import Link from "next/link";
import {
  Shield,
  Award,
  Building2,
  Clock,
  CheckCircle2,
  Users,
  FileCheck,
  HardHat,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1a4b8c] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="text-2xl font-bold tracking-tight">Pro-Line Builders</div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:7276422953"
              className="hidden sm:flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (727) 642-2953
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1a4b8c] text-white pb-20 pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#2563eb] font-semibold text-sm uppercase tracking-wider mb-4">
              Family-Owned General Contractor
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About Pro-Line Builders
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Serving Florida&apos;s commercial and multi-family sector with integrity,
              expertise, and a commitment to getting the job done right.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We&apos;re a family-owned general contracting company serving Florida&apos;s
              commercial and multi-family sector. With over $10M in completed commercial projects,
              we specialize in large-scale construction that requires coordination,
              expertise, and reliability.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We primarily serve property management companies, developers, and
              apartment complex owners — not homeowners. That focus means we
              understand the complexity of occupied buildings, code compliance, and
              tight schedules.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our team manages the full project lifecycle: permits, subcontractors,
              material procurement, inspections, and documentation. We coordinate
              everything so our clients don&apos;t have to.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We&apos;re built for projects where quality and timeline matter — from
              multi-building re-roofing to ground-up commercial construction.
            </p>
          </div>

          {/* Sectors */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#1a4b8c] mb-8">
              Sectors We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Building2,
                  label: "Multi-Family Residential",
                },
                {
                  icon: HardHat,
                  label: "Commercial Properties",
                },
                {
                  icon: Users,
                  label: "Residential Developments",
                },
                {
                  icon: FileCheck,
                  label: "Property Management",
                },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2563eb]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a4b8c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1a4b8c]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#1a4b8c] mb-8">
              Why Clients Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Licensed CGC & CCC",
                  desc: "Fully licensed General Contractor and Certified Building Contractor for Florida",
                },
                {
                  icon: Award,
                  title: "$10M+ in Completed Projects",
                  desc: "Extensive track record serving Florida's commercial and multi-family sector",
                },
                {
                  icon: MapPin,
                  title: "Florida-Wide Projects",
                  desc: "Serving commercial clients throughout the entire state of Florida",
                },
                {
                  icon: Building2,
                  title: "Multi-Building Specialists",
                  desc: "Experienced coordinating large-scale, multi-building developments",
                },
                {
                  icon: Users,
                  title: "Tenant-Occupied Experience",
                  desc: "Skilled at working in occupied buildings without disrupting residents",
                },
                {
                  icon: Clock,
                  title: "Fast Permitting Coordination",
                  desc: "Streamlined permitting process to keep your project on schedule",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2563eb]/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#1a4b8c] to-[#2563eb] rounded-2xl p-10 text-center text-white">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl font-bold mb-3">
              Ready to start your project?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your commercial or multi-family project. We&apos;ll provide
              a detailed scope and timeline for your build.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-white text-[#1a4b8c] font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get a Quote
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="mt-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#1a4b8c]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:7276422953"
                  className="font-semibold text-slate-900 hover:text-[#2563eb] transition-colors"
                >
                  (727) 642-2953
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#1a4b8c]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:bradizq@prolinebuilders.com"
                  className="font-semibold text-slate-900 hover:text-[#2563eb] transition-colors"
                >
                  bradizq@prolinebuilders.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a4b8c]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1a4b8c]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="font-semibold text-slate-900">
                  Palm Harbor, FL — Serving All of Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4b8c] text-white/70 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pro-Line Builders, LLC. All rights
            reserved.
          </p>
          <p className="text-sm">Licensed CGC &amp; CCC — Palm Harbor, FL</p>
        </div>
      </footer>
    </main>
  );
}
