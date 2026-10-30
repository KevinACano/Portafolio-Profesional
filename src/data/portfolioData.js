export const personalData = {
  name: "Kevin Ariel Cano Chan",
  role: "Software Engineer",
  tagline: "Estudiante de Ingeniería en TI & Innovación Digital. Desarrollo interfaces web intuitivas y soluciones de infraestructura tecnológica.",
  location: "Cancún, México",
  availability: "Disponible para desarrollo web, software y proyectos TI",
  phone: "+52 998 381 3313",
  phoneRaw: "+529983813313",
  summary: [
    "Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital con especial interés y experiencia en desarrollo web frontend y full-stack.",
    "Experiencia previa en hackathons regionales y nacionales, así como en soporte de infraestructura tecnológica y desarrollo en el sector hotelero corporativo."
  ],
  contacts: {
    email: "kevinacanochan@gmail.com",
    phone: "+52 998 381 3313",
    phoneUrl: "tel:+529983813313",
    whatsappUrl: "https://wa.me/529983813313",
    linkedin: "https://www.linkedin.com/in/kevin-a-cano-chan-32aba239a",
    linkedinDisplay: "linkedin.com/in/kevin-a-cano-chan",
    github: "https://github.com/KevinACano",
    githubDisplay: "github.com/KevinACano"
  },
  stats: [
    { label: "Reconocimiento", value: "3er Lugar Come Datos" },
    { label: "Especialidad", value: "Frontend, PWA & TI" }
  ]
};

export const experienceData = [
  {
    role: "Practicante de IT (Full-Stack & Infraestructura)",
    company: "Hotel Iberostar Selection Riviera Cancún",
    period: "Mayo 2026 – Agosto 2026",
    location: "Riviera Cancún, Q. Roo",
    description: "Desarrollo e implementación de un sistema web full-stack para el monitoreo en tiempo real de infraestructura de red y Access Points (APs). Soporte integral a equipos de cómputo, terminales y redes corporativas.",
    highlights: [
      "Arquitectura web full-stack basada en Node.js, Express y React para supervisar Access Points en tiempo real",
      "Integración de bases de datos relacionales y APIs para alertas y notificaciones automáticas ante caídas",
      "Administración y soporte técnico preventivo/correctivo para la infraestructura tecnológica corporativa del hotel",
      "Garantía de continuidad operativa en terminales de punto de venta, redes departamentales y estaciones críticas"
    ],
    tech: ["React", "Node.js", "Express", "Bases de Datos Relacionales", "APIs REST", "Infraestructura de Redes"]
  },
  {
    role: "Frontend Lead + UX/UI (Hackathon Talent Land 2026)",
    company: "Proyecto Mexplora · Talent Land CDMX",
    period: "2026",
    location: "Ciudad de México",
    description: "Liderazgo en el frontend y experiencia de usuario de Mexplora: aplicación multiplataforma (PWA) diseñada para conectar de forma directa a turistas con micro y pequeños comercios turísticos locales para el Mundial 2026.",
    highlights: [
      "Diseño y construcción de la arquitectura de componentes UI con Next.js y PWA",
      "Integración de asistente de IA para recomendaciones inteligentes y personalizadas a viajeros",
      "Mapeo interactivo mediante APIs de geolocalización para descubrimiento rápido en tiempo real",
      "Conexión completa de pantallas dinámicas y funcionales con el backend"
    ],
    tech: ["Next.js", "PWA", "React", "APIs de Mapas / Geolocalización", "Asistente de IA", "UX/UI Design"]
  },
  {
    role: "Desarrollador Frontend & Diseñador UX/UI (3er Lugar)",
    company: "Proyecto EcoCun · Hackathon Come Datos Chetumal",
    period: "2025",
    location: "Chetumal, Quintana Roo",
    description: "Galardonado con el 3er Lugar. Creación de una aplicación multiplataforma (PWA) para el reporte ciudadano y localización geoespacial de residuos urbanos y centros de reciclaje en tiempo real.",
    highlights: [
      "Premio 3er Lugar en Hackathon Come Datos 2025",
      "Mapas interactivos para ubicar puntos de acopio clasificados por tipo de material",
      "Módulo de reporte y seguimiento ciudadano con georreferenciación inmediata",
      "Desarrollo frontend modular con React y TypeScript enfocado en fluidez móvil"
    ],
    tech: ["React", "TypeScript", "PWA", "Geolocalización", "Mapas Interactivos", "Diseño UX/UI"]
  }
];

export const projectsData = [
  {
    id: "mexplora",
    title: "Mexplora",
    subtitle: "PWA Turística con IA y Geolocalización · Talent Land 2026",
    badge: "Talent Land 2026 CDMX",
    category: "PWA & Turismo",
    description: "Aplicación multiplataforma diseñada para conectar a turistas internacionales con micro y pequeños prestadores de servicios del sector turístico de cara al Mundial 2026 en México.",
    fullDescription: "Mexplora nació para nivelar el terreno de juego digital en eventos de clase mundial. Como Frontend Lead y diseñador UX/UI, estructuré la arquitectura de la PWA utilizando Next.js, integrando mapas interactivos mediante APIs de geolocalización y conectando un asistente de inteligencia artificial que orienta a los turistas para encontrar servicios auténticos, seguros y cercanos en cuestión de segundos.",
    highlights: [
      "Arquitectura de componentes escalables en Next.js optimizada como PWA",
      "Asistente conversacional con IA para orientación turística personalizada",
      "Geolocalización en tiempo real y visualización de rutas hacia comercios locales",
      "Integración completa de interfaces funcionales con servicios backend"
    ],
    technologies: ["Next.js", "React", "PWA", "APIs de Mapas", "Asistente IA", "Diseño UX/UI"],
    role: "Frontend Lead & Diseñador UX/UI",
    year: "2026"
  },
  {
    id: "ecocun",
    title: "EcoCun",
    subtitle: "Reporte Ciudadano de Residuos & Mapeo Verde · 3er Lugar Come Datos",
    badge: "3er Lugar Come Datos 2025",
    category: "Sostenibilidad & Datos",
    description: "PWA de geolocalización en tiempo real para reportes de residuos urbanos y consulta de centros de acopio en Quintana Roo. Proyecto premiado con el 3er lugar en el Hackathon Come Datos 2025.",
    fullDescription: "Desarrollada para fortalecer la participación ciudadana y optimizar la gestión ambiental. EcoCun permite a la ciudadanía levantar reportes geoetiquetados sobre acumulación de residuos, dar seguimiento a la resolución de incidencias y ubicar centros de acopio autorizados clasificados por material. Desarrollé la interfaz frontend utilizando React y TypeScript, priorizando tiempos de carga mínimos y facilidad de uso en calle.",
    highlights: [
      "Reconocido con el 3er Lugar en Hackathon Come Datos 2025 (Chetumal)",
      "Mapeo interactivo de puntos limpios y centros de acopio autorizados",
      "Módulo de reporte ciudadano con coordenadas geográficas y seguimiento",
      "Frontend robusto desarrollado con React y TypeScript"
    ],
    technologies: ["React", "TypeScript", "PWA", "Mapas Interactivos", "Geolocalización", "UX/UI"],
    role: "Desarrollador Frontend & Diseñador UX/UI",
    year: "2025"
  },
  {
    id: "monitoreo-iberostar",
    title: "Sistema de Monitoreo de Red & APs",
    subtitle: "Plataforma Web Full-Stack para Infraestructura Hotelera",
    badge: "Iberostar Selection Riviera Cancún",
    category: "Full-Stack & TI",
    description: "Sistema web desarrollado durante mi estancia técnica en el Hotel Iberostar Selection Riviera Cancún para la monitorización en vivo del estado de Access Points (APs) y switches de red.",
    fullDescription: "La continuidad de conectividad en hotelería de lujo es un factor crítico para huéspedes y áreas operativas. Diseñé e implementé una arquitectura web full-stack con Node.js, Express y React que consulta periódicamente los puntos de acceso del complejo, detecta anomalías de tráfico o desconexiones, y envía notificaciones preventivas al equipo de TI a través de APIs automatizadas, respaldado por bases de datos relacionales.",
    highlights: [
      "Monitoreo centralizado en tiempo real del estado de Access Points corporativos",
      "Arquitectura full-stack con Node.js, Express y frontend reactivo en React",
      "Integración de base de datos relacional para historial y métricas de disponibilidad",
      "Sistema de alertas automatizadas ante caídas o congestión de infraestructura"
    ],
    technologies: ["Node.js", "Express", "React", "Bases de Datos Relacionales", "APIs REST", "Infraestructura TI"],
    role: "Desarrollador Full-Stack & Practicante TI",
    year: "2026"
  },
  {
    id: "mayaconect",
    title: "MayaConect",
    subtitle: "Ecosistema de Turismo Cultural y Rutas Auténticas",
    badge: "Península de Yucatán",
    category: "PWA & Turismo",
    description: "Plataforma orientada a conectar a viajeros con experiencias culturales genuinas, cenotes y cooperativas turísticas en comunidades del interior de la Península de Yucatán.",
    fullDescription: "Iniciativa creada para respaldar el turismo rural consciente. Incluye módulos de consulta de destinos patrimoniales, directorio de guías y anfitriones locales, sistema de reseñas y optimización para funcionamiento en dispositivos móviles con conectividad limitada.",
    highlights: [
      "Directorio georreferenciado de cooperativas y atractivos naturales",
      "Interfaz responsiva de alta ligereza para zonas de señal intermitente",
      "Módulo de experiencias comunitarias y contacto directo sin intermediarios"
    ],
    technologies: ["React", "JavaScript", "CSS Responsivo", "APIs de Geolocalización", "Diseño Accesible"],
    role: "Desarrollador Frontend & Arquitectura UI",
    year: "2025"
  }
];

export const educationData = [
  {
    degree: "Licenciatura en Ingeniería en Tecnologías de la Información e Innovación Digital",
    institution: "Universidad Tecnológica de Cancún",
    period: "2026 – 2028",
    status: "En curso",
    detail: "Formación especializada en ingeniería de software, arquitectura de sistemas, innovación digital y gestión estratégica de tecnologías."
  },
  {
    degree: "Técnico Superior Universitario (TSU) en TI e Innovación Digital",
    specialty: "Área de Desarrollo de Software Multiplataforma",
    institution: "Universidad Tecnológica de Cancún",
    period: "2024 – 2026",
    status: "Completado",
    detail: "Desarrollo de aplicaciones web y multiplataforma, bases de datos relacionales, consumo de APIs y metodologías ágiles de trabajo colaborativo."
  },
  {
    degree: "Técnico en Soporte y Mantenimiento de Equipo de Cómputo",
    institution: "CECyTE Plantel Cancún IV",
    period: "2021 – 2024",
    status: "Titulado",
    detail: "Mantenimiento preventivo y correctivo de hardware, configuración de redes locales (LAN), sistemas operativos y diagnóstico de fallas."
  }
];

export const languagesData = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "A2 (Pre-intermedio)" },
];

export const competenciesData = [
  {
    category: "Desarrollo Frontend & PWAs",
    description: "Construcción de aplicaciones web interactivas, móviles y accesibles.",
    skills: [
      { name: "React & Next.js", context: "Arquitectura de componentes, SSR, hooks y aplicaciones multiplataforma (PWA)" },
      { name: "JavaScript & TypeScript", context: "Tipado estático, código limpio, asincronía y programación funcional moderna" },
      { name: "Diseño UI / Prototipado", context: "Diseño centrado en el usuario, jerarquía visual y flujos interactivos intuitivos" },
      { name: "HTML5 & CSS", context: "Estructura semántica, diseño responsivo, adaptabilidad móvil y estándares web" }
    ]
  },
  {
    category: "Backend, APIs & Datos",
    description: "Servicios fiables, integración de mapas y persistencia de información.",
    skills: [
      { name: "Consumo e Integración de APIs REST", context: "Conexión de pantallas con backends, integración de APIs de mapas y servicios de IA" },
      { name: "Manejo de Bases de Datos", context: "Modelado relacional, consultas SQL eficientes y gestión de datos transaccionales" },
      { name: "Node.js & Express", context: "Construcción de servidores backend, middlewares de monitoreo y endpoints para sistemas web" }
    ]
  },
  {
    category: "Infraestructura TI & Habilidades Clave",
    description: "Soporte corporativo y competencias profesionales para el trabajo colaborativo.",
    skills: [
      { name: "Soporte y Redes TI", context: "Mantenimiento integral, monitoreo de Access Points y terminales de cómputo en hotelería" },
      { name: "Resolución Metódica de Problemas", context: "Diagnóstico rápido en eventos bajo presión (Hackathons) y ambientes de producción" },
      { name: "Metodologías y Herramientas", context: "Git, GitHub, trabajo en equipo, comunicación asertiva y aprendizaje continuo" }
    ]
  }
];
