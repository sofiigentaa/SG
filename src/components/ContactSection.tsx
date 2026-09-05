import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, ArrowRight, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  presetText?: string;
  onFormSubmitted?: (data: ContactFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  presetText = '',
  onFormSubmitted
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [problemType, setProblemType] = useState('Consulta directa');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (presetText) {
      setDescription(presetText);
      // scroll to contact form smoothly
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [presetText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !description.trim()) return;

    const data: ContactFormData = {
      name,
      contact,
      problemType,
      description
    };

    setSubmitted(true);
    if (onFormSubmitted) {
      onFormSubmitted(data);
    }
  };

  const handleCopyMessage = () => {
    const textToCopy = `Hola Sofi, soy ${name || '[Mi Nombre]'}. Te contacto desde SG Solutions:\n${description}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Sofi, te contacto desde SG Solutions. ${name ? `Mi nombre es ${name}. ` : ''}${description || 'Quiero consultarte sobre un problema digital en mi negocio.'}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/80 text-blue-300 text-xs font-bold tracking-wider uppercase border border-blue-700">
            <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Contacto directo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            No tenés que saber cuál es la solución. <br className="hidden sm:inline" />
            <span className="text-blue-400">Solo tenés que contarme qué querés resolver.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Escribime abajo. Te leo, analizo tu situación con detenimiento y te respondo con una mirada honesta sobre cómo podemos encararlo.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200">
          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  ¡Mensaje recibido, {name}!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Muchas gracias por contarme lo que te pasa. Voy a analizar lo que me enviaste y te responderé a <strong>{contact}</strong> en menos de 24 horas.
                </p>
              </div>

              {/* Direct WhatsApp fallback option */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-3">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  ¿Preferís hablar ahora mismo por WhatsApp?
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    type="button"
                    onClick={openWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir en WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado' : 'Copiar mensaje'}</span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setDescription('');
                }}
                className="text-xs text-slate-400 hover:text-slate-600 underline"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Tu nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="¿Cómo te llamás?"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Email o WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-channel"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Para responderte directamente"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    ¿Con qué necesitás ayuda? <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-500 italic">
                    Explicámelo en tus propias palabras
                  </span>
                </div>
                <textarea
                  id="contact-description"
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Contame qué te está pasando, qué te está haciendo perder tiempo o qué te gustaría que funcione mejor..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none text-sm resize-none transition-all text-slate-900 placeholder:text-slate-400 leading-relaxed"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-xl shadow-blue-200 hover:shadow-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Contame qué está pasando</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tus datos son privados. La consulta inicial no tiene costo.</span>
                </div>
                <div className="font-semibold text-slate-600">
                  Respuesta garantizada en menos de 24 hs
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
