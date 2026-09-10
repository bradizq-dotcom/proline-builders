'use client'
import { useState } from 'react'
import { CheckCircle2, FileText, ArrowRight, ArrowLeft, Shield, Clock, FileCheck } from 'lucide-react'

const steps = ['Empresa', 'Oficio', 'Licencias', 'Experiencia', 'Enviar']
const trades = ['Techado', 'Drywall', 'Pintura', 'Pisos', 'Mano de Obra General', 'Concreto', 'Plomería', 'Electricidad', 'HVAC', 'Otro']
const crewSizes = ['1-5', '6-10', '11-20', '20+']
const projectSizes = ['Menos de 50K', '50K a 250K', '250K a 1M', '1M+']
const availabilities = ['Disponible Ahora', '30 Días', '60+ Días']

export default function WorkWithUsEs() {
  const [step, setStep] = useState(0)
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
  const buildMailto = () => {
    const lines = [
      `Empresa: ${form.companyName}`,
      `Contacto: ${form.contactName}`,
      `Teléfono: ${form.phone}`,
      `Correo: ${form.email}`,
      `Área de Servicio: ${form.serviceArea || '—'}`,
      `Oficios: ${form.trade.join(', ')}`,
      `Tamaño del Equipo: ${form.crewSize}`,
      `Tamaño Típico de Proyecto: ${form.typicalProjectSize}`,
      `Años en el Negocio: ${form.yearsInBusiness || '—'}`,
      `Tipo de Licencia: ${form.licenseType}`,
      `Número de Licencia: ${form.licenseNumber}`,
      `Experiencia: ${form.experience || '—'}`,
      `Clientes Importantes: ${form.notableClients || '—'}`,
      `Disponibilidad: ${form.availability}`,
    ]
    const subject = encodeURIComponent(`Solicitud de Subcontratista — ${form.companyName}`)
    const body = encodeURIComponent(lines.join('\n'))
    return `mailto:bradizq@prolinebuilders.com?subject=${subject}&body=${body}`
  }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); window.location.href = buildMailto(); setSubmitted(true) }
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-10 h-10 text-green-600" /></div>
          <h1 className="font-display text-4xl font-bold text-slate-900 uppercase mb-4">Revise Su Correo</h1>
          <p className="text-slate-500 mb-2">Gracias, {form.contactName} — su aplicación de correo debería haberse abierto con su solicitud lista. Solo presione enviar y la revisaremos pronto.</p>
          <p className="text-slate-400 text-sm mb-8">¿No se abrió su correo? <a href={buildMailto()} className="text-blue-700 font-semibold hover:underline">Haga clic aquí para abrirlo manualmente</a>.</p>
          <a href="/es/work-with-us" className="text-blue-700 font-semibold text-sm uppercase tracking-wider hover:underline">Volver al Inicio</a>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="/work-with-us" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">EN</a>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">ES</span>
          </div>
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Portal de Subcontratistas</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase mt-2">Trabaja con Nosotros</h1>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">Pro-Line Builders trabaja con subcontratistas calificados en Florida y Nashville. Envíe su información para ser considerado en proyectos proximos.</p>
        </div>
        <div className="flex items-center justify-between mb-10 bg-white rounded-sm p-1 border border-gray-100">
          {steps.map((s, i) => (<div key={i} className={"flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all " + (i === step ? 'bg-blue-700 text-white' : i < step ? 'bg-green-100 text-green-700' : 'text-gray-400')}>{s}</div>))}
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
          {step === 0 && (<div className="space-y-5">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Informacion de la Empresa</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nombre de la Empresa *</label><input required type="text" value={form.companyName} onChange={e => setForm(f => ({...f, companyName: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nombre de Contacto *</label><input required type="text" value={form.contactName} onChange={e => setForm(f => ({...f, contactName: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Teléfono *</label><input required type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Correo Electrónico *</label><input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Área de Servicio (Ciudades / Estados)</label><input type="text" value={form.serviceArea} onChange={e => setForm(f => ({...f, serviceArea: e.target.value}))} placeholder="Ej. Jacksonville, FL; Nashville, TN" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
          </div>)}
          {step === 1 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Oficio y Capacidad</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Oficio(s) * (seleccione todos los que aplican)</label><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {trades.map(t => (<button key={t} type="button" onClick={() => toggleTrade(t)} className={"py-3 px-4 rounded-sm text-sm font-semibold border-2 transition-all " + (form.trade.includes(t) ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{t}</button>))}
            </div></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Tamaño del Equipo *</label><div className="space-y-2">
                {crewSizes.map(c => (<button key={c} type="button" onClick={() => setForm(f => ({...f, crewSize: c}))} className={"w-full py-2 px-4 rounded-sm text-sm font-semibold border-2 transition-all text-left " + (form.crewSize === c ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{c} trabajadores</button>))}
              </div></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Tamaño Tipico de Proyecto *</label><div className="space-y-2">
                {projectSizes.map(p => (<button key={p} type="button" onClick={() => setForm(f => ({...f, typicalProjectSize: p}))} className={"w-full py-2 px-4 rounded-sm text-sm font-semibold border-2 transition-all text-left " + (form.typicalProjectSize === p ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{p}</button>))}
              </div></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Años en el Negocio</label><input type="number" min="0" value={form.yearsInBusiness} onChange={e => setForm(f => ({...f, yearsInBusiness: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
          </div>)}
          {step === 2 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Licencias y Seguro</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Tipo de Licencia *</label><input required type="text" value={form.licenseType} onChange={e => setForm(f => ({...f, licenseType: e.target.value}))} placeholder="Ej. CGC, CCC, Techado" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Número de Licencia *</label><input required type="text" value={form.licenseNumber} onChange={e => setForm(f => ({...f, licenseNumber: e.target.value}))} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            </div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Subir Certificado de Seguro (COI)</label><label className="block border-2 border-dashed border-gray-200 rounded-sm p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"><FileCheck className="w-6 h-6 text-gray-300 mx-auto mb-2" /><p className="text-sm text-slate-500">{form.coiFile ? form.coiFile.name : 'Haga clic para subir COI (PDF)'}</p><input type="file" onChange={handleCOI} className="hidden" accept=".pdf" /></label></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Subir W9 (Opcional)</label><label className="block border-2 border-dashed border-gray-200 rounded-sm p-6 text-center cursor-pointer hover:border-blue-400 transition-colors"><FileText className="w-6 h-6 text-gray-300 mx-auto mb-2" /><p className="text-sm text-slate-500">{form.w9File ? form.w9File.name : 'Haga clic para subir W9 (PDF)'}</p><input type="file" onChange={handleW9} className="hidden" accept=".pdf" /></label></div>
          </div>)}
          {step === 3 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Experiencia y Disponibilidad</h2>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Descripción Breve del Trabajo Anterior</label><textarea rows={4} value={form.experience} onChange={e => setForm(f => ({...f, experience: e.target.value}))} placeholder="Describa su experiencia - tipos de proyectos, clientes, alcance..." className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm resize-none" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Clientes Importantes (Opcional)</label><input type="text" value={form.notableClients} onChange={e => setForm(f => ({...f, notableClients: e.target.value}))} placeholder="Ej. BH Management, Olympus Property" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 text-sm" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Disponibilidad *</label><div className="grid grid-cols-3 gap-3">
              {availabilities.map(a => (<button key={a} type="button" onClick={() => setForm(f => ({...f, availability: a}))} className={"py-3 px-4 rounded-sm text-sm font-bold border-2 transition-all " + (form.availability === a ? 'bg-blue-700 border-blue-700 text-white' : 'border-gray-200 text-slate-600 hover:border-blue-400')}>{a}</button>))}
            </div></div>
          </div>)}
          {step === 4 && (<div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 uppercase mb-6 border-b border-gray-100 pb-4">Revisar y Enviar</h2>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Empresa</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Empresa</span><span className="font-semibold text-slate-900">{form.companyName}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Contacto</span><span className="font-semibold text-slate-900">{form.contactName}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Teléfono</span><span className="font-semibold text-slate-900">{form.phone}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Correo</span><span className="font-semibold text-slate-900">{form.email}</span></div>
              {form.serviceArea && <div className="flex justify-between text-sm"><span className="text-slate-500">Área de Servicio</span><span className="font-semibold text-slate-900">{form.serviceArea}</span></div>}
            </div>
            <div className="bg-slate-50 rounded-sm p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Oficio</h3>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Oficios</span><span className="font-semibold text-slate-900">{form.trade.join(', ')}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Tamaño del Equipo</span><span className="font-semibold text-slate-900">{form.crewSize}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Tamaño Tipico</span><span className="font-semibold text-slate-900">{form.typicalProjectSize}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500">Disponibilidad</span><span className="font-semibold text-slate-900">{form.availability}</span></div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 text-sm text-blue-800"><p>Los subcontratistas aprobados serán contactados a medida que estén disponibles los proyectos en Florida y Nashville.</p></div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-sm uppercase text-sm tracking-wider transition-all flex items-center justify-center gap-2">Enviar Solicitud <ArrowRight className="w-4 h-4" /></button>
          </div>)}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 0 ? <button type="button" onClick={back} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-semibold text-sm uppercase tracking-wider"><ArrowLeft className="w-4 h-4" /> Atrás</button> : <div />}
            {step < steps.length - 1 && <button type="button" onClick={next} disabled={!canNext()} className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white font-bold px-8 py-3 rounded-sm uppercase text-sm tracking-wider">Continuar <ArrowRight className="w-4 h-4" /></button>}
          </div>
        </form>
        <div className="mt-8 flex items-center justify-center gap-8 text-slate-400 text-xs font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-500" /> Licenciado CGC y CCC</span>
          <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-500" /> Completamente Asegurado</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-green-500" /> Revisión en 24hr</span>
        </div>
      </div>
    </div>
  )
}
