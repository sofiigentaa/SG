import React from 'react';
import { WORK_STEPS } from '../data/content';
import { Sparkles, MessageSquare, Search, Lightbulb, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-blue-600" key="1" />,
    <Search className="w-5 h-5 text-indigo-600" key="2" />,
    <Lightbulb className="w-5 h-5 text-amber-600" key="3" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-600" key="4" />
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <div className="text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Transparencia total</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Un proceso simple y predecible
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Sin presupuestos misteriosos ni pasos burocráticos. Así pasamos de un dolor de cabeza a un sistema que funciona:
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 aspect-[4/3] lg:aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
              alt="Planificando paso a paso la solución para un proceso digital"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-transparent" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all group"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  {stepIcons[idx]}
                </div>
                <span className="text-2xl font-black text-slate-300 group-hover:text-blue-500 transition-colors">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 max-w-3xl mx-auto text-center">
          <p className="text-sm text-blue-900 font-medium leading-relaxed">
            💡 <strong>Compromiso de honestidad:</strong> Si analizo tu caso y veo que se puede resolver con una herramienta gratuita que ya tenés, o que no tiene sentido hacer un desarrollo, te lo digo abiertamente. No invento trabajo innecesario.
          </p>
        </div>

      </div>
    </section>
  );
};
