import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Award, ArrowRight, FlaskConical, HeartHandshake, DollarSign } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenContact: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenContact }) => {
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

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[52px] left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-indigo-200" />

            {/* Pillar 1 */}
            <div className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Validación antes de cobrar
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No pagás hasta que la solución esté probada y veas con tus propios ojos que resuelve tu problema en tu entorno real.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  30 días de acompañamiento
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Si algo desvía su comportamiento o tenés dudas de uso durante las primeras 4 semanas, lo ajusto sin ningún costo extra.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Precios accesibles en $ argentinos
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Presupuesto cerrado en pesos argentinos, sin tarifas en dólares ni sorpresas. Inversión accesible que recuperás en las primeras semanas con el tiempo y las ventas salvadas.
                </p>
              </div>
            </div>

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
