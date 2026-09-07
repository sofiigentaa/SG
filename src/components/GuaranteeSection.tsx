import React, { useState } from 'react';
import { ShieldCheck, Lock, Award, ArrowRight, FlaskConical, HeartHandshake, DollarSign, ChevronDown } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenContact: () => void;
}

const PILLARS = [
  {
    id: 'validation',
    icon: FlaskConical,
    color: 'blue',
    title: 'Validación antes de cobrar',
    short: 'No pagás hasta verlo funcionar en tu entorno real.',
    detail: 'Implemento la solución, la pruebo en tu caso concreto y recién ahí la vemos juntos funcionando. Si no resuelve lo que te prometí, no me pagás nada.'
  },
  {
    id: 'support',
    icon: HeartHandshake,
    color: 'emerald',
    title: '30 días de acompañamiento',
    short: 'Ajustes gratis durante el primer mes.',
    detail: 'Si algo se desvía o te surge una duda de uso en las primeras 4 semanas, lo reviso y lo ajusto sin ningún costo extra. No te dejo sola con el sistema recién entregado.'
  },
  {
    id: 'price',
    icon: DollarSign,
    color: 'indigo',
    title: 'Precios accesibles en $ argentinos',
    short: 'Presupuesto cerrado, sin sorpresas.',
    detail: 'Nada de tarifas en dólares ni horas abiertas. Cerramos un número en pesos argentinos antes de empezar, y ese es el número final.'
  }
];

const colorMap: Record<string, { bg: string; ring: string; text: string; shadow: string }> = {
  blue: { bg: 'bg-blue-600', ring: 'ring-blue-200', text: 'text-blue-700', shadow: 'shadow-blue-200' },
  emerald: { bg: 'bg-emerald-600', ring: 'ring-emerald-200', text: 'text-emerald-700', shadow: 'shadow-emerald-200' },
  indigo: { bg: 'bg-indigo-600', ring: 'ring-indigo-200', text: 'text-indigo-700', shadow: 'shadow-indigo-200' }
};

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState<string>('validation');

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Guarantee Box */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-50/80 via-slate-50 to-emerald-50/50 border-2 border-blue-200 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  Cero riesgo para vos
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Garantía de tranquilidad y funcionamiento
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Venta Garantizada 100%</span>
            </div>
          </div>

          {/* Clickable pillars - only the open one shows its full text */}
          <div className="space-y-3 mb-8">
            {PILLARS.map((pillar) => {
              const isOpen = openId === pillar.id;
              const colors = colorMap[pillar.color];
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? `bg-white border-slate-200 shadow-md ring-1 ${colors.ring}` : 'bg-white/60 border-slate-200/80 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : pillar.id)}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
                  >
                    <div className={`w-11 h-11 rounded-xl ${colors.bg} text-white flex items-center justify-center shrink-0 shadow-md ${colors.shadow}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {pillar.title}
                      </h4>
                      {!isOpen && (
                        <p className="text-xs text-slate-500 truncate">{pillar.short}</p>
                      )}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className={`text-sm text-slate-600 leading-relaxed px-5 pb-5 pl-[76px] ${colors.text}`}>
                        <span className="text-slate-600">{pillar.detail}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Reassurance Callout */}
          <div className="bg-white/80 p-5 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>¿Por qué puedo ofrecer esto?</strong> Porque no adivino ni improviso: analizo tu caso, elijo la herramienta justa y valido exhaustivamente cada resultado con pruebas antes de entregártelo.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Quiero una solución garantizada</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
