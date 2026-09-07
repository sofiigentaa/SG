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
    
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribirme por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-md shadow-black/10 transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" fill="white" strokeWidth={0} />
    </a>
  );
};
