import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, getProjects } from '@/components/projectsData'

export function generateStaticParams() {
  return getProjects().map(p => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const allProjects = getProjects()
  const related = allProjects.filter(p => p.slug !== project.slug && p.type === project.type).slice(0, 3)
  const fallbackRelated = allProjects.filter(p => p.slug !== project.slug).slice(0, 3)
  const moreProjects = related.length > 0 ? related : fallbackRelated

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/projects" className="text-blue-300 hover:text-white text-sm font-semibold uppercase tracking-widest">← Back to Projects</Link>
          <div className="mt-4">
            <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded uppercase">{project.type}</span>
            {project.completed === 'In Progress' && <span className="ml-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded uppercase">In Progress</span>}
            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase mt-3">{project.name}</h1>
            <p className="text-blue-200 mt-2">📍 {project.location}</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-72 md:h-96 overflow-hidden">
        <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Timeline', value: project.timeline },
              { label: 'Started', value: project.completed },
              { label: 'Scope', value: project.scope },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded p-4 border text-center">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-slate-900 font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="bg-white rounded p-6 border-l-4 border-red-400">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Challenge</h2>
            <p className="text-slate-700 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Solution */}
          <div className="bg-white rounded p-6 border-l-4 border-blue-600">
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-2">Solution</h2>
            <p className="text-slate-700 leading-relaxed">{project.solutions}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded p-6 border">
            <h3 className="font-display font-bold text-slate-900 mb-4 uppercase">Project Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Client</span><span className="font-semibold text-slate-900">{project.client}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Location</span><span className="font-semibold text-slate-900">{project.location}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Timeline</span><span className="font-semibold text-slate-900">{project.timeline}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Completed</span><span className="font-semibold text-slate-900">{project.completed}</span></div>
            </div>
          </div>
          <Link href="/get-a-quote" className="block text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-sm uppercase text-sm tracking-wider transition-all">Request a Bid</Link>
          <Link href="/projects" className="block text-center border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold py-3 rounded-sm uppercase text-sm tracking-wider transition-all">View All Projects</Link>
        </div>
      </div>

      {/* More Projects */}
      <div className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold uppercase mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreProjects.map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                <div className="bg-slate-50 rounded overflow-hidden border hover:shadow-lg transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-slate-900 text-sm">{p.name}</h3>
                    <p className="text-slate-500 text-xs mt-1">📍 {p.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
