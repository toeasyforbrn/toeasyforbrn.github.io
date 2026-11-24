// ✏️ Aquí cambias todo el contenido del portafolio, en español (es) e inglés (en).
// Datos tomados del CV de Bryan.

export const TEXTOS = {
  menu: {
    quien: { es: 'Quién soy', en: 'About me' },
    trayectoria: { es: 'Mi historia', en: 'My story' },
    proyectos: { es: 'Proyectos', en: 'Projects' },
    contacto: { es: 'Contacto', en: 'Contact' },
    traducir: { es: 'Ver en inglés', en: 'Ver en español' },
    abrir: { es: 'Abrir menú', en: 'Open menu' },
    cerrar: { es: 'Cerrar menú', en: 'Close menu' },
  },
  inicio: {
    titulo: { es: 'Klk, soy Bryan.', en: 'Hey, I’m Bryan.' },
    entrada: {
      es: 'Soy un desarrollador dominicano con ganas de seguir creciendo en la tecnología. Estudio Desarrollo de Software en el Instituto Tecnológico de Las Américas (ITLA) y cada proyecto es una excusa para aprender algo nuevo.',
      en: 'I’m a Dominican developer eager to keep growing in tech. I study Software Development at the Instituto Tecnológico de Las Américas (ITLA), and every project is an excuse to learn something new.',
    },
  },
  quien: {
    titulo: { es: '¿Quién soy?', en: 'Who am I?' },
    parrafos: [
      {
        es: 'Soy Bryan, estudiante de Desarrollo de Software apasionado por la programación y la tecnología. Me interesa el desarrollo web, la creación de interfaces modernas y la construcción de soluciones digitales.',
        en: 'I’m Bryan, a Software Development student passionate about programming and technology. I’m interested in web development, building modern interfaces and creating digital solutions.',
      },
      {
        es: 'Trabajo con tecnologías como <b>JavaScript</b> y <b>Java</b>. Me gusta explorar nuevas herramientas, resolver problemas y transformar ideas en proyectos reales.',
        en: 'I work with technologies like <b>JavaScript</b> and <b>Java</b>. I enjoy exploring new tools, solving problems and turning ideas into real projects.',
      },
    ],
  },
  trayectoria: {
    titulo: { es: '¿Cuál es mi historia?', en: 'What’s my story?' },
    entrada: { es: 'De dónde vengo y lo que he ido sumando por el camino.', en: 'Where I come from and what I’ve picked up along the way.' },
    formacion: { es: 'Formación', en: 'Education' },
    experiencia: { es: 'Experiencia', en: 'Experience' },
    certificaciones: { es: 'Certificaciones', en: 'Certifications' },
    verificar: { es: 'Verificar certificado →', en: 'Verify certificate →' },
  },
  proyectos: {
    titulo: { es: 'Proyectos', en: 'Projects' },
    entrada: { es: 'Lo que he ido construyendo mientras cae la noche.', en: 'What I’ve been building as night falls.' },
    ver: { es: 'ver proyecto →', en: 'view project →' },
    tecnologias: { es: 'Con qué', en: 'Built with' },
  },
  contacto: {
    titulo: { es: '¿Hablamos?', en: 'Let’s talk' },
    entrada: {
      es: 'Si tienes una idea, un proyecto o solo quieres saludar, escríbeme por donde te quede más fácil: abajo están mi correo y mis redes. Respondo aunque sea de noche.',
      en: 'If you have an idea, a project or just want to say hi, reach out wherever is easiest: my email and socials are right below. I reply even at night.',
    },
  },
  pie: { es: 'de regreso a la nocheósfera', en: 'back to the nightosphere' },
}

// enlace: déjalo vacío ('') si el proyecto todavía no tiene página o repositorio
export const PROYECTOS = [
  {
    titulo: 'Somos Tu Negocio Web',
    tipo: { es: 'Emprendimiento · 2026 – actualidad', en: 'My own business · 2026 – present' },
    descripcion: {
      es: 'Desarrollo páginas web responsivas, catálogos digitales y soluciones de contacto y pedidos para negocios. Organizo los requerimientos, el contenido y la identidad digital según lo que necesita cada cliente.',
      en: 'I build responsive websites, digital catalogs and contact and ordering solutions for businesses. I organize requirements, content and digital identity around what each client needs.',
    },
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    enlace: 'https://tunegocioweb.fyi',
  },
  {
    titulo: 'UTA · Ubica Tu Antojo',
    tipo: { es: 'Proyecto académico colaborativo · 2025', en: 'Collaborative academic project · 2025' },
    descripcion: {
      es: 'Prototipo para encontrar restaurantes cercanos en un mapa y recomendar opciones según los gustos de cada persona.',
      en: 'Prototype to find nearby restaurants on a map and recommend options based on each person’s taste.',
    },
    tecnologias: [{ es: 'Trabajo en equipo', en: 'Teamwork' }, { es: 'Prototipo', en: 'Prototype' }],
    enlace: '',
  },
  {
    titulo: { es: 'Planificador de pensum', en: 'Course planner' },
    tipo: { es: 'Proyecto del ITLA', en: 'ITLA project' },
    descripcion: {
      es: 'App web que te dice qué materias puedes inscribir según los prerrequisitos que ya pasaste.',
      en: 'Web app that tells you which courses you can take based on the prerequisites you’ve already passed.',
    },
    tecnologias: ['Java', 'JSP', 'MySQL'],
    estado: { es: 'en desarrollo', en: 'in progress' },
    enlace: '',
  },
]

export const FORMACION = [
  {
    titulo: { es: 'Tecnología en Desarrollo de Software', en: 'Software Development Technology' },
    lugar: { es: 'Instituto Tecnológico de Las Américas (ITLA)', en: 'Instituto Tecnológico de Las Américas (ITLA)' },
    fecha: { es: '2026 – actualidad · 3.er cuatrimestre', en: '2026 – present · 3rd term' },
  },
  {
    titulo: { es: 'Técnico en Informática', en: 'IT Technician' },
    lugar: 'Centro Educativo María Inmaculada',
    fecha: '',
  },
]

export const EXPERIENCIA = [
  {
    titulo: { es: 'Pasantía en el área de Tecnología', en: 'IT Intern' },
    lugar: 'Dominicana de Seguros',
    fecha: { es: 'sep. 2024 – jun. 2025', en: 'Sep 2024 – Jun 2025' },
    detalle: {
      es: 'Instalé y configuré programas, herramientas y equipos. Apliqué conocimientos de ciberseguridad, virtualización y soporte tecnológico.',
      en: 'Installed and configured software, tools and hardware. Applied cybersecurity, virtualization and tech support skills.',
    },
  },
]

export const CERTIFICACIONES = [
  {
    titulo: 'IT Essentials 7.01',
    lugar: 'Cisco Networking Academy · ITLA',
    fecha: { es: 'abril 2026', en: 'April 2026' },
    detalle: {
      es: 'Hardware, sistemas operativos, redes y soporte técnico.',
      en: 'Hardware, operating systems, networking and tech support.',
    },
  },
  {
    titulo: { es: 'Tester (28 horas)', en: 'Software Tester (28 hours)' },
    lugar: 'Capacítate para el Empleo · Fundación Carlos Slim',
    fecha: { es: 'abril 2025 · puntaje 9.51', en: 'April 2025 · score 9.51' },
    enlace: 'https://capacitateparaelempleo.org/verifica/ea22b5b3-889f-47c5-85dc-b794a9e159aa/1d1da325-bfc5-458f-baba-5e68fe0fba3f',
  },
]

export const CONTACTO = {
  correo: 'bryanlowky@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bryangonzalezz/',
  github: 'https://github.com/toeasyforbrn',
  discord: 'https://discord.com/users/1043281426268831865',
}
