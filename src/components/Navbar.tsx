import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (preset?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Top Reassurance Micro-Banner */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium border-b border-slate-800 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold uppercase tracking-wider text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/80">
          <ShieldCheck className="w-3 h-3" />
          Venta Garantizada
        </span>
        <span className="text-slate-200">
          <strong>No necesitás saber de código para empezar.</strong> Solo me contás qué te traba y yo me encargo del resto.
        </span>
        <a 
          href="#garantia" 
          className="text-blue-400 hover:text-blue-300 underline font-semibold text-[11px] hidden sm:inline"
        >
          Ver garantía de 0 riesgo →
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
              SG
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center">
                SG SOLUTIONS<span className="text-blue-600">.</span>
              </div>
              <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase hidden sm:block">
                Automatización & Soluciones Digitales
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#problemas" className="hover:text-blue-600 transition-colors">
              ¿Te pasa esto?
            </a>
            <a href="#impacto" className="hover:text-blue-600 transition-colors flex items-center gap-1 text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              <span>Cuánto estás perdiendo</span>
            </a>
            <a href="#soluciones" className="hover:text-blue-600 transition-colors">
              Soluciones
            </a>
            <a href="#garantia" className="hover:text-blue-600 transition-colors">
              Garantía
            </a>
            <a href="#casos" className="hover:text-blue-600 transition-colors">
              Casos reales
            </a>
            <a href="#sobre-mi" className="hover:text-blue-600 transition-colors">
              Sobre mí
            </a>
          </nav>

        </div>
      </header>
    </>
  );
};
