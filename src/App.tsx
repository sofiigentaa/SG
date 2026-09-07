import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AutomationShowcaseSection } from './components/AutomationShowcaseSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProblemsSection } from './components/ProblemsSection';
import { ValueImpactSection } from './components/ValueImpactSection';
import { ReliefSection } from './components/ReliefSection';
import { SolutionsSection } from './components/SolutionsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CasesSection } from './components/CasesSection';
import { AiSection } from './components/AiSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { ContactFormData, CaseStudy, LeadItem, SolutionItem } from './types';
import { 
  getStoredCases, 
  saveStoredCases, 
  getStoredLeads, 
  saveStoredLeads,
  getStoredSolutions,
  saveStoredSolutions
} from './utils/storage';
import { CheckCircle2 } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Acceso oculto al panel de administración. No hay ningún botón
// visible en la web para el público. Vos entrás de dos formas:
//   1) Guardando como favorito este link:  tudominio.com/#panel-sg
//   2) Con el atajo de teclado: Ctrl + Shift + L (en cualquier parte de la web)
// Si querés cambiar el link secreto, editá ADMIN_ACCESS_HASH.
// ─────────────────────────────────────────────────────────────
const ADMIN_ACCESS_HASH = '#panel-sg';

export default function App() {
  const [formPreset, setFormPreset] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Admin State & Data Persistence
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [solutions, setSolutions] = useState<SolutionItem[]>([]);

  useEffect(() => {
    setCases(getStoredCases());
    setLeads(getStoredLeads());
    setSolutions(getStoredSolutions());
  }, []);

  // Hidden admin access: secret bookmarkable URL + keyboard shortcut.
  // There is no visible button anywhere on the public site.
  useEffect(() => {
    const checkHashForAdmin = () => {
      if (window.location.hash === ADMIN_ACCESS_HASH) {
        setIsAdminOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setIsAdminOpen(true);
      }
    };

    checkHashForAdmin();
    window.addEventListener('hashchange', checkHashForAdmin);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHashForAdmin);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === ADMIN_ACCESS_HASH) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleSelectProblem = (presetText: string) => {
    setFormPreset(presetText);
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (preset?: string) => {
    if (preset) {
      setFormPreset(preset);
    }
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmitted = (data: ContactFormData) => {
    // 1. Create a new lead item
    const newLead: LeadItem = {
      ...data,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'pendiente'
    };

    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    saveStoredLeads(updatedLeads);

    // 2. Feedback toast
    setToastMessage(`¡Gracias ${data.name}! Recibí tu consulta. Te responderé personalmente en menos de 24 hs.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  // Case Management
  const handleSaveCase = (newCase: CaseStudy) => {
    const updated = [newCase, ...cases];
    setCases(updated);
    saveStoredCases(updated);
    setToastMessage(`Proyecto "${newCase.title}" publicado con éxito.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleDeleteCase = (id: string) => {
    if (confirm('¿Estás segura de eliminar este proyecto?')) {
      const updated = cases.filter((c) => c.id !== id);
      setCases(updated);
      saveStoredCases(updated);
    }
  };

  const handleToggleCaseVisibility = (id: string) => {
    const updated = cases.map((c) => 
      c.id === id ? { ...c, isVisible: c.isVisible === false ? true : false } : c
    );
    setCases(updated);
    saveStoredCases(updated);
  };

  // Solutions Management ("Formas claras en las que puedo ayudarte")
  const handleSaveSolution = (newSolution: SolutionItem) => {
    const updated = [newSolution, ...solutions];
    setSolutions(updated);
    saveStoredSolutions(updated);
    setToastMessage(`Servicio "${newSolution.title}" publicado con éxito.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleUpdateSolution = (updatedSolution: SolutionItem) => {
    const updated = solutions.map((s) => (s.id === updatedSolution.id ? updatedSolution : s));
    setSolutions(updated);
    saveStoredSolutions(updated);
    setToastMessage(`Servicio "${updatedSolution.title}" actualizado.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleDeleteSolution = (id: string) => {
    if (confirm('¿Estás segura de eliminar este servicio?')) {
      const updated = solutions.filter((s) => s.id !== id);
      setSolutions(updated);
      saveStoredSolutions(updated);
    }
  };

  const handleToggleSolutionVisibility = (id: string) => {
    const updated = solutions.map((s) =>
      s.id === id ? { ...s, isVisible: s.isVisible === false ? true : false } : s
    );
    setSolutions(updated);
    saveStoredSolutions(updated);
  };

  // Lead Management
  const handleUpdateLeadStatus = (id: string, status: LeadItem['status']) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    saveStoredLeads(updated);
  };

  const handleUpdateLeadNotes = (id: string, notes: string) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, notes } : l));
    setLeads(updated);
    saveStoredLeads(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 max-w-md">
          <div className="p-1 rounded-full bg-emerald-500 text-white shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs font-semibold leading-relaxed">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar 
        onOpenContact={handleOpenContact} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with high conversion card */}
        <Hero
          formPreset={formPreset}
          onSubmitContact={handleFormSubmitted}
        />

        {/* Trust bar + animated automation flow */}
        <AutomationShowcaseSection />

        {/* Section 2: Identification of Problems */}
        <ProblemsSection onSelectProblem={handleSelectProblem} />

        {/* Revelatory Section: The Invisible Cost of Inaction (gain in money & time) */}
        <ValueImpactSection onOpenContactWithPreset={handleSelectProblem} />

        {/* Section 3: Relief (Vos conocés tu negocio...) */}
        <ReliefSection />

        {/* Section 4: Solutions as Benefits */}
        <SolutionsSection solutions={solutions} onSelectSolution={handleSelectProblem} />

        {/* High Conversion Section: Venta Garantizada / Cero Riesgo */}
        <div id="garantia">
          <GuaranteeSection onOpenContact={() => handleOpenContact('Quiero consultar por una solución garantizada')} />
        </div>

        {/* Section 5: How It Works */}
        <HowItWorksSection />

        {/* Section 6: Real Cases and Evidence (Dynamic from storage) */}
        <CasesSection 
          cases={cases}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Section 7: AI as Differential (Speed + Judgment + Testing) */}
        <AiSection />

        {/* Section 8: About Sofi / Trust */}
        <AboutSection />

        {/* Section 9: Final Conversion CTA & Form */}
        <ContactSection
          presetText={formPreset}
          onFormSubmitted={handleFormSubmitted}
        />
      </main>

      {/* Footer with Admin Trigger */}
      <Footer />

      {/* Floating WhatsApp button, visible on every page */}
      <WhatsAppFloatingButton />

      {/* Admin Panel Modal for Sofi */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={handleCloseAdmin}
        cases={cases}
        leads={leads}
        solutions={solutions}
        onSaveCase={handleSaveCase}
        onDeleteCase={handleDeleteCase}
        onToggleCaseVisibility={handleToggleCaseVisibility}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onUpdateLeadNotes={handleUpdateLeadNotes}
        onSaveSolution={handleSaveSolution}
        onUpdateSolution={handleUpdateSolution}
        onDeleteSolution={handleDeleteSolution}
        onToggleSolutionVisibility={handleToggleSolutionVisibility}
      />

    </div>
  );
}
