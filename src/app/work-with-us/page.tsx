'use client'
import { useState } from 'react'
import { CheckCircle2, FileText, ArrowRight, ArrowLeft, Shield, Clock, FileCheck } from 'lucide-react'

const steps = ['Company', 'Trade', 'Compliance', 'Experience', 'Submit']
const trades = ['Roofing', 'Drywall', 'Painting', 'Flooring', 'General Labor', 'Concrete', 'Plumbing', 'Electrical', 'HVAC', 'Other']
const crewSizes = ['1-5', '6-10', '11-20', '20+']
const projectSizes = ['Under 50K', '50K to 250K', '250K to 1M', '1M+']
const availabilities = ['Available Now', 'Within 30 Days', '60+ Days']

export default function WorkWithUs() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    companyName: '', contactName: '', phone: '', email: '', serviceArea: '',
    trade: [] as string[], crewSize: '', yearsInBusiness: '', typicalProjectSize: '',
    licenseType: '', licenseNumber: '', coiFile: null as File|null, w9File: null as File|null,
    experience: '', notableClients: '', availability: ''
  })

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1))
  const back = () => setStep(s => Math.max(s - 1, 0))
  const canNext = () => {
    if (step === 0) return form.companyName && form.contactName && form.phone && form.email
    if (step === 1) return form.trade.length > 0 && form.crewSize && form.typicalProjectSize
    if (step === 2) return form.licenseType && form.licenseNumber
    if (step === 3) return form.availability
    return true
  }
  const toggleTrade = (t: string) => { setForm(f => ({...f, trade: f.trade.includes(t) ? f.trade.filter(x => x !== t) : [...f.trade, t]})) }
  const handleCOI = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) setForm(f => ({...f, coiFile: e.target.files[0]})) }
  const handleW9 = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) setForm(f => ({...f, w9File: e.target.files[0]})) }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1500) }


  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-green-600" /></div>
          <h1 className="font-display text-4xl font-bold text-slate-900 uppercase mb-4">Application Received</h1>
          <p className="text-slate-500 mb-2">Thank you, {form.contactName}. We have received your application and will review it shortly.</p>
          <p className="text-slate-400 text-sm mb-8">Approved subcontractors will be contacted as projects become available across Florida and Nashville.</p>
          <a href="/" className="text-blue-700 font-semibold text-sm uppercase tracking-wider hover:underline">Back to Home</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">EN</span>
            <span className="text-slate-300">|</span>
            <a href="/es/work-with-us" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">ES</a>
          </div>
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Subcontractor Portal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase mt-2">Work With Us</h1>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">Pro-Line Builders partners with qualified subcontractors across Florida and Nashville. Submit your information below to be considered for upcoming projects.</p>
        </div>
        <div className="flex items-center justify-between mb-10 bg-white rounded-sm p-1 border border-gray-100">
          {steps.map((s, i) => (<div key={i} className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${i === step ? 'bg-blue-700 text-white' : i < step ? 'bg-green-100 text-green-700' : 'text-gray-400'}`}>{s}</div>))}
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
          {step === 0 && (<div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Company Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company Name *</label><input required type="text" value={form.companyName} onChange={e => setForm(f => ({...f, companyName: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contact Name *</label><input required type="text" value={form.contactName} onChange={e => setForm(f => ({...f, contactName: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone *</label><input required type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email *</label><input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Service Area (Cities / States)</label><input type="text" value={form.serviceArea} onChange={e => setForm(f => ({...f, serviceArea: e.target.value}))} placeholder="e.g. Jacksonville FL; Nashville TN" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
          </div>)}
          {step === 1 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Trade and Capacity</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Trade(s) * (select all that apply)</label><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {trades.map(t => (<button key={t} type="button" onClick={() => toggleTrade(t)} className={`py-3 px-4 rounded-sm text-sm font-semibold border-2 transition-all ${form.trade.includes(t) ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>{t}</button>))}
            </div></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Crew Size *</label><div className="space-y-2">
                {crewSizes.map(c => (<button key={c} type="button" onClick={() => setForm(f => ({...f, crewSize: c}))} className={`w-full py-2 px-4 rounded-sm text-sm font-semibold border-2 transition-all text-left ${form.crewSize === c ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>{c} workers</button>))}
              </div></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Typical Project Size *</label><div className="space-y-2">
                {projectSizes.map(p => (<button key={p} type="button" onClick={() => setForm(f => ({...f, typicalProjectSize: p}))} className={`w-full py-2 px-4 rounded-sm text-sm font-semibold border-2 transition-all text-left ${form.typicalProjectSize === p ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>{p}</button>))}
              </div></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Years in Business</label><input type="number" min="0" value={form.yearsInBusiness} onChange={e => setForm(f => ({...f, yearsInBusiness: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
          </div>)}
          {step === 2 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Licensing and Insurance</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">License Type *</label><input required type="text" value={form.licenseType} onChange={e => setForm(f => ({...f, licenseType: e.target.value}))} placeholder="e.g. CGC, CCC, Roofing" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">License Number *</label><input required type="text" value={form.licenseNumber} onChange={e => setForm(f => ({...f, licenseNumber: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Upload Certificate of Insurance (COI)</label><label className="block border-2 border-dashed border-gray-200 rounded-sm p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"><FileCheck className="w-6 h-6 text-gray-300 mx-auto mb-2" /><p className="text-sm text-slate-500">{form.coiFile ? form.coiFile.name : 'Click to upload COI (PDF)'}</p><input type="file" onChange={handleCOI} className="hidden" accept=".pdf" /></label></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Upload W9 (Optional)</label><label className="block border-2 border-dashed border-gray-200 rounded-sm p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"><FileText className="w-6 h-6 text-gray-300 mx-auto mb-2" /><p className="text-sm text-slate-500">{form.w9File ? form.w9File.name : 'Click to upload W9 (PDF)'}</p><input type="file" onChange={handleW9} className="hidden" accept=".pdf" /></label></div>
          </div>)}
          {step === 3 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Experience and Availability</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Brief Description of Past Work</label><textarea rows={4} value={form.experience} onChange={e => setForm(f => ({...f, experience: e.target.value}))} placeholder="Describe your experience - types of projects, clients, scope..." className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm resize-none" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Notable Clients (Optional)</label><input type="text" value={form.notableClients} onChange={e => setForm(f => ({...f, notableClients: e.target.value}))} placeholder="e.g. BH Management, Olympus Property" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Availability *</label><div className="grid grid-cols-3 gap-3">
              {availabilities.map(a => (<button key={a} type="button" onClick={() => setForm(f => ({...f, availability: a}))} className={`py-3 px-4 rounded-sm text-sm font-bold border-2 transition-all ${form.availability === a ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>{a}</button>))}
            </div></div>
          </div>)}
          {step === 4 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Review and Submit</h2>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Company</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Company</span><span className="font-semibold text-slate-900">{form.companyName}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Contact</span><span className="font-semibold text-slate-900">{form.contactName}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Phone</span><span className="font-semibold text-slate-900">{form.phone}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Email</span><span className="font-semibold text-slate-900">{form.email}</span></div>
              {form.serviceArea && <div className="flex justify-between text-sm"><span className="text-slate-500">Service Area</span><span className="font-semibold text-slate-900">{form.serviceArea}</span></div>}
            </div>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Trade</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Trades</span><span className="font-semibold text-slate-900">{form.trade.join(', ')}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Crew Size</span><span className="font-semibold text-slate-900">{form.crewSize}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Typical Project</span><span className="font-semibold text-slate-900">{form.typicalProjectSize}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Availability</span><span className="font-semibold text-slate-900">{form.availability}</span></div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 text-sm text-blue-800"><p>Approved subcontractors will be contacted as projects become available across Florida and Nashville.</p></div>
            <button type="submit" disabled={submitting} className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-sm uppercase text-sm tracking-wider transition-all flex items-center justify-center gap-2">{submitting ? 'Submitting...' : <>Submit Application <ArrowRight className="w-4 h-4" /></>}</button>
          </div>)}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? <button type="button" onClick={back} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-semibold text-sm uppercase tracking-wider"><ArrowLeft className="w-4 h-4" /> Back</button> : <div />}
            {step < steps.length - 1 && <button type="button" onClick={next} disabled={!canNext()} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold px-8 py-3 rounded-sm uppercase text-sm tracking-wider">Continue <ArrowRight className="w-4 h-4" /></button>}
          </div>
        </form>
        <div className="mt-8 flex items-center justify-center gap-8 text-slate-400 text-xs font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-500" /> Licensed CGC and CCC</span>
          <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-500" /> Fully Insured</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-green-500" /> 24hr Review</span>
        </div>
      </div>
    </div>
  )
}
