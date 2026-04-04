import { ProjectCardList } from '@/components/ProjectCardList'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-300 text-sm font-bold uppercase tracking-widest">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mt-2">Projects</h1>
          <p className="text-blue-200 mt-3 max-w-lg">From multi-building re-roofing to ground-up construction — see what we've built across Florida.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProjectCardList />
      </div>
      <div className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold uppercase mb-4">Have a Project in Mind?</h2>
          <p className="text-blue-200 mb-6">Tell us about it — we can have a proposal ready within days.</p>
          <Link href="/get-a-quote" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-sm uppercase text-sm tracking-wider transition-all">Request a Bid</Link>
        </div>
      </div>
    </div>
  )
}
