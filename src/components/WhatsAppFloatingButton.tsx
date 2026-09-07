import React from 'react';
import { MessageCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// IMPORTANTE: reemplazá el número de abajo por tu WhatsApp real.
// Formato: código de país + número, SIN espacios, SIN "+", SIN 0 ni 15.
// Ejemplo Argentina (Rosario, celular): 5493416123456
// ─────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5493413130336';
const DEFAULT_MESSAGE = 'Hola Sofi! Vi tu web y quiero contarte un problema que tengo en mi negocio.';

export const WhatsAppFloatingButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribirme por WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 sg-wa-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/40 transition-all cursor-pointer">
        <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
      </span>
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Escribime por WhatsApp
      </span>

      <style>{`
        @keyframes sg-wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .sg-wa-ping {
          animation: sg-wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </a>
  );
};
