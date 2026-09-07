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
    id: 'case-agenda-medica',
    tag: 'Gestión de turnos',
    title: 'Agenda Médica & Turnos — Estética Láser Rosario',
    problem: 'Coordinar turnos de tratamientos con duraciones distintas sin que se superpongan.',
    initialSituation: 'Un centro de estética láser necesitaba una agenda propia: cada tratamiento tiene una duración diferente, y coordinarlos a mano o en una agenda genérica es fácil que termine en horarios pisados.',
    analysis: 'El sistema tenía que conocer la duración real de cada tratamiento y bloquear automáticamente los horarios que ya estuvieran ocupados, sin depender de que alguien lo revise a ojo.',
    solution: 'Desarrollé un sistema con duraciones parametrizadas por tratamiento, detección automática de solapamientos, impresión de la agenda diaria, plantillas de WhatsApp personalizadas para confirmar turnos y exportación a Excel/CSV.',
    validation: 'Probado con turnos de distintas duraciones cargados en simultáneo para confirmar que el sistema bloquea cualquier horario que se pise con otro ya reservado.',
    result: 'Una agenda diaria clara, con confirmaciones de turno por WhatsApp en un clic y sin posibilidad de cargar dos turnos que se superpongan.',
    metric: {
      value: '0 turnos pisados',
      label: 'la detección automática de solapamientos lo bloquea de raíz'
    },
    repoUrl: 'https://github.com/sofiigentaa/AgendaMedica'
  },
  {
    id: 'case-planifica-estudia',
    tag: 'Suite académica',
    title: 'Planifica & Estudia — Asistente universitario',
    problem: 'Organizar cursada, exámenes y estudio sin usar cinco apps distintas.',
    initialSituation: 'Un estudiante universitario necesitaba centralizar la organización de su cursada en un solo lugar, en vez de repartirla entre calendario, apuntes sueltos y planillas.',
    analysis: 'El foco estaba en cubrir todo el ciclo de estudio: planificar, repasar, practicar y llegar a un parcial con una nota estimada realista.',
    solution: 'Construí una suite con sincronización a Google Calendar, generador de resúmenes y quizzes, simulador de parciales con escala de 1 a 10, fichas de emergencia de una página, un tutor con método Feynman y una calculadora de notas, más un modo de enfoque Pomodoro.',
    validation: 'Probado generando resúmenes y quizzes sobre distintos materiales de estudio, y verificando que el cálculo de notas y el simulador de parciales dieran resultados consistentes.',
    result: 'Toda la organización académica —calendario, resúmenes, repaso y cálculo de notas— en una sola herramienta.',
    metric: {
      value: '6 herramientas',
      label: 'integradas en una sola app de estudio'
    },
    repoUrl: 'https://github.com/sofiigentaa/Planifica-Estudia'
  },
  {
    id: 'case-candy-eventos',
    tag: 'Gestión de eventos',
    title: 'Candy Salón de Eventos — Gestión y seguimiento',
    problem: 'Llevar el control de reservas, señas y saldos de cada evento sin perder el hilo.',
    initialSituation: 'Un salón de eventos necesitaba dejar de depender de anotaciones sueltas para saber qué fecha estaba reservada, cuánto se había señado y cuánto saldo quedaba pendiente por cobrar.',
    analysis: 'El punto crítico era tener, de un vistazo, el estado de cada evento: fecha, seña abonada y saldo restante en pesos argentinos, con recordatorios para no perder ningún pago.',
    solution: 'Desarrollé un sistema de gestión y seguimiento de eventos con registro de fechas, señas abonadas, saldos en $ARS y recordatorios.',
    validation: 'Probado cargando eventos con señas parciales y totales para confirmar que el saldo pendiente se calcula y se actualiza correctamente en cada caso.',
    result: 'El salón puede ver de un vistazo qué eventos tiene reservados, qué se cobró y qué falta cobrar de cada uno.',
    metric: {
      value: 'Seguimiento en $ARS',
      label: 'de la seña y el saldo pendiente de cada evento'
    },
    repoUrl: 'https://github.com/sofiigentaa/CandySalonDeEventos'
  },
  {
    id: 'case-sistema-kiosco',
    tag: 'Punto de venta & stock',
    title: 'Granja y Kiosco Don Ramón — Gestión integral',
    problem: 'Vender rápido y controlar stock, vencimientos y caja sin perder margen.',
    initialSituation: 'Un kiosco/almacén necesitaba vender ágil en el mostrador y, al mismo tiempo, tener controlado el stock, los productos por vencer y el cierre de caja diario.',
    analysis: 'El sistema tenía que funcionar en tiempo real entre varios dispositivos: si algo se vende en la caja, el stock se tiene que actualizar al instante también en la tablet del depósito.',
    solution: 'Construí un sistema de punto de venta (POS), control de inventario y vencimientos con liquidación automática, arqueo de caja, historial de ventas y reportes de márgenes, con sincronización en tiempo real entre dispositivos (Supabase).',
    validation: 'Probado vendiendo desde dos dispositivos en simultáneo para confirmar que el stock se descuenta y se sincroniza correctamente en todos al instante.',
    result: 'Ventas rápidas desde el navegador, sin instalar nada, con el stock y la caja siempre al día en todos los dispositivos conectados.',
    metric: {
      value: 'Tiempo real',
      label: 'el stock se actualiza al instante en todos los dispositivos'
    },
    repoUrl: 'https://github.com/sofiigentaa/SistemaKiosco'
  },
  {
    id: 'case-agenda-odontologica',
    tag: 'Gestión de pacientes',
    title: 'Consultorio Marie — Agenda odontológica',
    problem: 'Centralizar los datos de cada paciente: obra social, contacto y seguimiento.',
    initialSituation: 'Un consultorio odontológico necesitaba una ficha por paciente que centralizara la obra social, los datos de contacto y el seguimiento de llamados, en vez de tenerlo repartido entre agenda y WhatsApp.',
    analysis: 'El foco estaba en el acceso rápido: desde la ficha del paciente, poder llamarlo, escribirle por WhatsApp o mandarle un correo sin buscar el número en otro lado.',
    solution: 'Desarrollé un sistema de gestión integral de contactos con obra social, recordatorios de llamadas, adjuntos y accesos directos a WhatsApp, correo y compartir.',
    validation: 'Probado cargando pacientes con distintas obras sociales y adjuntos para confirmar que la ficha y los accesos directos funcionan correctamente en cada caso.',
    result: 'Toda la información de cada paciente —obra social, contacto y adjuntos— accesible desde una sola ficha, con contacto directo en un clic.',
    metric: {
      value: 'Todo en un lugar',
      label: 'ficha, obra social, adjuntos y contacto directo del paciente'
    },
    repoUrl: 'https://github.com/sofiigentaa/AgendaOdontologica'
  },
  {
    id: 'case-gestion-emprendedor',
    tag: 'Control financiero',
    title: 'Gestión de Ingresos y Gastos — para emprendedores',
    problem: 'Entender en qué se va la plata del negocio sin armar una planilla a mano cada mes.',
    initialSituation: 'Un emprendedor necesitaba ver con claridad sus ingresos y gastos del día a día, categorizados, sin depender de anotar todo manualmente en una planilla.',
    analysis: 'El punto clave era que cada gasto se pudiera categorizar al cargarlo, para que el dashboard mostrara de inmediato en qué categorías se estaba yendo más plata.',
    solution: 'Construí una app de control financiero con dashboard interactivo, categorización de gastos, vista diaria de transacciones y exportación de reportes.',
    validation: 'Probado cargando ingresos y gastos en distintas categorías para confirmar que el dashboard y los reportes exportados reflejan los totales correctos.',
    result: 'El emprendedor ve en tiempo real cómo está su negocio en plata, categorizado y con reportes listos para exportar.',
    metric: {
      value: 'Dashboard en vivo',
      label: 'ingresos y gastos categorizados y actualizados al día'
    },
    repoUrl: 'https://github.com/sofiigentaa/Gestion-de-Ingresos-y-Gastos-para-Emprendedor'
  },
  {
    id: 'case-scraping-inmobiliario',
    tag: 'Automatización con Python',
    title: 'Scraper inmobiliario automatizado',
    problem: 'Monitorear a mano decenas de publicaciones de propiedades en varias localidades es inviable.',
    initialSituation: 'Revisar manualmente publicaciones de propiedades en un sitio inmobiliario, localidad por localidad, para detectar altas y bajas, es una tarea que no escala con el tiempo de una persona.',
    analysis: 'El desafío técnico era doble: recorrer muchas páginas sin que el sitio bloquee el proceso, y detectar qué publicaciones se dieron de baja sin perder el historial ya recolectado.',
    solution: 'Desarrollé un scraper asíncrono en Python (Playwright + BeautifulSoup + Pandas) que recorre propiedades en múltiples localidades, con reintentos automáticos, paginación robusta, detección de bajas por revisita activa de URLs, y consolidación incremental en reportes Excel sin duplicados.',
    validation: 'Probado con corridas repetidas sobre las mismas localidades para confirmar que no se generan duplicados y que las bajas se detectan correctamente al revisitar las URLs.',
    result: 'Un reporte en Excel siempre actualizado con las propiedades activas de todas las localidades, sin duplicados y sin revisión manual.',
    metric: {
      value: 'Excel sin duplicados',
      label: 'consolidación incremental automática de todas las localidades'
    },
    repoUrl: 'https://github.com/sofiigentaa/Scraping-automatizado-de-sitio-inmobiliario'
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
