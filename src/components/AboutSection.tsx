import React from 'react';
import { UserCheck, ShieldCheck, MessageCircle, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Avatar & Personal Badge */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 text-white flex flex-col items-center justify-center font-black text-4xl shadow-xl shadow-blue-200/80 border-4 border-white">
                <span>SG</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-blue-100 mt-1">
                  Sofi Genta
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Disponible para nuevos proyectos">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Sofi Genta
              </h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Testing, Automatización & Soluciones Digitales
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Trato directo, sin intermediarios</span>
            </div>
          </div>

          {/* Bio & Philosophy */}
          <div className="md:col-span-8 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-wider uppercase border border-blue-200">
              <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
              <span>Cercanía y profesionalismo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Detrás de SG Solutions hay una persona real, no una agencia impersonal.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Trabajo en testing, automatización y desarrollo. A lo largo de mi trabajo vi repetirse el mismo patrón una y otra vez: personas y equipos sufriendo con sistemas que fallan, perdiendo horas valiosas en tareas mecánicas o sintiendo que la tecnología es un obstáculo en vez de una ayuda.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Mi enfoque es muy simple: <strong>entender primero tu problema real y después elegir la herramienta justa para resolverlo.</strong> Sin palabras difíciles, sin inventar complejidades y asegurándome de que todo lo que entregue esté probado y validado.
            </p>

            {/* Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Validación rigurosa antes de cada entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hablamos en tu idioma, sin jerga de programador</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
