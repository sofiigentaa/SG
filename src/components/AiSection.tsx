import React from 'react';
import { Zap, Brain, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const AiSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle backdrop pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 text-blue-300 text-xs font-bold tracking-wider uppercase border border-blue-700">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Tecnología con sentido común</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Uso inteligencia artificial para trabajar más rápido. <br />
              <span className="text-blue-400">Y uso mi criterio técnico para que no falle.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Hoy abundan las promesas vacías sobre inteligencia artificial. En SG Solutions la utilizo como una potente herramienta de aceleración: me permite analizar escenarios, escribir código y prototipar soluciones en una fracción del tiempo tradicional.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Pero la herramienta no toma decisiones de negocio. <strong>El valor real está en el criterio y en la validación:</strong> saber exactamente qué pedirle, cómo integrarlo de forma segura en tu empresa y probar exhaustivamente cada detalle.
            </p>

            {/* Formula Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>IA = Velocidad</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reducción drástica de tiempos en análisis, desarrollo y pruebas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  <span>Criterio = Dirección</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Entender el problema real de tu negocio antes de tocar una sola tecla.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Testing = Seguridad</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Validación implacable para que nada se rompa en producción.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>Resultado: Soluciones rápidas, a medida y sin riesgo de caídas sorpresivas.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
