import { CaseStudy, LeadItem, SolutionItem } from '../types';
import { CASE_STUDIES, SOLUTIONS_DATA } from '../data/content';

const CASES_STORAGE_KEY = 'sg_solutions_projects_v2';
const LEADS_STORAGE_KEY = 'sg_solutions_leads_v2';
const SOLUTIONS_STORAGE_KEY = 'sg_solutions_offerings_v2';

const INITIAL_SAMPLE_LEADS: LeadItem[] = [
  {
    id: 'lead-1',
    name: 'Martín Cabrera',
    contact: '+54 9 11 4829-1290',
    problemType: 'Fallas o errores en mi web/app',
    description: 'Nuestra tienda online se cuelga a veces en el botón de pago después de las 20hs y estamos perdiendo ventas. Necesitamos revisarla urgente.',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    status: 'pendiente',
    notes: 'Prioritario. Falla intermitente en checkout de Mercado Pago.'
  },
  {
    id: 'lead-2',
    name: 'Carolina Méndez',
    contact: 'caro.mendez.estudio@gmail.com',
    problemType: 'Tareas manuales y repetitivas',
    description: 'Mi equipo pasa 4 horas los lunes copiando pedidos de WhatsApp a un Excel y facturando a mano. Queremos automatizarlo para ganar tiempo y evitar errores.',
    createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
    status: 'contactado',
    notes: 'Le escribí por WhatsApp enviando propuesta con precio cerrado en pesos.'
  },
  {
    id: 'lead-3',
    name: 'Julián Ibarra',
    contact: 'julian.ibarra@negocio.com',
    problemType: 'Tengo una traba y no sé cómo resolverla',
    description: 'Necesitábamos ordenar el envío de comprobantes a nuestros clientes y aceptó la propuesta a los dos días.',
    createdAt: new Date(Date.now() - 3600000 * 96).toISOString(),
    status: 'venta_ganada',
    notes: 'Cerrado. Proyecto entregado y facturado.'
  }
];

export function getStoredCases(): CaseStudy[] {
  try {
    const raw = localStorage.getItem(CASES_STORAGE_KEY);
    if (!raw) {
      const initialized = CASE_STUDIES.map(c => ({ ...c, isVisible: true }));
      localStorage.setItem(CASES_STORAGE_KEY, JSON.stringify(initialized));
      return initialized;
    }
    return JSON.parse(raw);
  } catch {
    return CASE_STUDIES.map(c => ({ ...c, isVisible: true }));
  }
}

export function saveStoredCases(cases: CaseStudy[]): void {
  try {
    localStorage.setItem(CASES_STORAGE_KEY, JSON.stringify(cases));
  } catch (e) {
    console.error('Error saving cases', e);
  }
}

export function getStoredSolutions(): SolutionItem[] {
  try {
    const raw = localStorage.getItem(SOLUTIONS_STORAGE_KEY);
    if (!raw) {
      const initialized = SOLUTIONS_DATA.map(s => ({ ...s, isVisible: true }));
      localStorage.setItem(SOLUTIONS_STORAGE_KEY, JSON.stringify(initialized));
      return initialized;
    }
    return JSON.parse(raw);
  } catch {
    return SOLUTIONS_DATA.map(s => ({ ...s, isVisible: true }));
  }
}

export function saveStoredSolutions(solutions: SolutionItem[]): void {
  try {
    localStorage.setItem(SOLUTIONS_STORAGE_KEY, JSON.stringify(solutions));
  } catch (e) {
    console.error('Error saving solutions', e);
  }
}

export function getStoredLeads(): LeadItem[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_LEADS));
      return INITIAL_SAMPLE_LEADS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_SAMPLE_LEADS;
  }
}

export function saveStoredLeads(leads: LeadItem[]): void {
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  } catch (e) {
    console.error('Error saving leads', e);
  }
}
