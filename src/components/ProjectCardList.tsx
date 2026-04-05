'use client'
import { useState } from 'react'
import Link from 'next/link'
import { projectsData } from './projectsData'

export function ProjectCardList() {
  const [filter, setFilter] = useState({ location: '', type: '', budget: '' })

  const allLocations = Array.from(new Set(projectsData.map(p => p.location.split(',')[1]?.trim() || p.location))).filter(Boolean)
  const allTypes = Array.from(new Set(projectsData.map(p => p.type)))

  const filtered = projectsData.filter(p => {
    if (filter.location && !p.location.includes(filter.location)) return false
    if (filter.type && p.type !== filter.type) return false
    if (filter.budget) {
      const b = parseInt(p.budget.replace(/[^0-9]/g,''))
      if (filter.budget === 'under300k' && b >= 300) return false
      if (filter.budget === '300k-600k' && (b < 300 || b >= 600)) return false
      if (filter.budget === 'over600k' && b < 600) return false
    }
    return true
  })

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        <select onChange={e => setFilter(f => ({...f, location: e.target.value}))} className="border rounded px-3 py-2 text-sm">
          <option value="">All Locations</option>
          {allLocations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select onChange={e => setFilter(f => ({...f, type: e.target.value}))} className="border rounded px-3 py-2 text-sm">
          <option value="">All Types</option>
          {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select onChange={e => setFilter(f => ({...f, budget: e.target.value}))} className="border rounded px-3 py-2 text-sm">
          <option value="">All Budgets</option>
          <option value="under300k">Under $300K</option>
          <option value="300k-600k">$300K–$600K</option>
          <option value="over600k">$600K+</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 && <p className="text-slate-500 col-span-full text-center py-12">No projects match your filters.</p>}
        {filtered.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
            <div className="bg-white rounded overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-200">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded uppercase">{p.type}</span>
                {p.completed === 'In Progress' && <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded uppercase">In Progress</span>}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-slate-500 text-sm mb-3">📍 {p.location}</p>
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">🏗️ {p.scope}</span>
                  <span className="text-blue-700">{p.budget}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
