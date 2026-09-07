import React from 'react';
import { PROBLEMS_DATA } from '../data/content';
import { AlertOctagon, ArrowDownRight, MessageSquare, AlertTriangle, Copy, Bug, LayoutGrid, HelpCircle } from 'lucide-react';

interface ProblemsSectionProps {
  onSelectProblem: (presetText: string) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onSelectProblem }) => {
  const getIcon = (id: string) => {
    if (id.includes('fear')) return <AlertTriangle className="w-5 h-5 text-red-600" />;
    if (id.includes('manual')) return <Copy className="w-5 h-5 text-amber-600" />;
    if (id.includes('ghost')) return <Bug className="w-5 h-5 text-red-600" />;
    if (id.includes('disorganized')) return <LayoutGrid className="w-5 h-5 text-purple-600" />;
    return <HelpCircle className="w-5 h-5 text-blue-600" />;
  };
  return (
    <section id="problemas" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
          <div className="text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase border border-slate-200">
              <AlertOctagon className="w-3.5 h-3.5 text-slate-500" />
              <span>Identificación del problema</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              ¿Te suena familiar alguna de estas situaciones?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              La mayoría de las personas y negocios que me consultan llegan lidiando con alguno de estos dolores cotidianos:
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/3] lg:aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1726649339367-c2577a28881b?auto=format&fit=crop&w=1200&q=80"
              alt="Persona frente a la computadora frustrada por tareas manuales repetitivas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="text-2xl font-black text-red-600 shrink-0">6</div>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                situaciones más comunes que le hacen perder tiempo y plata a tu negocio.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_DATA.map((item) => {
            const badgeClasses = {
              red: 'bg-red-50 text-red-700 border-red-200',
              amber: 'bg-amber-50 text-amber-700 border-amber-200',
              purple: 'bg-purple-50 text-purple-700 border-purple-200',
              blue: 'bg-blue-50 text-blue-700 border-blue-200',
              slate: 'bg-slate-50 text-slate-700 border-slate-200'
            }[item.badgeColor];

            const iconBoxClasses = {
              red: 'bg-red-50 border-red-100',
              amber: 'bg-amber-50 border-amber-100',
              purple: 'bg-purple-50 border-purple-100',
              blue: 'bg-blue-50 border-blue-100',
              slate: 'bg-slate-50 border-slate-100'
            }[item.badgeColor];

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className={`p-2.5 rounded-lg border shrink-0 ${iconBoxClasses}`}>
                      {getIcon(item.id)}
                    </div>
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider text-right ${badgeClasses}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col gap-3">
                  <p className="text-xs italic text-slate-500 bg-white/70 p-2.5 rounded-lg border border-slate-200/60">
                    {item.quote}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProblem(item.presetText)}
                    className="inline-flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors py-1 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Me pasa esto, quiero resolverlo
                    </span>
                    <ArrowDownRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Empathetic Wildcard */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-md transition-all">
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-blue-100/70 text-blue-800 border-blue-200 uppercase tracking-wider">
                Caso especial
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                ¿Tu situación no está en esta lista?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada negocio y cada sistema tiene particularidades. No tenés que encajar en una casilla prefabricada.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200/60">
              <button
                type="button"
                onClick={() => onSelectProblem('Tengo un problema particular en mi negocio y me gustaría contártelo para ver si se puede resolver.')}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all"
              >
                Contame tu caso puntual →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
