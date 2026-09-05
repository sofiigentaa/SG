import React from 'react';
import { CheckCircle2, XCircle, Zap, ShieldCheck } from 'lucide-react';

export const ReliefSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 text-blue-300 text-xs font-bold tracking-wider uppercase border border-blue-800/80 mb-6">
          <Zap className="w-4 h-4 text-blue-400" />
          <span>Automatización sin vueltas</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Vos conocés tu negocio. <br className="hidden sm:inline" />
          <span className="text-blue-400">Yo me encargo de la tecnología.</span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Para solucionar una traba o automatizar tu trabajo <strong className="text-white">no necesitás saber de código</strong>, ni entender de servidores, ni pagar presupuestos inflados en dólares.
        </p>

        {/* Contrast Comparison Grid: Lo que NO necesitás vs Lo ÚNICO que necesitás */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 text-left">
          
          {/* Card: Lo que NO necesitás */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border-2 border-red-500/30 backdrop-blur-xs flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-red-400 text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-slate-700/80">
                <XCircle className="w-5 h-5" />
                <span>Lo que NO necesitás</span>
              </div>
              
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 border border-red-800 text-red-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                  <span><strong className="text-white">No necesitás saber de código</strong> ni términos de informática raros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 border border-red-800 text-red-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                  <span><strong className="text-white">No necesitás presupuestos en dólares</strong> ni tarifas corporativas imposibles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 border border-red-800 text-red-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                  <span><strong className="text-white">No necesitás perder semanas</strong> en reuniones interminables que no resuelven nada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950/80 border border-red-800 text-red-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                  <span><strong className="text-white">No necesitás saber qué herramienta usar:</strong> ese análisis es 100% mi trabajo.</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
              Quitate esa carga de encima: no contratás código, contratás que tu problema deje de existir.
            </p>
          </div>

          {/* Card: Lo ÚNICO que necesitás */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-950/60 to-slate-900/90 border-2 border-emerald-500/40 backdrop-blur-xs flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-blue-900/80">
                <CheckCircle2 className="w-5 h-5" />
                <span>Lo ÚNICO que necesitás</span>
              </div>

              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong className="text-white">Contarme en tus palabras</strong> qué tarea te come tiempo o qué error te frena.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong className="text-white">Ganas de ganar plata y tiempo:</strong> automatizar para vender más y trabajar más relajado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong className="text-white">Precios accesibles en $ argentinos:</strong> acordes a la realidad de tu negocio y con presupuesto cerrado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong className="text-white">Garantía total:</strong> si no funciona como acordamos, no pagás un solo peso.</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 pt-4 border-t border-blue-900/60 text-xs text-blue-200 font-medium">
              Mi trabajo es darte la solución más directa, segura y rentable en pesos argentinos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
