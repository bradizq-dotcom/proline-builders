'use client'
import { useState } from 'react'
import { CheckCircle2, Upload, FileText, X, ArrowRight, ArrowLeft, AlertCircle, FileCheck } from 'lucide-react'

const steps = ['Contact', 'Qualify', 'Project', 'Scope', 'Submit']

export default function GetAQuote() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    decisionMaker: '' as '' | 'yes' | 'no',
    plansAvailable: '' as '' | 'yes' | 'no',
    propertyType: '', location: '', budget: '',
    scope: [] as string[], timeline: '', files: [] as File[], details: ''
  })
  const scopeOptions = ['Roofing', 'General Contracting', 'Project Management', 'Interior & Finishes', 'Windows & Doors', 'Stucco & Siding', 'Other']
  const budgets = ['$50K $100K', '$100K $250K', '$250K $500K', '$500K $1M', '$1M+']
  const timelines = ['ASAP', '1 3 Months', '3 6 Months', '6+ Months']
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1))
  const back = () => setStep(s => Math.max(s - 1, 0))
  const canNext = () => {
    if (step === 0) return form.name && form.phone && form.email
    if (step === 1) return form.decisionMaker && form.plansAvailable
    if (step === 2) return form.propertyType && form.location && form.budget
    if (step === 3) return form.scope.length > 0 && form.timeline
    return true
  }
  const toggleScope = (v: string) => { setForm(f => ({...f, scope: f.scope.includes(v) ? f.scope.filter(x => x !== v) : [...f.scope, v]})) }
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files) setForm(f => ({...f, files: [...f.files, ...Array.from(e.target.files)]})) }
  const removeFile = (i: number) => { setForm(f => ({...f, files: f.files.filter((_, idx) => idx !== i)})) }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitting(true); setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1500) }
  const leadValue = () => { if (form.budget.includes('$1M')) return 'HOT'; if (form.budget.includes('$500K') || form.budget.includes('$250K')) return 'WARM'; return 'LOW' }
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-green-600" /></div>
          <h1 className="font-display text-4xl font-bold text-slate-900 uppercase mb-4">Request Received</h1>
          <p className="text-slate-500 mb-2">Thank you, {form.name}. We have received your request and will review it within 24 hours.</p>
          <p className="text-slate-400 text-xs mb-8">Lead Priority: <span className={"font-bold " + (leadValue() === 'HOT' ? 'text-red-600' : leadValue() === 'WARM' ? 'text-orange-600' : 'text-blue-600')}>{leadValue()}</span></p>
          <a href="/" className="text-blue-700 font-semibold text-sm uppercase tracking-wider hover:underline">Back to Home</a>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24 md:pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase">Request a Bid</h1>
          
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          
        </div>
        <div className="flex items-center justify-between mb-10 bg-white rounded-sm p-1 border border-gray-100">
          {steps.map((s, i) => (<div key={i} className={"flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all " + (i === step ? 'bg-blue-700 text-white' : i < step ? 'bg-green-100 text-green-700' : 'text-gray-400')}>{s}</div>))}
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
          {step === 0 && (<div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Contact Information</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label><input required type="text" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="John Smith" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Organization</label><input type="text" value={form.company} onChange={e => setForm(f => ({...f, company: e.target.value}))} placeholder="Property Management Company" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone *</label><input required type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} placeholder="(555) 000-0000" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email *</label><input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="you@company.com" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" /></div>
            </div>
          </div>)}
          {step === 1 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Quick Questions</h2>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Are you the decision maker for this project? *</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setForm(f => ({...f, decisionMaker: 'yes'}))} className={"py-4 px-6 rounded-sm text-sm font-bold border-2 transition-all " + (form.decisionMaker === 'yes' ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>Yes, I Decide</button>
                <button type="button" onClick={() => setForm(f => ({...f, decisionMaker: 'no'}))} className={"py-4 px-6 rounded-sm text-sm font-bold border-2 transition-all " + (form.decisionMaker === 'no' ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>No, Someone Else Does</button>
              </div>
              {form.decisionMaker === 'no' && <p className="text-xs text-orange-600 mt-3 flex items-center gap-1"><AlertCircle className="w-3 h-3" />We recommend connecting us with the decision maker to move forward faster.</p>}
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Are project plans available? *</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setForm(f => ({...f, plansAvailable: 'yes'}))} className={"py-4 px-6 rounded-sm text-sm font-bold border-2 transition-all " + (form.plansAvailable === 'yes' ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}><FileCheck className="w-4 h-4 inline mr-2" />Yes, Plans Ready</button>
                <button type="button" onClick={() => setForm(f => ({...f, plansAvailable: 'no'}))} className={"py-4 px-6 rounded-sm text-sm font-bold border-2 transition-all " + (form.plansAvailable === 'no' ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}><FileText className="w-4 h-4 inline mr-2" />Not Yet / Assessment Needed</button>
              </div>
              {form.plansAvailable === 'yes' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-sm">
                  <p className="text-green-800 text-sm font-semibold mb-3">Projects with plans receive priority review.</p>
                  <label className="block border-2 border-dashed border-green-300 rounded-sm p-6 text-center cursor-pointer hover:border-green-500 transition-colors bg-white">
                    <Upload className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm text-green-700">Upload plans or photos now (PDF, JPG, PNG)</p>
                    <p className="text-xs text-green-500 mt-1">Click to upload — up to 25MB</p>
                    <input type="file" multiple onChange={handleFile} className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  </label>
                  {form.files.length > 0 && <div className="mt-3 space-y-2">{form.files.map((f, i) => (<div key={i} className="flex items-center justify-between bg-white rounded-sm px-4 py-2 text-sm"><span className="flex items-center gap-2 text-slate-600"><FileText className="w-4 h-4 text-blue-500" />{f.name}</span><button type="button" onClick={() => removeFile(i)} className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button></div>))}</div>}
                </div>
              )}
            </div>
          </div>)}
          {step === 2 && (<div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Project Details</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Property Type *</label>
              <select required value={form.propertyType} onChange={e => setForm(f => ({...f, propertyType: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 transition-colors text-sm appearance-none bg-white">
                <option value="">Select property type</option>
                <option>Apartment Complex — Roofing</option>
                <option>Apartment Complex — Full GC / Renovation</option>
                <option>Commercial Building</option>
                <option>HOA / Community</option>
                <option>Student Housing</option>
                <option>New Construction</option>
                <option>Other</option>
              </select>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Location (City, State) *</label><input required type="text" value={form.location} onChange={e => setForm(f => ({...f, location: e.target.value}))} placeholder="Jacksonville, FL" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" /></div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Estimated Budget Range *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{budgets.map(b => (<button key={b} type="button" onClick={() => setForm(f => ({...f, budget: b}))} className={"py-3 px-4 rounded-sm text-sm font-semibold border-2 transition-all " + (form.budget === b ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{b}</button>))}</div>
              
              
            </div>
          </div>)}
          {step === 3 && (<div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Scope of Work</h2>
            <p className="text-slate-500 text-sm">Select all that apply.</p>
            <div className="grid grid-cols-2 gap-3">{scopeOptions.map(opt => (<button key={opt} type="button" onClick={() => toggleScope(opt)} className={"py-3 px-4 rounded-sm text-sm font-semibold border transition-all text-left flex items-center gap-2 " + (form.scope.includes(opt) ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}><div className={"w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 " + (form.scope.includes(opt) ? 'bg-white' : 'border-gray-400')}>{form.scope.includes(opt) && <CheckCircle2 className="w-3 h-3 text-blue-700" />}</div>{opt}</button>))}</div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Project Timeline *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{timelines.map(t => (<button key={t} type="button" onClick={() => setForm(f => ({...f, timeline: t}))} className={"py-3 px-4 rounded-sm text-sm font-semibold border-2 transition-all " + (form.timeline === t ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{t}</button>))}</div>
            </div>
            {form.plansAvailable !== 'yes' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Upload Plans / Photos (Optional)</label>
                <label className="block border-2 border-dashed border-gray-200 rounded-sm p-8 text-center cursor-pointer hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Click to upload or drag files here</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, JPG, PNG up to 25MB</p>
                  <input type="file" multiple onChange={handleFile} className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </label>
                {form.files.length > 0 && <div className="mt-3 space-y-2">{form.files.map((f, i) => (<div key={i} className="flex items-center justify-between bg-slate-50 rounded-sm px-4 py-2 text-sm"><span className="flex items-center gap-2 text-slate-600"><FileText className="w-4 h-4 text-blue-500" />{f.name}</span><button type="button" onClick={() => removeFile(i)} className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button></div>))}</div>}
              </div>
            )}
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Additional Details</label><textarea rows={3} value={form.details} onChange={e => setForm(f => ({...f, details: e.target.value}))} placeholder="Describe the project — number of buildings, units, specific needs..." className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none" /></div>
          </div>)}
          {step === 4 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Review and Submit</h2>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Qualification</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Decision Maker</span><span className="font-semibold text-slate-900">{form.decisionMaker === 'yes' ? 'Yes' : 'No'}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Plans Available</span><span className="font-semibold text-slate-900">{form.plansAvailable === 'yes' ? 'Yes — uploaded' : 'Not yet'}</span></div>
            </div>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Project</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Name</span><span className="font-semibold text-slate-900">{form.name}</span></div>
              {form.company && <div className="flex justify-between text-sm"><span className="text-slate-500">Company</span><span className="font-semibold text-slate-900">{form.company}</span></div>}
              <div className="flex justify-between text-sm"><span className="text-slate-500">Phone</span><span className="font-semibold text-slate-900">{form.phone}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Property Type</span><span className="font-semibold text-slate-900">{form.propertyType}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Location</span><span className="font-semibold text-slate-900">{form.location}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Budget</span><span className="font-semibold text-slate-900">{form.budget}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Scope</span><span className="font-semibold text-slate-900">{form.scope.join(', ')}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Timeline</span><span className="font-semibold text-slate-900">{form.timeline}</span></div>
              {form.files.length > 0 && <div className="flex justify-between text-sm"><span className="text-slate-500">Files</span><span className="font-semibold text-slate-900">{form.files.length} file(s) attached</span></div>}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 text-sm text-blue-800"><p>We will review your submission and respond within <strong>24 hours</strong>.</p></div>
            <button type="submit" disabled={submitting} className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-sm uppercase text-sm tracking-wider transition-all flex items-center justify-center gap-2">{submitting ? 'Submitting...' : <>Submit Request <ArrowRight className="w-4 h-4" /></>}</button>
          </div>)}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? <button type="button" onClick={back} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-semibold text-sm uppercase tracking-wider transition-colors"><ArrowLeft className="w-4 h-4" /> Back</button> : <div />}
            {step < steps.length - 1 && <button type="button" onClick={next} disabled={!canNext()} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold px-8 py-3 rounded-sm uppercase text-sm tracking-wider transition-all">Continue <ArrowRight className="w-4 h-4" /></button>}
          </div>
        </form>
        <div className="mt-8 flex items-center justify-center gap-8 text-slate-400 text-xs font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Licensed CGC and CCC</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Insured</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24hr Response</span>
        </div>
      </div>
    </div>
  )
}
