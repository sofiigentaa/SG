import { ProblemItem, SolutionItem, CaseStudy } from '../types';

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'fear-of-breaking',
    badge: 'Miedo al cambio',
    badgeColor: 'red',
    title: 'Cada actualización o cambio genera miedo de romper otra cosa',
    description: 'Modificás un texto o agregás algo y temés que deje de funcionar el carrito, el botón de cobro o el login sin que nadie se dé cuenta, perdiendo ventas directas.',
    quote: '"Publico cambios cruzando los dedos para que ningún cliente me escriba diciendo que no puede pagar."',
    presetText: 'Cada vez que actualizamos o tocamos nuestro sistema o web, tenemos miedo de que se rompa algo importante y perdamos ventas.'
  },
  {
    id: 'manual-repetition',
    badge: 'Pérdida de plata y tiempo',
    badgeColor: 'amber',
    title: 'Tu equipo o vos pierden horas copiando y pegando la misma información',
    description: 'Pasar datos de planillas a correos, de WhatsApp a sistemas de facturación o de un archivo a otro. Una rutina lenta que te quita tiempo de ventas y genera errores costosos.',
    quote: '"Pasamos horas haciendo tareas de mono que una automatización debería resolver en segundos."',
    presetText: 'Perdemos mucho tiempo y plata haciendo tareas manuales repetitivas (copiar/pegar datos, armar reportes, avisos a clientes).'
  },
  {
    id: 'ghost-errors',
    badge: 'Fallas intermitentes',
    badgeColor: 'red',
    title: 'Errores fantasma que aparecen y desaparecen en tu aplicación',
    description: 'Problemas que no sabés cómo reproducir, clientes que reportan fallas y no lográs identificar qué está pasando ni cómo solucionarlo definitivamente.',
    quote: '"A algunos clientes les falla y a otros no, y estamos perdiendo operaciones todos los días."',
    presetText: 'Tenemos errores intermitentes en nuestra web/aplicación y necesitamos revisarla a fondo para no perder clientes.'
  },
  {
    id: 'disorganized-process',
    badge: 'Desorden operativo',
    badgeColor: 'purple',
    title: 'Tenés procesos desorganizados que te impiden crecer',
    description: 'Sabés que tu forma de trabajar te hace perder tiempo y dinero, pero no tenés el tiempo ni el foco para investigar qué herramienta o método implementar.',
    quote: '"Sentimos que el negocio creció pero el desorden nos come horas y rentabilidad."',
    presetText: 'Nuestros procesos y herramientas están desorganizados y necesitamos ordenarlos de forma práctica.'
  },
  {
    id: 'uncertainty',
    badge: 'Incertidumbre',
    badgeColor: 'blue',
    title: 'Tenés un problema pero temés que te cobren presupuestos imposibles',
    description: 'No sabés si necesitás un software a medida, una automatización sencilla o revisar lo que ya tenés. Te da miedo pedir ayuda y que te pasen presupuestos en dólares o tarifas corporativas inalcanzables.',
    quote: '"Sé lo que me duele, pero quiero un precio accesible en pesos y soluciones que funcionen."',
    presetText: 'Tengo un problema concreto en mi negocio y busco una solución a precio accesible en pesos argentinos.'
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'automation',
    tag: 'Para quienes están atrapados en tareas manuales',
    title: 'Automatización de tareas repetitivas y flujos de datos',
    whatIDo: 'Analizo tus rutinas mecánicas (pedidos de WhatsApp, planillas de Excel, avisos automáticos a clientes, facturación) y creo flujos que trabajan solos 24/7.',
    clientBenefit: 'Ganás entre 10 y 20 horas libres por semana, eliminás los errores humanos y ahorrás plata al no necesitar personal extra para tareas repetitivas.',
    ctaText: 'Quiero automatizar mi negocio',
    presetTopic: 'Quiero automatizar un proceso repetitivo para ganar tiempo y ahorrar costos.',
    priceNote: 'Precios accesibles en $ argentinos acordes al tamaño de tu negocio',
    timeSaving: '10 a 20 hs / semana recuperadas'
  },
  {
    id: 'app-testing',
    tag: 'Para quienes tienen una web, tienda o aplicación',
    title: 'Revisión y pruebas automáticas para que nunca pierdas una venta',
    whatIDo: 'Reviso a fondo tu aplicación, encuentro los errores antes que tus clientes y creo pruebas automáticas para que el carrito, pagos y formularios funcionen siempre bien.',
    clientBenefit: 'Garantizás cada cobro, evitás que tus clientes se frustren y vayan a la competencia, y ganás la tranquilidad de actualizar sin romper nada.',
    ctaText: 'Quiero revisar mi aplicación',
    presetTopic: 'Quiero revisar mi aplicación o sistema para evitar errores y caídas.',
    priceNote: 'Presupuesto cerrado en $ argentinos sin costos ocultos',
    timeSaving: 'Cero caídas inadvertidas'
  },
  {
    id: 'diagnosis',
    tag: 'Para quienes tienen una traba y no saben por dónde empezar',
    title: 'Diagnóstico express y solución a medida del problema real',
    whatIDo: 'No necesitás saber términos técnicos. Me contás qué te está haciendo perder plata o tiempo hoy y te armo un plan directo con la alternativa más económica y eficiente.',
    clientBenefit: 'Claridad total desde el primer día: sabés exactamente cuánto vas a ahorrar, qué herramientas usar y cuánto te va a costar en pesos argentinos.',
    ctaText: 'Quiero analizar mi caso',
    presetTopic: 'Quiero analizar un problema digital en mi negocio y ver alternativas.',
    priceNote: 'Consulta inicial sin costo ni compromiso',
    timeSaving: 'Respuesta en menos de 24 hs'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-ecommerce-checkout',
    tag: 'Control de calidad & cobros seguros',
    title: 'El miedo a perder ventas por fallas inadvertidas en la tienda online',
    problem: 'Pérdida invisible de compras por fallas intermitentes al actualizar promociones.',
    initialSituation: 'Una tienda online en Argentina actualizaba productos semanalmente, pero cada cambio obligaba a probar a mano el carrito y el botón de Mercado Pago. A veces, las fallas se descubrían cuando un cliente frustrado abandonaba la compra.',
    analysis: 'El 80% de los errores ocurrían en los mismos 3 pasos del checkout. El chequeo manual tomaba más de 5 horas semanales y dejaba baches sin revisar.',
    solution: 'Implementé un sistema de verificación automática que simula compras completas cada vez que se sube un cambio, validando cupones, cálculos de envío y pasarela de cobro.',
    validation: 'Se probaron más de 40 combinaciones con tarjetas, promociones bancarias y celulares antes del lanzamiento.',
    result: 'Cero ventas perdidas por errores técnicos, 6 horas semanales recuperadas y la seguridad de cobrar cada pedido sin interrupciones.',
    metric: {
      value: '100%',
      label: 'de compras críticas monitoreadas automáticamente'
    }
  },
  {
    id: 'case-data-sync',
    tag: 'Automatización de procesos cotidianos',
    title: 'La pesadilla de pasar pedidos de WhatsApp a planillas de cálculo a mano',
    problem: '3 horas diarias desperdiciadas copiando datos y constantes errores de entrega por tipeo.',
    initialSituation: 'Un negocio de venta mayorista y minorista recibía pedidos por WhatsApp y formulario. Dedicaban toda la mañana a copiar datos a un Excel, armar remitos a mano y mandar avisos uno por uno.',
    analysis: 'El proceso era repetitivo y mecánico. Además del costo en horas, se perdían cerca de $120.000 mensuales por errores en pedidos mal anotados.',
    solution: 'Creé un flujo automatizado que captura los datos del mensaje, valida los números, actualiza la planilla de stock y genera la orden lista para despachar en 5 segundos.',
    validation: 'Se probó con pedidos con textos informales, audios transcriptos y faltantes de stock para asegurar robustez.',
    result: 'De 3 horas diarias pasaron a 0 segundos de trabajo manual. Más de $400.000 mensuales ahorrados en tiempo de equipo y cero errores de despacho.',
    metric: {
      value: '15 hs / sem',
      label: 'ahorradas para dedicarse a vender y atender clientes'
    }
  },
  {
    id: 'case-intermittent-bugs',
    tag: 'Diagnóstico y corrección de fallas',
    title: 'Fallas fantasmas en la plataforma que generaban quejas de clientes',
    problem: 'Clientes que no podían descargar sus comprobantes o reportes de servicios.',
    initialSituation: 'Una plataforma de servicios profesionales recibía quejas constantes porque al presionar "descargar comprobante" la pantalla quedaba en blanco. El equipo técnico anterior decía que "era problema de la conexión del usuario".',
    analysis: 'Audité el sistema y detecté un conflicto de sincronización cuando se acumulaban más de 20 registros. Era una falla fácil de corregir una vez identificada.',
    solution: 'Reparé la lógica de descarga, añadí manejo de errores claro y dejé pruebas automáticas para que nunca vuelva a repetirse.',
    validation: 'Pruebas de estrés y validación con conexiones lentas y grandes volúmenes de datos.',
    result: 'Quejas reducidas a cero en 48 horas y clientes satisfechos con la velocidad del servicio.',
    metric: {
      value: '-95%',
      label: 'en reportes de problemas técnicos en ese flujo'
    }
  }
];

export const WORK_STEPS = [
  {
    step: '01',
    title: 'Me contás qué está pasando',
    description: 'Completás el formulario o me escribís por WhatsApp. Me explicás con tus propias palabras qué tarea te hace perder tiempo o qué error te preocupa. No necesitás saber de código.'
  },
  {
    step: '02',
    title: 'Analizo tu situación sin costo inicial',
    description: 'Entiendo tu proceso real, veo dónde está la fuga de plata o tiempo y evalúo la solución más simple, rápida y económica en pesos argentinos.'
  },
  {
    step: '03',
    title: 'Propuesta clara a precio accesible',
    description: 'Te presento una propuesta con presupuesto cerrado en $ argentinos, sin sorpresas ni horas abiertas. Sabés exactamente qué vas a ganar y cuándo estará listo.'
  },
  {
    step: '04',
    title: 'Lo resuelvo, lo pruebo y queda garantizado',
    description: 'Implemento la automatización o corrección, la pruebo en casos reales y te acompaño 30 días. Si no funciona como acordamos, no pagás.'
  }
];
