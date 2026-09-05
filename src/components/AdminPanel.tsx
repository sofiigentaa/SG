import React, { useState } from 'react';
import { CaseStudy, LeadItem, SolutionItem } from '../types';
import { 
  X, 
  Plus, 
  FolderGit2, 
  Users, 
  Trash2, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  Search,
  Save,
  Lightbulb,
  Lock,
  Trophy,
  Pencil
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Clave de acceso al panel. Es un candado simple para que solo
// vos entres a configurar la web. Si querés cambiarla, editá
// este valor y volvé a generar el sitio.
// ─────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = 'sgsolutions2026';
const ADMIN_SESSION_KEY = 'sg_solutions_admin_unlocked';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cases: CaseStudy[];
  leads: LeadItem[];
  solutions: SolutionItem[];
  onSaveCase: (newCase: CaseStudy) => void;
  onDeleteCase: (id: string) => void;
  onToggleCaseVisibility: (id: string) => void;
  onUpdateLeadStatus: (id: string, status: LeadItem['status']) => void;
  onUpdateLeadNotes: (id: string, notes: string) => void;
  onSaveSolution: (newSolution: SolutionItem) => void;
  onUpdateSolution: (updatedSolution: SolutionItem) => void;
  onDeleteSolution: (id: string) => void;
  onToggleSolutionVisibility: (id: string) => void;
}

const emptySolutionForm = {
  title: '',
  tag: '',
  whatIDo: '',
  clientBenefit: '',
  ctaText: 'Quiero esta solución',
  presetTopic: '',
  priceNote: '',
  timeSaving: ''
};

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  cases,
  leads,
  solutions,
  onSaveCase,
  onDeleteCase,
  onToggleCaseVisibility,
  onUpdateLeadStatus,
  onUpdateLeadNotes,
  onSaveSolution,
  onUpdateSolution,
  onDeleteSolution,
  onToggleSolutionVisibility
}) => {
  // ── Login gate ──
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [activeTab, setActiveTab] = useState<'proyectos' | 'servicios' | 'leads'>('proyectos');
  const [showNewCaseForm, setShowNewCaseForm] = useState(false);

  // Form State for new project
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('Automatización de procesos');
  const [problem, setProblem] = useState('');
  const [initialSituation, setInitialSituation] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [solution, setSolution] = useState('');
  const [validation, setValidation] = useState('');
  const [result, setResult] = useState('');
  const [metricValue, setMetricValue] = useState('');
  const [metricLabel, setMetricLabel] = useState('');

  // Form state for services / "formas en las que puedo ayudarte"
  const [showSolutionForm, setShowSolutionForm] = useState(false);
  const [editingSolutionId, setEditingSolutionId] = useState<string | null>(null);
  const [solutionForm, setSolutionForm] = useState(emptySolutionForm);

  // Leads search
  const [leadSearch, setLeadSearch] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setLoginError(false);
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      } catch {
        // ignore storage errors
      }
    } else {
      setLoginError(true);
    }
  };

  const handleCloseAndLock = () => {
    onClose();
  };

  // ── Login Screen ──
  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center items-center p-4 animate-in fade-in">
        <div className="bg-white text-slate-900 w-full max-w-sm rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-6 flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold tracking-tight">Panel privado de SG Solutions</h2>
            <p className="text-xs text-slate-400">
              Este panel es solo para vos. Ingresá tu clave para configurar tus proyectos y servicios.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Clave de acceso
              </label>
              <input
                type="password"
                autoFocus
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError(false);
                }}
                placeholder="••••••••"
                className={`w-full px-3.5 py-3 rounded-xl bg-slate-50 border text-sm outline-none transition-colors ${
                  loginError ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                }`}
              />
              {loginError && (
                <p className="text-xs font-semibold text-red-600">Clave incorrecta. Probá de nuevo.</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCloseAndLock}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>Entrar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const handleCreateCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !problem.trim() || !solution.trim()) return;

    const newProject: CaseStudy = {
      id: `custom-case-${Date.now()}`,
      title,
      tag: tag || 'Solución a medida',
      problem,
      initialSituation: initialSituation || problem,
      analysis: analysis || 'Diagnóstico de cuello de botella y oportunidades.',
      solution,
      validation: validation || 'Pruebas y validación en escenario real.',
      result,
      metric: {
        value: metricValue || '100%',
        label: metricLabel || 'Efectividad validada'
      },
      createdAt: new Date().toISOString(),
      isVisible: true
    };

    onSaveCase(newProject);
    setShowNewCaseForm(false);
    // Reset form
    setTitle('');
    setProblem('');
    setInitialSituation('');
    setAnalysis('');
    setSolution('');
    setValidation('');
    setResult('');
    setMetricValue('');
    setMetricLabel('');
  };

  // ── Solutions / Servicios handlers ──
  const resetSolutionForm = () => {
    setSolutionForm(emptySolutionForm);
    setEditingSolutionId(null);
    setShowSolutionForm(false);
  };

  const handleStartEditSolution = (sol: SolutionItem) => {
    setEditingSolutionId(sol.id);
    setSolutionForm({
      title: sol.title,
      tag: sol.tag,
      whatIDo: sol.whatIDo,
      clientBenefit: sol.clientBenefit,
      ctaText: sol.ctaText,
      presetTopic: sol.presetTopic,
      priceNote: sol.priceNote || '',
      timeSaving: sol.timeSaving || ''
    });
    setShowSolutionForm(true);
  };

  const handleSubmitSolution = (e: React.FormEvent) => {
    e.preventDefault();
    if (!solutionForm.title.trim() || !solutionForm.whatIDo.trim() || !solutionForm.clientBenefit.trim()) return;

    if (editingSolutionId) {
      const existing = solutions.find((s) => s.id === editingSolutionId);
      onUpdateSolution({
        id: editingSolutionId,
        title: solutionForm.title,
        tag: solutionForm.tag || 'Solución a medida',
        whatIDo: solutionForm.whatIDo,
        clientBenefit: solutionForm.clientBenefit,
        ctaText: solutionForm.ctaText || 'Quiero esta solución',
        presetTopic: solutionForm.presetTopic || solutionForm.title,
        priceNote: solutionForm.priceNote || undefined,
        timeSaving: solutionForm.timeSaving || undefined,
        isVisible: existing?.isVisible !== false
      });
    } else {
      onSaveSolution({
        id: `custom-solution-${Date.now()}`,
        title: solutionForm.title,
        tag: solutionForm.tag || 'Solución a medida',
        whatIDo: solutionForm.whatIDo,
        clientBenefit: solutionForm.clientBenefit,
        ctaText: solutionForm.ctaText || 'Quiero esta solución',
        presetTopic: solutionForm.presetTopic || solutionForm.title,
        priceNote: solutionForm.priceNote || undefined,
        timeSaving: solutionForm.timeSaving || undefined,
        isVisible: true
      });
    }

    resetSolutionForm();
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.contact.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.description.toLowerCase().includes(leadSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-6 animate-in fade-in">
      <div className="bg-white text-slate-900 w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md">
              SG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight">Panel de Control</h2>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full border border-blue-700">
                  SG Solutions
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Configurá tus proyectos, tus servicios y revisá las consultas entrantes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Tabs switcher */}
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveTab('proyectos')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'proyectos'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Mis Proyectos ({cases.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('servicios')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'servicios'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Mis Servicios ({solutions.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('leads')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'leads'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Consultas ({leads.length})</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50">
          
          {/* TAB 1: PROYECTOS / CASOS */}
          {activeTab === 'proyectos' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Proyectos y Casos que resolviste
                  </h3>
                  <p className="text-xs text-slate-500">
                    Cargá cada problema que solucionaste para que aparezca en la sección de &ldquo;Casos reales&rdquo; de la web y demuestre tu valor a nuevos clientes.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowNewCaseForm(!showNewCaseForm)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showNewCaseForm ? 'Cerrar formulario' : 'Cargar nuevo proyecto resuelto'}</span>
                </button>
              </div>

              {/* Form to Add New Project */}
              {showNewCaseForm && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-blue-200 shadow-lg space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      Detalle del Proyecto Resuelto
                    </h4>
                    <span className="text-xs text-slate-400">
                      Sigue la estructura de conversión: Problema → Solución → Resultado
                    </span>
                  </div>

                  <form onSubmit={handleCreateCase} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Título del Caso *
                        </label>
                        <input
                          type="text"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Ej: Automatización de pedidos entre WhatsApp y hojas de cálculo"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Categoría / Etiqueta
                        </label>
                        <select
                          value={tag}
                          onChange={(e) => setTag(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 outline-none"
                        >
                          <option value="Automatización de procesos">Automatización de procesos</option>
                          <option value="Testing & Control de calidad">Testing & Control de calidad</option>
                          <option value="Diagnóstico y corrección de fallas">Diagnóstico y corrección de fallas</option>
                          <option value="Optimización operativa">Optimización operativa</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          1. Problema o dolor concreto *
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={problem}
                          onChange={(e) => setProblem(e.target.value)}
                          placeholder="Ej: El cliente perdía 3 horas al día copiando datos a mano y cometía errores."
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          2. Situación antes (cómo trabajaban)
                        </label>
                        <textarea
                          rows={2}
                          value={initialSituation}
                          onChange={(e) => setInitialSituation(e.target.value)}
                          placeholder="Ej: Recibían los pedidos por chat y una persona los pasaba uno por uno a mano."
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          3. Solución que implementaste *
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={solution}
                          onChange={(e) => setSolution(e.target.value)}
                          placeholder="Ej: Diseñé un flujo que captura los datos, valida los números y actualiza el registro en segundos."
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          4. Validación y pruebas
                        </label>
                        <textarea
                          rows={2}
                          value={validation}
                          onChange={(e) => setValidation(e.target.value)}
                          placeholder="Ej: Se probaron 40 casos con datos atípicos para comprobar que no fallara."
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        5. Resultado final tangible *
                      </label>
                      <input
                        type="text"
                        required
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                        placeholder="Ej: De 3 horas diarias pasaron a 0 segundos. Cero errores y clientes atendidos al instante."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Métrica Destacada (Valor)
                        </label>
                        <input
                          type="text"
                          value={metricValue}
                          onChange={(e) => setMetricValue(e.target.value)}
                          placeholder="Ej: 15 hs / sem o 0 fallas"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Métrica Destacada (Etiqueta descriptiva)
                        </label>
                        <input
                          type="text"
                          value={metricLabel}
                          onChange={(e) => setMetricLabel(e.target.value)}
                          placeholder="Ej: ahorradas para el equipo comercial"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setShowNewCaseForm(false)}
                        className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200"
                      >
                        <Save className="w-4 h-4" />
                        <span>Publicar proyecto en la web</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Projects List */}
              <div className="grid grid-cols-1 gap-4">
                {cases.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                          {project.tag}
                        </span>
                        {project.isVisible !== false ? (
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Visible en la web
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            Oculto
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        <strong>Resultado:</strong> {project.result}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onToggleCaseVisibility(project.id)}
                        className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                          project.isVisible !== false
                            ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                        }`}
                        title={project.isVisible !== false ? 'Ocultar de la web' : 'Hacer visible'}
                      >
                        {project.isVisible !== false ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        <span className="hidden sm:inline">
                          {project.isVisible !== false ? 'Ocultar' : 'Mostrar'}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDeleteCase(project.id)}
                        className="p-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer"
                        title="Eliminar proyecto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: SERVICIOS ("Formas claras en las que puedo ayudarte") */}
          {activeTab === 'servicios' && (
            <div className="space-y-6">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Formas claras en las que puedo ayudarte
                  </h3>
                  <p className="text-xs text-slate-500">
                    Estas son las tarjetas de servicios que ve cualquiera que entra a tu web. Editalas, ocultalas o agregá nuevas cuando cambies tu oferta.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (showSolutionForm) {
                      resetSolutionForm();
                    } else {
                      setSolutionForm(emptySolutionForm);
                      setEditingSolutionId(null);
                      setShowSolutionForm(true);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showSolutionForm ? 'Cerrar formulario' : 'Agregar nuevo servicio'}</span>
                </button>
              </div>

              {/* Form to Add / Edit a Solution */}
              {showSolutionForm && (
                <form onSubmit={handleSubmitSolution} className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-blue-200 shadow-lg space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      {editingSolutionId ? 'Editar servicio' : 'Nuevo servicio'}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Título del servicio *
                      </label>
                      <input
                        type="text"
                        required
                        value={solutionForm.title}
                        onChange={(e) => setSolutionForm({ ...solutionForm, title: e.target.value })}
                        placeholder="Ej: Automatización de tareas repetitivas"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Para quién es (etiqueta)
                      </label>
                      <input
                        type="text"
                        value={solutionForm.tag}
                        onChange={(e) => setSolutionForm({ ...solutionForm, tag: e.target.value })}
                        placeholder="Ej: Para quienes están atrapados en tareas manuales"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Qué hacés concretamente *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={solutionForm.whatIDo}
                      onChange={(e) => setSolutionForm({ ...solutionForm, whatIDo: e.target.value })}
                      placeholder="Ej: Analizo tus rutinas mecánicas y creo flujos que trabajan solos 24/7."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Ganancia en plata y tiempo para el cliente *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={solutionForm.clientBenefit}
                      onChange={(e) => setSolutionForm({ ...solutionForm, clientBenefit: e.target.value })}
                      placeholder="Ej: Ganás entre 10 y 20 horas libres por semana y ahorrás en personal extra."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Ahorro de tiempo (opcional)
                      </label>
                      <input
                        type="text"
                        value={solutionForm.timeSaving}
                        onChange={(e) => setSolutionForm({ ...solutionForm, timeSaving: e.target.value })}
                        placeholder="Ej: 10 a 20 hs / semana recuperadas"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Nota de precio (opcional)
                      </label>
                      <input
                        type="text"
                        value={solutionForm.priceNote}
                        onChange={(e) => setSolutionForm({ ...solutionForm, priceNote: e.target.value })}
                        placeholder="Ej: Precios accesibles en $ argentinos"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Texto del botón
                      </label>
                      <input
                        type="text"
                        value={solutionForm.ctaText}
                        onChange={(e) => setSolutionForm({ ...solutionForm, ctaText: e.target.value })}
                        placeholder="Ej: Quiero automatizar mi negocio"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mensaje que se precarga en el formulario de contacto
                    </label>
                    <input
                      type="text"
                      value={solutionForm.presetTopic}
                      onChange={(e) => setSolutionForm({ ...solutionForm, presetTopic: e.target.value })}
                      placeholder="Ej: Quiero automatizar un proceso repetitivo para ganar tiempo y ahorrar costos."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={resetSolutionForm}
                      className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingSolutionId ? 'Guardar cambios' : 'Publicar servicio en la web'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Services list */}
              <div className="grid grid-cols-1 gap-4">
                {solutions.length === 0 ? (
                  <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 space-y-2">
                    <Lightbulb className="w-8 h-8 mx-auto text-slate-300" />
                    <p className="text-sm font-semibold">Todavía no cargaste servicios. Agregá el primero.</p>
                  </div>
                ) : (
                  solutions.map((sol) => (
                    <div
                      key={sol.id}
                      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                            {sol.tag}
                          </span>
                          {sol.isVisible !== false ? (
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Visible en la web
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                              Oculto
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {sol.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          <strong>Ganancia:</strong> {sol.clientBenefit}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleStartEditSolution(sol)}
                          className="p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-all cursor-pointer"
                          title="Editar servicio"
                        >
                          <Pencil className="w-4 h-4" />
                          <span className="hidden sm:inline">Editar</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onToggleSolutionVisibility(sol.id)}
                          className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                            sol.isVisible !== false
                              ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                          }`}
                          title={sol.isVisible !== false ? 'Ocultar de la web' : 'Hacer visible'}
                        >
                          {sol.isVisible !== false ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          <span className="hidden sm:inline">
                            {sol.isVisible !== false ? 'Ocultar' : 'Mostrar'}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onDeleteSolution(sol.id)}
                          className="p-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer"
                          title="Eliminar servicio"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

          {/* TAB 3: CONSULTAS / LEADS */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Consultas recibidas ({leads.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Acá llegan automáticamente los mensajes del formulario de la web listos para responder.
                  </p>
                </div>

                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Buscar por nombre o tema..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white outline-none"
                  />
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 space-y-2">
                  <Users className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-sm font-semibold">No se encontraron consultas registradas.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className={`bg-white p-6 rounded-2xl border shadow-xs space-y-4 ${
                        lead.status === 'venta_ganada' ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-extrabold text-slate-900">
                              {lead.name}
                            </span>
                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                              {lead.contact}
                            </span>
                            {lead.status === 'venta_ganada' && (
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                                <Trophy className="w-3 h-3" /> Venta ganada
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400">
                            Recibido el {new Date(lead.createdAt).toLocaleDateString()} a las {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        {/* Status selector */}
                        <div className="flex items-center gap-2">
                          <label className="text-xs font-bold text-slate-500">Estado:</label>
                          <select
                            value={lead.status}
                            onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as LeadItem['status'])}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 bg-slate-50 outline-none"
                          >
                            <option value="pendiente">🟡 Pendiente</option>
                            <option value="contactado">🔵 Contactado</option>
                            <option value="en_analisis">🟣 En análisis</option>
                            <option value="venta_ganada">🏆 Venta ganada</option>
                            <option value="cerrado">🟢 Cerrado / Resuelto</option>
                          </select>
                        </div>
                      </div>

                      {/* Problem Description */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900 block mb-1">
                          ¿Qué le está pasando?:
                        </span>
                        {lead.description}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(`Hola ${lead.name}, te escribe Sofi de SG Solutions en respuesta a tu consulta sobre: "${lead.description.slice(0, 80)}..."`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Responder por WhatsApp</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(lead.contact);
                              alert(`Contacto ${lead.contact} copiado al portapapeles`);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                          >
                            Copiar contacto
                          </button>
                        </div>

                        {/* Internal notes */}
                        <div className="w-full sm:w-auto flex-1 max-w-sm">
                          <input
                            type="text"
                            defaultValue={lead.notes || ''}
                            onBlur={(e) => onUpdateLeadNotes(lead.id, e.target.value)}
                            placeholder="Agregar nota privada sobre este cliente..."
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 focus:bg-white outline-none"
                          />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
