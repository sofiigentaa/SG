import React, { useState } from 'react';
import { AlertCircle, Clock, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Send, DollarSign } from 'lucide-react';
import { ContactFormData } from '../types';

interface HeroProps {
  onSubmitContact: (data: ContactFormData) => void;
  formPreset?: string;
}

export const Hero: React.FC<HeroProps> = ({ onSubmitContact, formPreset = '' }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState(formPreset || '');
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const chips = [
    { label: 'Fallas o errores en mi web/app', text: 'Tengo errores y problemas en mi web o sistema que necesito revisar y corregir.' },
    { label: 'Tareas manuales y repetitivas', text: 'Mi equipo o yo perdemos mucho tiempo copiando datos y haciendo tareas manuales repetitivas.' },
    { label: 'Tengo una traba y no sé cómo resolverla', text: 'Tengo un problema digital en mi negocio pero no sé qué solución técnica se necesita.' }
  ];

  const handleChipClick = (chip: typeof chips[0]) => {
    setSelectedChip(chip.label);
    setDescription(chip.text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !description.trim()) {
      onSubmitContact({
        name: name || 'Contacto Hero',
        contact: contact || 'Sin especificar',
        problemType: selectedChip || 'Consulta general',
        description: description || 'Consulta rápida desde el inicio'
      });
      return;
    }
    onSubmitContact({
      name,
      contact,
      problemType: selectedChip || 'Consulta rápida',
      description
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80 bg-slate-50">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Relief */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-wider uppercase border border-blue-200/80 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Automatización & Soluciones Digitales</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold tracking-wider uppercase border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>No necesitás saber de código para empezar</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900">
              ¿Tu sistema falla o tu equipo pierde horas en tareas repetitivas?
            </h1>

            {/* Subtitle with clear profit in money, time and accessible prices */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Resolvé lo que te frena y automatizá lo que te quita tiempo. <strong className="text-slate-900 font-semibold">Ganás plata evitando errores, ganás horas libres todas las semanas</strong> y accedés a soluciones directas con <strong className="text-blue-700 font-semibold">precios accesibles en $ argentinos</strong>.
            </p>

            {/* Two Core Pain Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              <div className="flex gap-3.5 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="bg-red-50 p-2.5 rounded-lg border border-red-100 shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">¿Errores y ventas caídas?</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Reviso tus aplicaciones y botones de pago para que cobres sin fallas ni clientes que se van frustrados.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-100 shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">¿Horas copiando y pegando?</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Automatizo tus rutinas de WhatsApp y Excel para que recuperes entre 10 y 20 horas por semana.
                  </p>
                </div>
              </div>
            </div>

            {/* Social / Human Proof Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold shadow-xs">
                    MF
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    SG
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shadow-xs">
                    ✓
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  &ldquo;Sofi entendió mi negocio enseguida y me ahorró horas de trabajo con una solución simple.&rdquo;
                </p>
              </div>
            </div>

            {/* Micro guarantees */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs font-semibold text-slate-500 pt-1">
              <div className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Respuesta directa en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Venta garantizada: si no funciona, no pagás</span>
              </div>
              <a
                href="#impacto"
                className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-bold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200"
              >
                <span>Descubrí cuánta plata y tiempo estás perdiendo ↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Conversion Action Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col gap-5 relative">
              <div className="space-y-1 text-left">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Contame qué está pasando
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Disponible
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase">
                  Te leo, analizo tu caso y te paso una propuesta accesible.
                </p>
              </div>

              {/* Quick selector chips */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  ¿Cuál es tu situación?
                </label>
                <div className="flex flex-col gap-1.5">
                  {chips.map((chip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleChipClick(chip)}
                      className={`text-left text-xs px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                        selectedChip === chip.label
                          ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold shadow-xs'
                          : 'bg-slate-50/80 border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fast Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="space-y-1 text-left">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Tu nombre
                  </label>
                  <input
                    id="hero-name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
                    Email o WhatsApp
                  </label>
                  <input
                    id="hero-contact-input"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Para poder responderte directamente"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">
                    ¿Con qué necesitás ayuda?
                  </label>
                  <textarea
                    id="hero-description-textarea"
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Contame qué tarea te quita tiempo o qué error te preocupa..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm resize-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <button
                  id="hero-submit-btn"
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer hover:shadow-xl active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mi consulta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500 font-medium">
                  🔒 Te responderé personalmente para entender tu caso. Sin compromiso ni costos ocultos.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
