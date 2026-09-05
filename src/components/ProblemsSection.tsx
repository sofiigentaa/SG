import React from 'react';
import { PROBLEMS_DATA } from '../data/content';
import { AlertOctagon, ArrowDownRight, MessageSquare } from 'lucide-react';

interface ProblemsSectionProps {
  onSelectProblem: (presetText: string) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onSelectProblem }) => {
  return (
    <section id="problemas" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
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

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${badgeClasses}`}>
                    {item.badge}
                  </span>
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
