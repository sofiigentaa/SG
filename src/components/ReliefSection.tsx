import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Zap, Code2, DollarSign, Clock, Wrench, MessageCircle, TrendingUp, ThumbsUp } from 'lucide-react';

export const ReliefSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 mb-6">
            <Zap className="w-4 h-4" />
            <span>Automatización sin vueltas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Vos conocés tu negocio. <br className="hidden sm:inline" />
            <span className="text-blue-400">Yo me encargo de la tecnología.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Para solucionar una traba o automatizar tu trabajo <strong className="text-white">no necesitás saber de código</strong>, ni entender de servidores, ni pagar presupuestos inflados en dólares.
          </p>
        </motion.div>

        {/* Contrast Comparison Grid: Lo que NO necesitás vs Lo ÚNICO que necesitás */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 text-left">
          
          {/* Card: Lo que NO necesitás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 backdrop-blur-xs flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-red-400 text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-slate-700/80">
                <XCircle className="w-5 h-5" />
                <span>Lo que NO necesitás</span>
              </div>
              
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">No necesitás saber de código</strong> ni términos de informática raros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">No necesitás presupuestos en dólares</strong> ni tarifas corporativas imposibles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">No necesitás perder semanas</strong> en reuniones interminables que no resuelven nada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-950/80 border border-red-800 text-red-400 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">No necesitás saber qué herramienta usar:</strong> ese análisis es 100% mi trabajo.</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
              Quitate esa carga de encima: no contratás código, contratás que tu problema deje de existir.
            </p>
          </motion.div>

          {/* Card: Lo ÚNICO que necesitás */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-gradient-to-b from-blue-950/60 to-slate-900/90 border border-emerald-500/30 backdrop-blur-xs flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-extrabold uppercase tracking-wider mb-6 pb-3 border-b border-blue-900/80">
                <CheckCircle2 className="w-5 h-5" />
                <span>Lo ÚNICO que necesitás</span>
              </div>

              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">Contarme en tus palabras</strong> qué tarea te come tiempo o qué error te frena.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">Ganas de ganar plata y tiempo:</strong> automatizar para vender más y trabajar más relajado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">Precios accesibles en $ argentinos:</strong> acordes a la realidad de tu negocio y con presupuesto cerrado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <ThumbsUp className="w-4 h-4" />
                  </span>
                  <span><strong className="text-white">Garantía total:</strong> si no funciona como acordamos, no pagás un solo peso.</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 pt-4 border-t border-blue-900/60 text-xs text-blue-200 font-medium">
              Mi trabajo es darte la solución más directa, segura y rentable en pesos argentinos.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
