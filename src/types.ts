export interface ProblemItem {
  id: string;
  badge: string;
  badgeColor: 'red' | 'amber' | 'blue' | 'purple' | 'slate';
  title: string;
  description: string;
  quote: string;
  presetText: string;
}

export interface SolutionItem {
  id: string;
  tag: string;
  title: string;
  whatIDo: string;
  clientBenefit: string;
  ctaText: string;
  presetTopic: string;
  priceNote?: string;
  timeSaving?: string;
  isVisible?: boolean;
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  problem: string;
  initialSituation: string;
  analysis: string;
  solution: string;
  validation: string;
  result: string;
  metric: {
    value: string;
    label: string;
  };
  siteUrl?: string;
  createdAt?: string;
  isVisible?: boolean;
}

export interface ContactFormData {
  name: string;
  contact: string; // Email or WhatsApp
  problemType: string;
  description: string;
}

export interface LeadItem extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'pendiente' | 'contactado' | 'en_analisis' | 'venta_ganada' | 'cerrado';
  notes?: string;
}
