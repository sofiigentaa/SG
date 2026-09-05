import React from 'react';
import { TrendingUp, Clock, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface ValueImpactSectionProps {
  onOpenContactWithPreset: (preset: string) => void;
}

export const ValueImpactSection: React.FC<ValueImpactSectionProps> = ({ onOpenContactWithPreset }) => {
  return (
    <section id="impacto" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wider uppercase border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>La cuenta que pocos hacen</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ¿Cuánta plata y cuánto tiempo <br className="hidden sm:inline" />
            <span className="text-red-600">estás perdiendo todos los meses?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Muchos negocios conviven con procesos lentos o fallas porque creen que no resolverlo &ldquo;no cuesta nada&rdquo;. La realidad de los números es otra:
          </p>
        </div>

        {/* 3 High-Impact Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Horas de trabajo mecánico */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                  Pérdida en tiempo
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  15 a 20 horas por semana en tareas manuales
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Copiar datos de WhatsApp a Excel, armar reportes a mano o avisar pedidos uno por uno. Son más de <strong>60 horas al mes</strong> de trabajo mecánico que te impiden vender y te agotan mentalmente.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
                ⚠️ Equivale a medio sueldo mensual tirado en tareas que una máquina hace sola.
              </div>
            </div>
          </div>

          {/* Card 2: Clientes y ventas perdidas */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-bold">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700">
                  Pérdida en plata
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Ventas que se caen por fallas o demoras
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Un botón de pago que no responde, una web lenta o demorar 2 horas en pasar un presupuesto. El cliente de hoy no espera: <strong>si falla, le compra a tu competencia.</strong>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
                ⚠️ Con perder 2 ventas al mes ya estás perdiendo cientos de miles de pesos.
              </div>
            </div>
          </div>

          {/* Card 3: La solución accesible */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-50 to-emerald-50/60 border-2 border-blue-300 p-7 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-200">
                <TrendingUp className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  Ganancia neta y retorno rápido
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Precios accesibles en $ argentinos que se pagan solos
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Sin presupuestos en dólares ni tarifas infladas. Invertís un valor accesible en pesos argentinos por única vez y <strong>recuperás la inversión en 2 a 3 semanas</strong> con el tiempo y las ventas salvadas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200/80 relative z-10">
              <div className="text-xs font-extrabold text-emerald-800 bg-emerald-100/90 p-2.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>A partir del mes 2, es ganancia limpia de plata y tiempo.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Revelatory Bottom Banner with direct CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>No esperes a que sea más costoso</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              ¿Cuánto tiempo más vas a seguir perdiendo plata y horas por no automatizar?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Analicemos tu caso hoy mismo. Te digo con números claros cómo resolverlo con una solución simple y precio accesible en pesos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenContactWithPreset('Quiero ver cómo frenar la pérdida de tiempo y plata en mi negocio con una solución accesible en pesos.')}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 uppercase tracking-wider text-xs cursor-pointer active:scale-98"
          >
            <span>Quiero ganar tiempo y plata</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
