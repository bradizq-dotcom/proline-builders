'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, Upload, FileText, X, ArrowRight, ArrowLeft } from 'lucide-react'

const steps = ['Contact Info', 'Project Details', 'Scope', 'Timeline', 'Submit']

export default function GetAQuote() {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    projectType: '', location: '', budget: '',
    scope: [] as string[], timeline: '', files: [] as File[],
    details: ''
  })

  const scopeOptions = ['Roofing', 'General Contracting', 'Project Management', 'Interior & Finishes', 'Permit Assistance', 'Other']

  const budgets = ['$50K – $100K', '$100K – $250K', '$250K – $500K', '$500K – $1M', '$1M+']

  const timelines = ['As Soon As Possible', '1 – 3 Months', '3 – 6 Months', '6+ Months']

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const toggleScope = (v: string) => {
    setForm(f => ({
      ...f,
      scope: f.scope.includes(v) ? f.scope.filter(x => x !== v) : [...f.scope, v]
    }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm(f => ({ ...f, files: [...f.files, ...Array.from(e.target.files)] }))
    }
  }

  const removeFile = (i: number) => {
    setForm(f => ({ ...f, files: f.files.filter((_, idx) => idx !== i) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission — real implementation would send to backend/email
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const leadValue = () => {
    if (form.budget.includes('$1M') || form.budget.includes('$5M')) return 'HOT'
    if (form.budget.includes('$500K') || form.budget.includes('$250K')) return 'WARM'
    return 'LOW'
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-display text-4xl font-bold text-slate-900 uppercase mb-4">Request Received</h1>
          <p className="text-slate-500 mb-2">Thank you, {form.name}. We've received your request and will be in touch within 24 hours.</p>
          <p className="text-slate-400 text-sm mb-8">Lead Priority: <span className={`font-bold ${leadValue() === 'HOT' ? 'text-red-600' : leadValue() === 'WARM' ? 'text-orange-600' : 'text-blue-600'}`}>{leadValue()}</span></p>
          <a href="/" className="text-blue-700 font-semibold text-sm uppercase tracking-wider hover:underline">← Back to Home</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase">Get a Quote</h1>
          <p className="text-slate-500 mt-3">Tell us about your project. We respond within 24 hours with a detailed proposal.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-between mb-10 bg-white rounded-sm p-1 border border-gray-100">
          {steps.map((s, i) => (
            <div key={i} className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${i === step ? 'bg-blue-700 text-white' : i < step ? 'bg-green-100 text-green-700' : 'text-gray-400'}`}>
              {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">

          {/* STEP 0: Contact Info */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Contact Information</h2>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                <input required type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="John Smith" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Organization</label>
                <input type="text" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  placeholder="Property Management Company" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="(555) 000-0000" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: Project Details */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Project Details</h2>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Type *</label>
                <select required value={form.projectType} onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-700 focus:outline-none focus:border-blue-500 transition-colors text-sm appearance-none bg-white">
                  <option value="">Select project type</option>
                  <option>Apartment Complex — Roofing</option>
                  <option>Apartment Complex — Full GC</option>
                  <option>Commercial Building</option>
                  <option>Multi-Family Residential</option>
                  <option>HOA / Community</option>
                  <option>New Construction</option>
                  <option>Renovation / Remodel</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Location (City) *</label>
                <input required type="text" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                  placeholder="Jacksonville, FL" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Estimated Budget Range *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {budgets.map(b => (
                    <button key={b} type="button" onClick={() => setForm(f => ({ ...f, budget: b }))}
                      className={`py-3 px-4 rounded-sm text-sm font-semibold border transition-all ${form.budget === b ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Scope */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Scope of Work</h2>
              <p className="text-slate-500 text-sm">Select all that apply.</p>
              <div className="grid grid-cols-2 gap-3">
                {scopeOptions.map(opt => (
                  <button key={opt} type="button" onClick={() => toggleScope(opt)}
                    className={`py-3 px-4 rounded-sm text-sm font-semibold border transition-all text-left flex items-center gap-2 ${form.scope.includes(opt) ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${form.scope.includes(opt) ? 'bg-white' : 'border-gray-400'}`}>
                      {form.scope.includes(opt) && <CheckCircle2 className="w-3 h-3 text-blue-700" />}
                    </div>
                    {opt}
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Additional Details</label>
                <textarea rows={4} value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                  placeholder="Describe the scope, number of buildings, units, specific needs..."
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none" />
              </div>
            </div>
          )}

          {/* STEP 3: Timeline + Upload */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Timeline & Documents</h2>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Project Timeline *</label>
                <div className="grid grid-cols-2 gap-3">
                  {timelines.map(t => (
                    <button key={t} type="button" onClick={() => setForm(f => ({ ...f, timeline: t }))}
                      className={`py-3 px-4 rounded-sm text-sm font-semibold border transition-all ${form.timeline === t ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Upload Plans / Photos (Optional)</label>
                <label className="block border-2 border-dashed border-gray-200 rounded-sm p-8 text-center cursor-pointer hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Click to upload or drag files here</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, JPG, PNG up to 25MB</p>
                  <input type="file" multiple onChange={handleFile} className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </label>
                {form.files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {form.files.map((f, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 rounded-sm px-4 py-2 text-sm">
                        <span className="flex items-center gap-2 text-slate-600">
                          <FileText className="w-4 h-4 text-blue-500" />
                          {f.name}
                        </span>
                        <button type="button" onClick={() => removeFile(i)} className="text-slate-400 hover:text-red-500">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Submit */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Review & Submit</h2>
              <div className="bg-slate-50 rounded-sm p-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Name</span>
                  <span className="font-semibold text-slate-900">{form.name}</span>
                </div>
                {form.company && <div className="flex justify-between">
                  <span className="text-slate-500">Company</span>
                  <span className="font-semibold text-slate-900">{form.company}</span>
                </div>}
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone</span>
                  <span className="font-semibold text-slate-900">{form.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email</span>
                  <span className="font-semibold text-slate-900">{form.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Project Type</span>
                  <span className="font-semibold text-slate-900">{form.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location</span>
                  <span className="font-semibold text-slate-900">{form.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Budget</span>
                  <span className="font-semibold text-blue-700">{form.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scope</span>
                  <span className="font-semibold text-slate-900">{form.scope.join(', ') || 'None selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Timeline</span>
                  <span className="font-semibold text-slate-900">{form.timeline}</span>
                </div>
                {form.files.length > 0 && <div className="flex justify-between">
                  <span className="text-slate-500">Files</span>
                  <span className="font-semibold text-slate-900">{form.files.length} file(s) attached</span>
                </div>}
              </div>
              <p className="text-xs text-slate-400 text-center">By submitting, you agree to be contacted by Pro-Line Builders regarding your project request.</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <button type="button" onClick={back}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-semibold text-sm uppercase tracking-wider transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {step < steps.length - 1 ? (
              <button type="button" onClick={next}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="submit" disabled={submitting}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all disabled:opacity-50">
                {submitting ? 'Submitting...' : 'Submit Request'} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-8 bg-blue-950 text-white rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white">Prefer to talk directly?</h3>
            <p className="text-blue-200 text-sm mt-1">Call us for an immediate conversation about your project.</p>
          </div>
          <a href="tel:7276422953" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wider transition-all whitespace-nowrap">
            <Phone className="w-4 h-4" /> (727) 642-2953
          </a>
        </div>

      </div>
    </div>
  )
}
