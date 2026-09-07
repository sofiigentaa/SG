import React from 'react';
import { SolutionItem } from '../types';
import { ShieldCheck, Cpu, HelpCircle, ArrowRight, Check, Clock, DollarSign } from 'lucide-react';

interface SolutionsSectionProps {
  solutions: SolutionItem[];
  onSelectSolution: (presetTopic: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ solutions, onSelectSolution }) => {
  const getIconStyle = (id: string) => {
    if (id.includes('testing') || id.includes('app')) {
      return { icon: <ShieldCheck className="w-6 h-6 text-blue-700" />, box: 'bg-blue-50 border-blue-100' };
    }
    if (id.includes('auto') || id.includes('flujo')) {
      return { icon: <Cpu className="w-6 h-6 text-emerald-700" />, box: 'bg-emerald-50 border-emerald-100' };
    }
    return { icon: <HelpCircle className="w-6 h-6 text-indigo-700" />, box: 'bg-indigo-50 border-indigo-100' };
  };

  const visibleSolutions = solutions.filter(s => s.isVisible !== false);

  return (
    <section id="soluciones" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with supporting image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <div className="text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase">
              <span>Soluciones concretas a tu alcance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Formas claras en las que puedo ayudarte
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Sin paquetes inflados ni contratos forzados. Ganás plata y tiempo con soluciones directas y <strong className="text-slate-900 font-semibold">precios accesibles en pesos argentinos</strong>:
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/3] lg:aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1563968743333-044cef800494?auto=format&fit=crop&w=1200&q=80"
              alt="Brazo robótico automatizando tareas repetitivas en una línea de producción"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                Negocios reales, resultados medibles: menos tiempo perdido, más ventas.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSolutions.map((sol) => {
            const iconStyle = getIconStyle(sol.id);
            return (
            <div
              key={sol.id}
              className="flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className={`p-3 rounded-xl border group-hover:scale-105 transition-transform shrink-0 ${iconStyle.box}`}>
                    {iconStyle.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md text-right">
                    {sol.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {sol.title}
                </h3>

                {sol.timeSaving && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{sol.timeSaving}</span>
                  </div>
                )}

                <div className="space-y-1.5 pt-2.5 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                    Qué hago concretamente:
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {sol.whatIDo}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Ganancia en plata y tiempo:
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {sol.clientBenefit}
                  </p>
                </div>

                {sol.priceNote && (
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <span className="font-bold text-blue-700">$</span>
                    <span>{sol.priceNote}</span>
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectSolution(sol.presetTopic)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-all cursor-pointer"
                >
                  <span>{sol.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
