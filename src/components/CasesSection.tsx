import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/content';
import { CheckCircle2, FileText, Sparkles, TrendingUp, Github } from 'lucide-react';

interface CasesSectionProps {
  cases?: CaseStudy[];
  onOpenAdmin?: () => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ cases = CASE_STUDIES, onOpenAdmin }) => {
  const visibleCases = cases.filter(c => c.isVisible !== false);
  const activeCasesList = visibleCases.length > 0 ? visibleCases : CASE_STUDIES;

  const [activeCaseId, setActiveCaseId] = useState<string>(activeCasesList[0]?.id || 'case-1');

  useEffect(() => {
    if (!activeCasesList.some(c => c.id === activeCaseId)) {
      setActiveCaseId(activeCasesList[0]?.id || '');
    }
  }, [cases, activeCaseId]);

  const activeCase = activeCasesList.find((c) => c.id === activeCaseId) || activeCasesList[0];

  if (!activeCase) return null;

  return (
    <section id="casos" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300/80">
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>Evidencia real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            No solo lo digo. Así resuelvo problemas reales.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Casos demostrativos de cómo pasar de un proceso frágil o agotador a una solución probada y medible:
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto mb-8 overflow-x-auto pb-2">
          {activeCasesList.map((c) => {
            const isActive = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCaseId(c.id)}
                className={`flex-1 min-w-[200px] text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isActive
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-100 text-slate-900'
                    : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    {c.tag}
                  </div>
                  <div className="text-sm font-bold line-clamp-2 leading-snug">
                    {c.title}
                  </div>
                  <div className={`text-xs font-black mt-1 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                    {c.metric.value}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Detail Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 max-w-4xl mx-auto">
          
          {/* Top Tag & Title */}
          <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {activeCase.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 leading-tight">
                {activeCase.title}
              </h3>
              {activeCase.repoUrl && (
                <a
                  href={activeCase.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Ver el proyecto en GitHub</span>
                </a>
              )}
            </div>

            {/* Big Metric Box */}
            <div className="shrink-0 p-4 rounded-xl bg-slate-900 text-white text-center sm:text-right min-w-[170px]">
              <div className="text-3xl font-black text-blue-400">
                {activeCase.metric.value}
              </div>
              <div className="text-[11px] text-slate-300 font-medium mt-1 leading-tight">
                {activeCase.metric.label}
              </div>
            </div>
          </div>

          {/* Step by step flow */}
          <div className="space-y-6">
            
            {/* Situación Inicial & Problema */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                <div className="text-xs font-bold uppercase tracking-wider text-red-800 mb-2 flex items-center gap-1.5">
                  <span>1. Situación inicial & Dolor</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.initialSituation}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-100">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                  <span>2. El Análisis de fondo</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.analysis}
                </p>
              </div>
            </div>

            {/* Solución & Validación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2 flex items-center gap-1.5">
                  <span>3. Solución implementada</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-purple-50/50 border border-purple-100">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-2 flex items-center gap-1.5">
                  <span>4. Validación y pruebas rigurosas</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.validation}
                </p>
              </div>
            </div>

            {/* Resultado Final */}
            <div className="p-6 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  5. El Resultado tangible
                </div>
                <p className="text-base text-slate-900 font-semibold leading-relaxed">
                  {activeCase.result}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
