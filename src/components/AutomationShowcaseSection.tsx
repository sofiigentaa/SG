import React from 'react';
import { ShieldCheck, Handshake, Wallet, MessageCircle, Cpu, FileSpreadsheet, ArrowRight } from 'lucide-react';

export const AutomationShowcaseSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust bar: no invented numbers, just real commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-snug">
              Garantía total: si no funciona, no pagás
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Handshake className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-snug">
              Trato directo, sin intermediarios
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-snug">
              Precios accesibles en pesos argentinos
            </span>
          </div>
        </div>

        {/* Animated automation flow ("video" of how it works) */}
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 overflow-hidden relative">
          <div className="relative z-10 text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 text-xs font-bold tracking-wider uppercase border border-blue-800/80">
              Así se ve una automatización en acción
            </span>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">

            {/* Node 1 */}
            <div className="flex flex-col items-center gap-2 w-40">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 text-center">Pedido por WhatsApp</span>
            </div>

            {/* Connector 1 */}
            <div className="relative w-16 h-1 sm:w-20 rotate-90 sm:rotate-0">
              <div className="absolute inset-0 rounded-full bg-slate-700" />
              <div className="sg-flow-dot" />
            </div>

            {/* Node 2 (center, pulsing) */}
            <div className="flex flex-col items-center gap-2 w-40">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 sg-pulse">
                <Cpu className="w-9 h-9 text-white" />
              </div>
              <span className="text-xs font-bold text-white text-center">Automatización SG</span>
            </div>

            {/* Connector 2 */}
            <div className="relative w-16 h-1 sm:w-20 rotate-90 sm:rotate-0">
              <div className="absolute inset-0 rounded-full bg-slate-700" />
              <div className="sg-flow-dot" style={{ animationDelay: '1s' }} />
            </div>

            {/* Node 3 */}
            <div className="flex flex-col items-center gap-2 w-40">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <FileSpreadsheet className="w-7 h-7 text-blue-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 text-center">Cargado en tu sistema, solo</span>
            </div>
          </div>

          <p className="relative z-10 text-center text-xs text-slate-400 mt-10 max-w-md mx-auto leading-relaxed">
            Un ejemplo simplificado: un pedido entra, la automatización lo procesa y tu planilla o sistema se actualiza sin que nadie toque una tecla.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes sg-flow {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .sg-flow-dot {
          position: absolute;
          top: 50%;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #60a5fa;
          transform: translateY(-50%);
          animation: sg-flow 2s linear infinite;
        }
        @keyframes sg-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .sg-pulse {
          animation: sg-pulse 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
