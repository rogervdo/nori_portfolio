export type SectionId =
  | "portada"
  | "resumen"
  | "descripcion"
  | "problema"
  | "requerimientos"
  | "desarrollo"
  | "usabilidad"
  | "conclusiones"
  | "anexos";

export interface NavItem {
  id: SectionId;
  number: string;
  label: string;
}

export interface SectionPreview {
  id: SectionId;
  title: string;
  description: string;
  tag: string;
  status: "completed" | "in_progress" | "draft";
}

export interface KpiItem {
  label: string;
  value: string;
  hint: string;
  icon: "users" | "trending" | "check" | "file";
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface FlowMoment {
  step: number;
  title: string;
  description: string;
}

export interface FunctionalRequirement {
  id: string;
  description: string;
}

export interface NonFunctionalRequirement {
  id: string;
  category: string;
  description: string;
}

export interface UserStoryDetailed {
  id: string;
  summary: string;
  role: string;
  priority: string;
  owner: string;
  acceptanceCriteria: string[];
}

export interface HeuristicFinding {
  num: number;
  name: string;
  severity: string;
  issue: string;
}

export interface UsabilityPriority {
  id: string;
  problem: string;
  tasks: string;
  severity: "alta" | "media" | "baja";
}

export interface Testimonial {
  participant: string;
  profile: string;
  facilitator: string;
  summary: string;
}

export interface UserFeedbackItem {
  id: string;
  name: string;
  problems: string;
  improvements: string;
}

export interface UatParticipant {
  id: string;
  name: string;
  shortName: string;
  email: string;
  age: number;
  program: string;
  experience: string;
  sessionDate: string;
  facilitator: string;
  device: string;
  browser: string;
  notes: string;
}

export interface UatTimeRow {
  task: string;
  focus: string;
  p01: string;
  p02: string;
  p03: string;
  p04: string;
  p05: string;
  average: string;
}

export interface UatTimeRow {
  task: string;
  focus: string;
  p01: string;
  p02: string;
  p03: string;
  p04: string;
  p05: string;
  average: string;
}

export interface EdtNode {
  label: string;
  children?: EdtNode[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: "portada", number: "01", label: "Portada" },
  { id: "resumen", number: "02", label: "Resumen ejecutivo" },
  { id: "descripcion", number: "03", label: "Descripción del software" },
  { id: "problema", number: "04", label: "Problema y objetivos" },
  { id: "requerimientos", number: "05", label: "Requerimientos" },
  { id: "desarrollo", number: "06", label: "Desarrollo" },
  { id: "usabilidad", number: "07", label: "Usabilidad" },
  { id: "conclusiones", number: "08", label: "Conclusiones" },
  { id: "anexos", number: "09", label: "Anexos — EDT" },
];

export const META = {
  project: "Nori — Aplicación Web con IA para Levantamiento de Requerimientos",
  client: "Grupo Financiero Banorte · Reto 1 — Ingeniería de Software con IA",
  team: "NortDev",
  course: "TC3005B — Desarrollo e Implementación de Software",
  institution: "Tecnológico de Monterrey",
  version: "Nori v1.1 (demo)",
  demoUrl: "https://nori-sigma.vercel.app/",
  date: "Junio 2026",
  tagline: "Estandarizando requerimientos… una conversación a la vez",
  oneLiner:
    "Un espacio de trabajo inteligente que conecta requerimientos, arquitectura y equipos, diseñado con IA para llevar la productividad de los ingenieros de Banorte al siguiente nivel.",
};

export const TEAM: TeamMember[] = [
  { name: "Rogelio Villarreal", role: "Tech Lead", initials: "RV" },
  { name: "Bryan Lemus", role: "Backend", initials: "BL" },
  { name: "Vania Sánchez", role: "UX / QA", initials: "VS" },
  { name: "Jordy Granados", role: "DevOps", initials: "JG" },
  { name: "Luis Bolaña", role: "Product Owner", initials: "LB" },
];

export const COVER_STATS = [
  { label: "Requerimientos funcionales", value: "24+" },
  { label: "Requerimientos no funcionales", value: "7" },
  { label: "Historias de usuario", value: "12" },
  { label: "Microservicios", value: "4" },
];

export const FLOW_MOMENTS: FlowMoment[] = [
  {
    step: 1,
    title: "Inicio de sesión",
    description: "Acceso seguro con credenciales corporativas y sesión JWT persistente.",
  },
  {
    step: 2,
    title: "Crear proyecto",
    description: "Nueva iniciativa con nombre, categorías y descripción para el agente IA.",
  },
  {
    step: 3,
    title: "Conversación con IA",
    description: "El asistente formula preguntas dinámicas y captura el contexto del negocio.",
  },
  {
    step: 4,
    title: "Panel documento S0–S10",
    description: "Once secciones estructuradas se actualizan en tiempo real desde el chat.",
  },
  {
    step: 5,
    title: "Edición de sección",
    description: "Refinamiento manual o regeneración asistida por sección sin afectar el resto.",
  },
  {
    step: 6,
    title: "Versiones del documento",
    description: "Historial de versiones, vista previa y comparación de entregables.",
  },
  {
    step: 7,
    title: "Diagramas Mermaid / Gantt",
    description: "Arquitectura y plan de trabajo visual una vez completadas las secciones.",
  },
  {
    step: 8,
    title: "Exportar .docx",
    description: "Documento corporativo listo para análisis, arquitectura y distribución.",
  },
];

export const SECTION_PREVIEWS: SectionPreview[] = [
  {
    id: "portada",
    title: "Portada",
    description: "Identificación del proyecto, equipo NortDev y contexto Banorte.",
    tag: "Gestión",
    status: "completed",
  },
  {
    id: "resumen",
    title: "Resumen ejecutivo",
    description: "Visión general del producto, arquitectura y validación con usuarios.",
    tag: "Ejecutivo",
    status: "completed",
  },
  {
    id: "descripcion",
    title: "Descripción del software",
    description: "Propósito, usuarios objetivo y valor del asistente conversacional.",
    tag: "Producto",
    status: "completed",
  },
  {
    id: "problema",
    title: "Problema y objetivos",
    description: "Problemática detectada, objetivos y valor agregado para Banorte.",
    tag: "Negocio",
    status: "completed",
  },
  {
    id: "requerimientos",
    title: "Análisis de requerimientos",
    description: "Requerimientos funcionales, no funcionales e historias de usuario US1–US12.",
    tag: "Especificación",
    status: "completed",
  },
  {
    id: "desarrollo",
    title: "Desarrollo e implementación",
    description: "Stack tecnológico, microservicios y módulos del demo.",
    tag: "Técnico",
    status: "completed",
  },
  {
    id: "usabilidad",
    title: "Pruebas de usabilidad",
    description: "Resultados UAT, cuestionarios y retroalimentación de 5 participantes.",
    tag: "Validación",
    status: "in_progress",
  },
  {
    id: "conclusiones",
    title: "Conclusiones",
    description: "Logros, dificultades y aprendizajes del proceso NortDev.",
    tag: "Cierre",
    status: "completed",
  },
  {
    id: "anexos",
    title: "Anexos — EDT",
    description: "Estructura de desglose de trabajo del proyecto Nori.",
    tag: "EDT",
    status: "completed",
  },
];

export const KPIS: KpiItem[] = [
  {
    label: "Satisfacción general",
    value: "3.8/5",
    hint: "Cuestionario posterior (5 participantes)",
    icon: "users",
  },
  {
    label: "Criterios cumplidos",
    value: "77.5%",
    hint: "50 ejecuciones UAT (5 × 10 tareas)",
    icon: "trending",
  },
  {
    label: "Historias de usuario",
    value: "12",
    hint: "US1–US12 priorizadas por el equipo",
    icon: "check",
  },
  {
    label: "Microservicios",
    value: "4",
    hint: "auth · chat · document · rag",
    icon: "file",
  },
];

export const PROBLEMS = [
  "Información incompleta, ambigua o desestructurada",
  "Doble trabajo y retrasos entre negocio, TI y arquitectura",
  "Falta de claridad en alcance, riesgos y scope",
  "Documentos que tardan semanas o meses entre departamentos",
  "Dependencia del conocimiento tácito de expertos",
  "Ausencia de estandarización, trazabilidad y gobernanza",
];

export const OBJECTIVES = [
  "Captura conversacional guiada con gestión de contexto",
  "Documento estructurado en 11 secciones (S0–S10)",
  "Conocimiento organizacional vía RAG (cuando está operativo)",
  "Entregable corporativo `.docx` con versionado y correo",
  "Dashboard con búsqueda, filtros y panel admin",
  "Seguridad JWT y plan de 40 pruebas + UAT con usuarios",
];

export const VALUE_ADDED = [
  { dim: "Eficiencia", val: "Reduce semanas de ida y vuelta en la redacción inicial" },
  { dim: "Estandarización", val: "Plantilla única con secciones obligatorias" },
  { dim: "Accesibilidad", val: "Usuarios de negocio sin dominar formatos técnicos" },
  { dim: "Trazabilidad", val: "Historial, versiones y progreso por sección" },
  { dim: "Inteligencia contextual", val: "IA + RAG para profundizar y validar impacto" },
  { dim: "Integración al flujo", val: "Salida `.docx` lista para análisis y arquitectura" },
];

export const USER_PROFILES = [
  {
    role: "Product Owner / Líder de proyecto",
    need: "Documentar iniciativas de TI con formato estándar y trazabilidad",
  },
  {
    role: "Personal de tecnología",
    need: "Consolidar alcance, arquitectura, riesgos y costos en un artefacto",
  },
  {
    role: "Usuarios de áreas operativas",
    need: "Solicitar desarrollos sin dominar plantillas formales de requerimientos",
  },
];

export const FUNCTIONAL_REQS = [
  {
    group: "Autenticación",
    items: [
      "RF01001 — Login con correo y contraseña",
      "RF01002 — Error claro ante credenciales incorrectas",
      "RF01003 — Recuperación de contraseña",
      "RF01004 — Sesión activa entre navegaciones",
      "RF01005 — Cierre de sesión seguro",
    ],
  },
  {
    group: "Generación con IA",
    items: [
      "RF02001 — Nueva conversación con agente IA",
      "RF02002 — Nombre, tipo y descripción de iniciativa",
      "RF02003 — Áreas impactadas vía RAG",
      "RF02004–RF02007 — Categorías, refinamiento, documento y auto-guardado",
    ],
  },
  {
    group: "Proyectos y dashboard",
    items: ["RF04001–RF04006 — CRUD, búsqueda, filtros e indicadores de avance"],
  },
  {
    group: "Documento y exportación",
    items: [
      "RF03001–RF03003 — Edición y regeneración por sección",
      "RF05001–RF05005 — `.docx`, progreso, descarga sin pop-ups, advertencias",
      "RF06001–RF06004 — Panel lateral y sincronización chat-documento",
    ],
  },
];

export const NON_FUNCTIONAL_REQS = [
  { cat: "Rendimiento", id: "RN01001", text: "Respuesta IA ≤ 10 s" },
  { cat: "Rendimiento", id: "RN01002", text: "Exportación `.docx` ≤ 15 s" },
  { cat: "Seguridad", id: "RN02001", text: "Sesión expira a los 30 min (guardando progreso)" },
  { cat: "Seguridad", id: "RN02002", text: "HTTPS / TLS 1.2+" },
  { cat: "Disponibilidad", id: "RN03001", text: "≥ 99.5% en horario laboral" },
  { cat: "Usabilidad", id: "RN04001", text: "Flujo completo sin capacitación previa" },
  { cat: "Usabilidad", id: "RN04003", text: "Indicador visual de progreso del documento" },
];

export const USER_STORIES = [
  { id: "US1", summary: "Crear y gestionar múltiples proyectos", priority: "Alta", owner: "Bryan" },
  { id: "US2", summary: "Buscar y filtrar proyectos por estado", priority: "Media", owner: "Bryan" },
  { id: "US3", summary: "Dashboard con filtros, fechas y ordenamiento", priority: "Media", owner: "Luis" },
  { id: "US4", summary: "Editar metadatos desde dashboard o detalle", priority: "Alta", owner: "Luis" },
  { id: "US5", summary: "Análisis de iniciativa contra RAG", priority: "Alta", owner: "Rogelio" },
  { id: "US6", summary: "Revisar y refinar áreas sugeridas por IA", priority: "Alta", owner: "Rogelio" },
  { id: "US7", summary: "Inicio de sesión con credenciales corporativas", priority: "Alta", owner: "Rogelio" },
  { id: "US8", summary: "Abrir proyecto y ver conversación completa", priority: "Alta", owner: "Vania" },
  { id: "US9", summary: "Editar sección y regenerar con IA", priority: "Alta", owner: "Vania" },
  { id: "US10", summary: "Persistencia automática al retomar", priority: "Alta", owner: "Vania" },
  { id: "US11", summary: "Descargar documento en `.docx`", priority: "Alta", owner: "Jordy" },
  { id: "US12", summary: "Indicador de progreso y descarga sin pop-ups", priority: "Media", owner: "Jordy" },
];

export const functionalRequirements: FunctionalRequirement[] = [
  { id: "RF01001", description: "Iniciar sesión con correo y contraseña corporativos" },
  { id: "RF01002", description: "Mostrar error claro ante credenciales incorrectas" },
  { id: "RF01003", description: "Recuperar contraseña mediante flujo de restablecimiento" },
  { id: "RF01004", description: "Mantener sesión activa entre navegaciones" },
  { id: "RF01005", description: "Cerrar sesión de forma segura" },
  { id: "RF02001", description: "Iniciar nueva conversación con agente IA" },
  { id: "RF02002", description: "Capturar nombre, tipo y descripción de la iniciativa" },
  { id: "RF02003", description: "Sugerir áreas impactadas mediante conocimiento organizacional" },
  { id: "RF02004", description: "Clasificar la iniciativa en categorías predefinidas" },
  { id: "RF02005", description: "Refinar respuestas del usuario con preguntas dinámicas" },
  { id: "RF02006", description: "Generar y actualizar secciones del documento desde el chat" },
  { id: "RF02007", description: "Guardar automáticamente conversación y documento" },
  { id: "RF03001", description: "Editar manualmente el contenido de una sección" },
  { id: "RF03002", description: "Regenerar una sección con IA sin afectar las demás" },
  { id: "RF03003", description: "Mostrar vista previa del documento completo" },
  { id: "RF04001", description: "Crear, leer, actualizar y eliminar proyectos" },
  { id: "RF04002", description: "Buscar proyectos por nombre o descripción" },
  { id: "RF04003", description: "Filtrar proyectos por estado (en progreso, completado, borrador)" },
  { id: "RF04004", description: "Ordenar proyectos por fecha o nombre" },
  { id: "RF04005", description: "Mostrar indicadores de avance por proyecto" },
  { id: "RF04006", description: "Retomar un proyecto guardado con su contexto completo" },
  { id: "RF05001", description: "Exportar documento en formato .docx corporativo" },
  { id: "RF05002", description: "Indicar progreso durante la generación del documento" },
  { id: "RF05003", description: "Advertir si faltan secciones antes de exportar" },
  { id: "RF05004", description: "Descargar sin depender de ventanas emergentes del navegador" },
  { id: "RF05005", description: "Enviar documento por correo electrónico" },
  { id: "RF06001", description: "Mostrar panel lateral con las 11 secciones del documento" },
  { id: "RF06002", description: "Sincronizar actualizaciones entre chat y panel de documento" },
  { id: "RF06003", description: "Gestionar versiones del documento generado" },
  { id: "RF06004", description: "Generar diagramas de arquitectura y Gantt" },
];

export const nonFunctionalRequirements: NonFunctionalRequirement[] = [
  { id: "RN01001", category: "Rendimiento", description: "Respuesta del agente IA en ≤ 10 s" },
  { id: "RN01002", category: "Rendimiento", description: "Exportación .docx en ≤ 15 s" },
  { id: "RN02001", category: "Seguridad", description: "Sesión expira a los 30 min guardando progreso" },
  { id: "RN02002", category: "Seguridad", description: "Comunicación cifrada HTTPS / TLS 1.2+" },
  { id: "RN03001", category: "Disponibilidad", description: "≥ 99.5% en horario laboral" },
  { id: "RN04001", category: "Usabilidad", description: "Flujo completo sin capacitación previa" },
  { id: "RN04003", category: "Usabilidad", description: "Indicador visual de progreso del documento" },
];

export const userStoriesDetailed: UserStoryDetailed[] = [
  {
    id: "US1",
    summary: "Crear y gestionar múltiples proyectos para organizar documentos por iniciativa",
    role: "Como PM",
    priority: "Alta",
    owner: "Bryan",
    acceptanceCriteria: [
      "Puedo crear un proyecto con nombre y descripción",
      "El proyecto aparece en el dashboard tras guardarse",
      "Puedo eliminar o archivar proyectos existentes",
    ],
  },
  {
    id: "US2",
    summary: "Buscar y filtrar proyectos por estado para localizarlos rápidamente",
    role: "Como PM",
    priority: "Media",
    owner: "Bryan",
    acceptanceCriteria: [
      "La búsqueda filtra por nombre en tiempo real",
      "Los filtros por estado muestran solo proyectos correspondientes",
      "Un listado vacío muestra mensaje orientador",
    ],
  },
  {
    id: "US3",
    summary: "Dashboard con búsqueda, filtros por fecha y ordenamiento para priorizar trabajo",
    role: "Como PM",
    priority: "Media",
    owner: "Luis",
    acceptanceCriteria: [
      "Puedo ordenar por fecha de creación o modificación",
      "Los filtros combinados funcionan sin recargar la página",
      "La vista grid/lista conserva el estado de filtros",
    ],
  },
  {
    id: "US4",
    summary: "Editar metadatos del proyecto desde dashboard o detalle sin ir al chat",
    role: "Como PM",
    priority: "Alta",
    owner: "Luis",
    acceptanceCriteria: [
      "Puedo editar nombre, categoría y descripción",
      "Los cambios se reflejan al reabrir el proyecto",
      "Se validan campos obligatorios antes de guardar",
    ],
  },
  {
    id: "US5",
    summary: "Analizar la iniciativa contra conocimiento organizacional para identificar áreas impactadas",
    role: "Como PM",
    priority: "Alta",
    owner: "Rogelio",
    acceptanceCriteria: [
      "El sistema sugiere departamentos relevantes tras describir la iniciativa",
      "Las sugerencias incluyen justificación breve",
      "Si el servicio no está disponible, se informa sin bloquear el flujo",
    ],
  },
  {
    id: "US6",
    summary: "Revisar, eliminar o ampliar las áreas sugeridas por la IA",
    role: "Como PM",
    priority: "Alta",
    owner: "Rogelio",
    acceptanceCriteria: [
      "Puedo aceptar o descartar cada área sugerida",
      "Puedo agregar áreas manualmente",
      "El mapa de impacto se guarda con el proyecto",
    ],
  },
  {
    id: "US7",
    summary: "Iniciar sesión con credenciales corporativas de forma segura",
    role: "Como usuario",
    priority: "Alta",
    owner: "Rogelio",
    acceptanceCriteria: [
      "Login exitoso redirige al dashboard",
      "Credenciales incorrectas muestran mensaje claro",
      "La sesión persiste al navegar entre vistas protegidas",
    ],
  },
  {
    id: "US8",
    summary: "Abrir un proyecto guardado y ver la conversación completa con la IA",
    role: "Como PM",
    priority: "Alta",
    owner: "Vania",
    acceptanceCriteria: [
      "El historial de mensajes carga en orden cronológico",
      "El panel de documento refleja el último estado guardado",
      "No se pierde contexto al salir y volver al chat",
    ],
  },
  {
    id: "US9",
    summary: "Editar una sección para que la IA la regenere sin afectar el resto",
    role: "Como PM",
    priority: "Alta",
    owner: "Vania",
    acceptanceCriteria: [
      "Puedo editar manualmente el texto de una sección",
      "La regeneración actualiza solo la sección seleccionada",
      "Las demás secciones permanecen intactas",
    ],
  },
  {
    id: "US10",
    summary: "Conservar conversación y documento automáticamente al retomar",
    role: "Como PM",
    priority: "Alta",
    owner: "Vania",
    acceptanceCriteria: [
      "Al reabrir el proyecto, chat y documento están sincronizados",
      "No se requiere acción manual de guardado",
      "La última sección editada se muestra correctamente",
    ],
  },
  {
    id: "US11",
    summary: "Descargar el documento en .docx editable para integrarlo a procesos de la empresa",
    role: "Como PO",
    priority: "Alta",
    owner: "Jordy",
    acceptanceCriteria: [
      "El archivo generado sigue la plantilla corporativa",
      "La descarga inicia sin bloqueos del navegador",
      "El contenido coincide con la vista previa",
    ],
  },
  {
    id: "US12",
    summary: "Ver indicador de progreso y descarga sin pop-ups",
    role: "Como PO",
    priority: "Media",
    owner: "Jordy",
    acceptanceCriteria: [
      "La barra de progreso refleja secciones completadas",
      "Durante la generación se muestra feedback visual",
      "La descarga no depende de ventanas emergentes",
    ],
  },
];

export const TECH_STACK = [
  { layer: "Frontend", tech: "React 19, TypeScript, Vite 7, Tailwind CSS 4", purpose: "SPA, dashboard, chat" },
  { layer: "Backend", tech: "Node.js 20+ (ESM), Express", purpose: "APIs REST por microservicio" },
  { layer: "Base de datos", tech: "PostgreSQL 16 + pgvector", purpose: "Proyectos, mensajes, RAG" },
  { layer: "IA / LLM", tech: "Google Gemini 2.5 Flash", purpose: "Chat dual-response, diagramas" },
  { layer: "Auth", tech: "JWT (auth-service)", purpose: "Login y rutas protegidas" },
  { layer: "Pruebas", tech: "Jest + Playwright", purpose: "40 casos + E2E" },
  { layer: "Despliegue", tech: "Vercel + Railway/GCP", purpose: "Demo productivo" },
];

export const FRONTEND_MODULES = [
  { name: "Login / Registro", desc: "Autenticación JWT y recuperación de contraseña" },
  { name: "Dashboard", desc: "Biblioteca de proyectos con búsqueda, filtros y vista grid/lista" },
  { name: "Panel admin", desc: "KPIs de equipo y avance por sección S0–S10" },
  { name: "Chat", desc: "Conversación IA, panel de documento, exportación y diagramas" },
  { name: "Detalle / Versiones", desc: "Metadatos, preview, correo y historial de versiones" },
];

export const BACKEND_MODULES = [
  { name: "auth-service (:3003)", desc: "Registro, login, verify, rate limit" },
  { name: "chat-service (:3001)", desc: "Chat dual, proyectos, shares, diagramas" },
  { name: "document-service (:3004)", desc: "DOCX, preview HTML, versiones, correo" },
  { name: "rag-service (:3002)", desc: "Embeddings y búsqueda semántica" },
];

export const UAT_SUCCESS = [
  { task: "UAT-04", focus: "Login y cierre de sesión", success: "60%", criteria: "88%" },
  { task: "UAT-06", focus: "Metadatos de proyecto", success: "60%", criteria: "87%" },
  { task: "UAT-09", focus: "Registro y primer uso", success: "60%", criteria: "87%" },
  { task: "UAT-01", focus: "Creación y persistencia", success: "60%", criteria: "84%" },
  { task: "UAT-05", focus: "Versiones del documento", success: "40%", criteria: "80%" },
  { task: "UAT-10", focus: "Dashboard multi-proyecto", success: "40%", criteria: "80%" },
  { task: "UAT-03", focus: "Edición de sección", success: "40%", criteria: "76%" },
  { task: "UAT-02", focus: "Búsqueda y `.docx`", success: "40%", criteria: "69%" },
  { task: "UAT-07", focus: "Generación y distribución", success: "40%", criteria: "69%" },
  { task: "UAT-08", focus: "Diagramas Mermaid/Gantt", success: "20%", criteria: "68%" },
];

export const LIKERT_RESULTS = [
  { dim: "Satisfacción general (Q5)", avg: "3.8" },
  { dim: "Recomendación (Q9)", avg: "3.8" },
  { dim: "Cumple propósito (Q23)", avg: "3.8" },
  { dim: "Claridad generar `.docx` (Q14)", avg: "3.4", weak: true },
  { dim: "Retroalimentación sistema (Q6)", avg: "3.6" },
  { dim: "Utilidad vista previa (Q15)", avg: "4.2", strong: true },
];

export const USER_FEEDBACK: UserFeedbackItem[] = [
  {
    id: "P01",
    name: "José Pablo Zapata Lozano",
    problems: "Icono refrescar sin función",
    improvements: "Confirmación de guardado automático",
  },
  {
    id: "P02",
    name: "José Miguel Rivera Garza",
    problems: "Edición en hover; popup descarga",
    improvements: "Editar siempre visible; mensajes en español",
  },
  {
    id: "P03",
    name: "Diego Saldaña Gómez",
    problems: "TOC no sincroniza al cambiar versión",
    improvements: "Indicar secciones faltantes al exportar",
  },
  {
    id: "P04",
    name: "Rodrigo Alessandro Vela Mayorga",
    problems: "Exportar sin 100%; persistencia",
    improvements: "Onboarding; errores bilingües",
  },
  {
    id: "P05",
    name: "Angel Aarón Muñoz Álvarez",
    problems: "Envío por correo poco claro",
    improvements: "Tooltips en acciones del panel",
  },
];

export const USABILITY_METHODOLOGY = [
  "5 participantes ITC 6° semestre: José Pablo Zapata, José Miguel Rivera, Diego Saldaña, Rodrigo Vela y Angel Muñoz.",
  "10 tareas UAT ejecutadas en el demo desplegado (50 ejecuciones totales).",
  "Cuestionario previo (10 ítems) y posterior (Likert + preguntas abiertas).",
  "Registro de tiempos, errores y observaciones por sesión con facilitación presencial.",
  "Complemento: 40 pruebas automatizadas planificadas (20 unitarias, 12 integración, 8 E2E).",
];

export const UAT_GLOBAL_OUTCOMES = [
  { label: "Éxito", count: 22, pct: "44%" },
  { label: "Parcial", count: 24, pct: "48%" },
  { label: "Fallo", count: 4, pct: "8%" },
];

export const UAT_PARTICIPANTS: UatParticipant[] = [
  {
    id: "P01",
    name: "José Pablo Zapata Lozano",
    shortName: "José P.",
    email: "a00839242@tec.mx",
    age: 21,
    program: "ITC — 6to semestre",
    experience: "Familiarizado (4)",
    sessionDate: "2026-05-12",
    facilitator: "Rogelio V.",
    device: "Laptop",
    browser: "Chrome 124",
    notes: "Práctica profesional previa; cómoda documentando requerimientos",
  },
  {
    id: "P02",
    name: "José Miguel Rivera Garza",
    shortName: "José M.",
    email: "a00836995@tec.mx",
    age: 21,
    program: "ITC — 6to semestre",
    experience: "Poco familiarizado (2)",
    sessionDate: "2026-05-13",
    facilitator: "Bryan L.",
    device: "Laptop",
    browser: "Edge 124",
    notes: "Programador; pocas entregas formales de requerimientos",
  },
  {
    id: "P03",
    name: "Diego Saldaña Gómez",
    shortName: "Diego S.",
    email: "a01571609@tec.mc",
    age: 22,
    program: "ITC — 6to semestre",
    experience: "Familiarizado (4)",
    sessionDate: "2026-05-14",
    facilitator: "Vania S.",
    device: "Laptop",
    browser: "Chrome 125",
    notes: "Ha liderado equipos en proyectos integradores",
  },
  {
    id: "P04",
    name: "Rodrigo Alessandro Vela Mayorga",
    shortName: "Rodrigo V.",
    email: "a00839934@tec.mx",
    age: 20,
    program: "ITC — 6to semestre",
    experience: "Nada familiarizado (1)",
    sessionDate: "2026-05-15",
    facilitator: "Luis B.",
    device: "Laptop",
    browser: "Firefox 126",
    notes: "Primer contacto con documentación de software",
  },
  {
    id: "P05",
    name: "Angel Aarón Muñoz Álvarez",
    shortName: "Angel M.",
    email: "a00839825@tec.mx",
    age: 22,
    program: "ITC — 6to semestre",
    experience: "Muy familiarizado (5)",
    sessionDate: "2026-05-16",
    facilitator: "Cristian G.",
    device: "Laptop",
    browser: "Chrome 125",
    notes: "Líder técnico de su equipo de reto, usa IA a diario",
  },
];

export const UAT_TIME_MATRIX: UatTimeRow[] = [
  {
    task: "UAT-01",
    focus: "Creación y persistencia",
    p01: "28 min",
    p02: "35 min",
    p03: "31 min",
    p04: "42 min",
    p05: "25 min",
    average: "32 min",
  },
  {
    task: "UAT-02",
    focus: "Búsqueda y descarga .docx",
    p01: "22 min",
    p02: "32 min",
    p03: "24 min",
    p04: "38 min",
    p05: "20 min",
    average: "27 min",
  },
  {
    task: "UAT-03",
    focus: "Edición de sección",
    p01: "24 min",
    p02: "38 min",
    p03: "22 min",
    p04: "40 min",
    p05: "21 min",
    average: "29 min",
  },
  {
    task: "UAT-04",
    focus: "Login y cierre de sesión",
    p01: "12 min",
    p02: "14 min",
    p03: "13 min",
    p04: "18 min",
    p05: "11 min",
    average: "14 min",
  },
  {
    task: "UAT-05",
    focus: "Versiones del documento",
    p01: "23 min",
    p02: "30 min",
    p03: "28 min",
    p04: "35 min",
    p05: "22 min",
    average: "28 min",
  },
  {
    task: "UAT-06",
    focus: "Metadatos de proyecto",
    p01: "20 min",
    p02: "28 min",
    p03: "23 min",
    p04: "32 min",
    p05: "19 min",
    average: "24 min",
  },
  {
    task: "UAT-07",
    focus: "Generación y distribución",
    p01: "26 min",
    p02: "40 min",
    p03: "27 min",
    p04: "50 min",
    p05: "23 min",
    average: "33 min",
  },
  {
    task: "UAT-08",
    focus: "Diagramas Mermaid/Gantt",
    p01: "29 min",
    p02: "45 min",
    p03: "33 min",
    p04: "48 min",
    p05: "27 min",
    average: "36 min",
  },
  {
    task: "UAT-09",
    focus: "Registro y primer uso",
    p01: "27 min",
    p02: "30 min",
    p03: "24 min",
    p04: "22 min",
    p05: "24 min",
    average: "25 min",
  },
  {
    task: "UAT-10",
    focus: "Dashboard multi-proyecto",
    p01: "21 min",
    p02: "27 min",
    p03: "26 min",
    p04: "34 min",
    p05: "20 min",
    average: "26 min",
  },
];

export const HEURISTICS: HeuristicFinding[] = [
  {
    num: 1,
    name: "Visibilidad del estado del sistema",
    severity: "Alta–Media",
    issue: "Generación y exportación Word sin feedback de progreso claro.",
  },
  {
    num: 2,
    name: "Correspondencia con el mundo real",
    severity: "Media",
    issue: "Progreso del documento no alinea sección 0; mensajes mezclan español e inglés.",
  },
  {
    num: 4,
    name: "Consistencia y estándares",
    severity: "Media",
    issue: "Icono refrescar con distinto comportamiento entre chat y detalle de proyecto.",
  },
  {
    num: 5,
    name: "Prevención de errores",
    severity: "Media",
    issue: "El mensaje del chat se borra antes de confirmar el envío; se pierde texto si falla la red.",
  },
  {
    num: 7,
    name: "Flexibilidad y eficiencia de uso",
    severity: "Media",
    issue: "Edición de sección solo visible al pasar el cursor (hover).",
  },
  {
    num: 9,
    name: "Recuperación de errores",
    severity: "Media",
    issue: "Errores de API en inglés sin acción de reintentar.",
  },
  {
    num: 10,
    name: "Ayuda y documentación",
    severity: "Baja–Media",
    issue: "Sin onboarding ni guía del flujo chat + panel de documento.",
  },
];

export const USABILITY_PRIORITIES: UsabilityPriority[] = [
  {
    id: "P1",
    problem: "Edición de sección solo visible en hover",
    tasks: "UAT-03",
    severity: "alta",
  },
  {
    id: "P2",
    problem: "Exportación .docx: falta de feedback y bloqueos de descarga",
    tasks: "UAT-02, UAT-07",
    severity: "alta",
  },
  {
    id: "P3",
    problem: "Inestabilidad en diagramas Mermaid/Gantt",
    tasks: "UAT-08",
    severity: "alta",
  },
  {
    id: "P4",
    problem: "Falta de onboarding en dashboard vacío",
    tasks: "UAT-01, UAT-09",
    severity: "media",
  },
  {
    id: "P5",
    problem: "Persistencia deficiente en edición manual",
    tasks: "UAT-03",
    severity: "media",
  },
  {
    id: "P6",
    problem: "Confusión al navegar versiones del documento",
    tasks: "UAT-05",
    severity: "media",
  },
  {
    id: "P7",
    problem: "Icono refrescar sin acción en panel lateral",
    tasks: "UAT-03",
    severity: "baja",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    participant: "José Pablo Zapata Lozano (P01)",
    profile: "ITC 6° · familiarizado con requerimientos",
    facilitator: "Rogelio V.",
    summary:
      "Completó 9 de 10 tareas con éxito. Valoró la vista previa y el asistente conversacional; reportó el icono refrescar sin función en el panel.",
  },
  {
    participant: "José Miguel Rivera Garza (P02)",
    profile: "ITC 6° · poco familiarizado · programador",
    facilitator: "Bryan L.",
    summary:
      "Mayor fricción en edición por hover y exportación Word. Abandonó la tarea de diagramas; sugirió mensajes de error en español.",
  },
  {
    participant: "Diego Saldaña Gómez (P03)",
    profile: "ITC 6° · familiarizado · líder en proyectos integradores",
    facilitator: "Vania S.",
    summary:
      "Flujo sólido en creación y edición. Al cambiar versión, el índice lateral no resaltó la sección activa.",
  },
  {
    participant: "Rodrigo Alessandro Vela Mayorga (P04)",
    profile: "ITC 6° · sin experiencia previa en documentación",
    facilitator: "Luis B.",
    summary:
      "Éxito en registro pero fallos en exportación y diagramas. Necesitó guía para saber qué escribir al agente en el primer proyecto.",
  },
  {
    participant: "Angel Aarón Muñoz Álvarez (P05)",
    profile: "ITC 6° · muy familiarizado · líder técnico del reto",
    facilitator: "Cristian G.",
    summary:
      "9 de 10 tareas en éxito con menor desviación de tiempo. Sugirió tooltips en acciones del panel y mayor claridad en envío por correo.",
  },
];

export const BEHAVIOR_PATTERNS = [
  "Experiencia previa ↔ desempeño: perfiles con baja familiaridad (~65% criterios) vs experimentados (~96%).",
  "Power user (Angel Muñoz, P05): 9/10 tareas en éxito, menor desviación de tiempo.",
  "Novato (Rodrigo Vela, P04): éxito en registro, fallos en exportación y diagramas.",
  "Valor percibido: vista previa (4.2/5) y asistente conversacional valorados una vez completado el flujo.",
];

export const ACHIEVEMENTS = [
  "Demo end-to-end desplegado: login → chat → documento → `.docx`",
  "Arquitectura de microservicios con patrón dual-response",
  "Alineación corporativa: estilos Banorte, plantilla de 11 secciones, JWT",
  "40 pruebas automatizadas planificadas + 10 tareas UAT con 5 usuarios reales",
  "Validación con usuarios reales (3.8/5 en propósito y satisfacción)",
  "Funciones avanzadas: versiones, diagramas, panel admin, compartir, correo",
];

export const DIFFICULTIES = [
  "Sincronizar chat y secciones JSON (patrón dual)",
  "RAG no completamente operativo en demo",
  "UX en exportación Word, diagramas y edición por hover",
  "Feedback insuficiente en procesos largos de generación",
  "Coordinación de 4 servicios + frontend + variables compartidas",
  "Balance entre alcance académico y entregables de producto en el tiempo del reto",
];

export const LEARNINGS = [
  "Probar temprano con usuarios de negocio, no solo con el equipo técnico",
  "La descubribilidad es tan crítica como la funcionalidad",
  "Los entregables finales definen la percepción de valor",
  "Documentar decisiones de arquitectura facilita el cierre del proyecto",
  "Plan de pruebas por capas (unit → API → E2E → UAT) reduce riesgo",
  "La identidad visual coherente refuerza la propuesta de estandarización",
];

export const EDT_TREE: EdtNode = {
  label: "NORI — Aplicación Web con IA para Levantamiento de Requerimientos",
  children: [
    {
      label: "1.1 Gestión del proyecto",
      children: [
        { label: "1.1.1 Plan de Proyecto Integrado" },
        { label: "1.1.2 Cronograma Maestro con Hitos" },
        { label: "1.1.3 Plan de Calidad y Métricas" },
        { label: "1.1.4 Registro de Decisiones de Arquitectura" },
        { label: "1.1.5 Actas de Retrospectiva por Sprint" },
        { label: "1.1.6 Bitácora de Riesgos Actualizada" },
      ],
    },
    {
      label: "1.2 Requerimientos y especificaciones",
      children: [
        { label: "1.2.1 Documento de Requerimientos" },
        { label: "1.2.2 Historias de Usuario" },
        { label: "1.2.3 Matriz de Trazabilidad Req-Pruebas" },
        { label: "1.2.4 Casos de Uso Documentados con Flujos" },
        { label: "1.2.5 Modelado de Usuarios" },
      ],
    },
    {
      label: "1.3 Arquitectura y diseño",
      children: [
        { label: "1.3.1 Diagrama de Arquitectura de Alto Nivel" },
        { label: "1.3.2 Especificación de APIs REST" },
        { label: "1.3.3 Modelo de Datos Relacional Normalizado" },
        { label: "1.3.4 Diseño de Base de Datos RAG (Vector DB)" },
        { label: "1.3.5 Guía de Estilos Banorte Adaptada" },
        { label: "1.3.6 Prototipos de Alta Fidelidad (Figma)" },
        { label: "1.3.7 Flujos de Navegación Validados" },
        { label: "1.3.8 Matriz de Controles de Seguridad" },
        { label: "1.3.9 Diseño de Autenticación/Autorización" },
      ],
    },
    {
      label: "1.4 Desarrollo de software",
      children: [
        { label: "1.4.1 Pipeline CI/CD en Vercel" },
        { label: "1.4.2 Base de Datos PostgreSQL en GCP" },
        { label: "1.4.3 Módulo de Login y Autenticación" },
        { label: "1.4.4 Dashboard y API de Proyectos" },
        { label: "1.4.5 Interfaz Conversacional con IA" },
        { label: "1.4.6 Editor de Documentos" },
        { label: "1.4.7 Servicio de Integración con LLM (Gemini)" },
        { label: "1.4.8 Servicio RAG (Consulta de Conocimiento)" },
        { label: "1.4.9 Módulo de Exportación a .docx" },
        { label: "1.4.10 Corpus RAG (Departamentos, Stack Tech)" },
      ],
    },
    {
      label: "1.5 Verificación y validación",
      children: [
        { label: "1.5.1 Casos de Prueba Unitaria (Backend)" },
        { label: "1.5.2 Casos de Prueba de Integración" },
        { label: "1.5.3 Pruebas de Componentes (Frontend)" },
        { label: "1.5.4 Plan de Pruebas Funcionales" },
        { label: "1.5.5 Ejecución de Pruebas End-to-End" },
        { label: "1.5.6 Pruebas de Regresión" },
        { label: "1.5.7 Reporte de Validación con POs Banorte" },
        { label: "1.5.8 Reporte de Cobertura de Pruebas" },
      ],
    },
    {
      label: "1.6 Despliegue y operación",
      children: [
        { label: "1.6.1 Ambiente de Producción en Vercel" },
        { label: "1.6.2 Ambiente migrado desde datos iniciales" },
        { label: "1.6.3 Configuración de Monitoreo y Logs" },
        { label: "1.6.4 Plan de Despliegue" },
        { label: "1.6.5 Release Candidate 1.0" },
        { label: "1.6.6 Validación Post-Despliegue" },
        { label: "1.6.7 Manual de Usuario Final" },
        { label: "1.6.8 Guía de Administración del Sistema" },
        { label: "1.6.9 Runbook de Soporte Técnico" },
      ],
    },
    {
      label: "1.7 Entregables académicos",
      children: [
        { label: "1.7.1 Presentación Final del Producto" },
        { label: "1.7.2 Código Fuente y Repositorio Documentado" },
      ],
    },
  ],
};

export const RESUMEN_PARAGRAPHS = [
  "Nori es una aplicación web que utiliza inteligencia artificial conversacional para estandarizar y acelerar el levantamiento de requerimientos de software en Grupo Financiero Banorte. El sistema guía al usuario mediante un asistente basado en Google Gemini, captura once secciones estructuradas y permite exportar el entregable en formato `.docx`.",
  "El equipo NortDev entregó un demo funcional full-stack: frontend React 19 en Vercel y cuatro microservicios Node.js sobre PostgreSQL 16 con pgvector. El núcleo técnico es el patrón de respuesta dual: en cada turno, el LLM devuelve texto conversacional y JSON opcional para actualizar una sección del documento.",
  "Las pruebas de usabilidad con cinco participantes (10 tareas UAT, 50 ejecuciones) confirmaron que el flujo principal es viable. La satisfacción general fue de 3.8/5; los puntos débiles se concentran en exportación `.docx`, diagramas y descubribilidad de la edición de secciones.",
];
