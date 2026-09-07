import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 sm:px-10 py-8 border-t border-slate-200 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Trust Badges */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
            Proceso 100% Humano
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
            No necesitás saber de código para empezar
          </span>
        </div>
      </div>

      {/* Brand & Scroll to Top */}
      <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} SG Solutions</span>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-blue-600 transition-colors flex items-center gap-1 p-1 rounded hover:bg-slate-100 cursor-pointer"
          title="Volver arriba"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="sr-only">Subir</span>
        </motion.button>
      </div>

    </footer>
  );
};
