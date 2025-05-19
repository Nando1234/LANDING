import { Project, User, Service, BlogPost, Testimonial, Client, Sector, ProjectDocument } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Juan Quispe',
    email: 'cliente@yeul.pe',
    role: 'client',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Ana Rodriguez',
    email: 'perrosinprepucio@gmail.com',
    role: 'engineer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Carlos Huamán',
    email: 'admin@yeul.pe',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const projects: Project[] = [
  {
    id: '1',
    code: 'CLT-2025-001',
    name: 'Edificio Empresarial San Isidro',
    client: 'Grupo Empresarial Lima S.A.C.',
    status: 'in_progress',
    progress: 75,
    sector: 'Construcción',
    location: 'Lima, Perú',
    startDate: '2025-01-15',
    description: 'Diseño y construcción de un edificio empresarial con certificación LEED, que incluye sistemas de energía renovable y eficiencia energética.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    code: 'CLT-2025-002',
    name: 'Planta de Tratamiento de Aguas Arequipa',
    client: 'Municipalidad de Arequipa',
    status: 'pending',
    progress: 30,
    sector: 'Infraestructura Hídrica',
    location: 'Arequipa, Perú',
    startDate: '2025-02-10',
    description: 'Diseño y supervisión de construcción de una planta de tratamiento de aguas residuales con capacidad para 50,000 habitantes.',
    image: 'https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    code: 'CLT-2025-003',
    name: 'Ampliación Hospital Regional del Cusco',
    client: 'Gobierno Regional del Cusco',
    status: 'completed',
    progress: 100,
    sector: 'Salud',
    location: 'Cusco, Perú',
    startDate: '2024-11-05',
    endDate: '2025-03-20',
    description: 'Proyecto de ampliación de 3 nuevas alas para el Hospital Regional del Cusco, incluyendo quirófanos y áreas de terapia intensiva.',
    image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    code: 'CLT-2025-004',
    name: 'Puente Vehicular Trujillo Norte',
    client: 'Municipalidad Provincial de Trujillo',
    status: 'in_progress',
    progress: 45,
    sector: 'Infraestructura Vial',
    location: 'Trujillo, Perú',
    startDate: '2025-01-25',
    description: 'Diseño y supervisión de obra para un puente vehicular de 1.5 km que conectará la zona norte con el centro de la ciudad.',
    image: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    code: 'CLT-2025-005',
    name: 'Centro Comercial Plaza Miraflores',
    client: 'Inversiones Retail Perú S.A.',
    status: 'pending',
    progress: 15,
    sector: 'Comercial',
    location: 'Lima, Perú',
    startDate: '2025-04-10',
    description: 'Proyecto arquitectónico y de ingeniería para un centro comercial de 3 niveles con área de 45,000 m².',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Miguel Palacios',
    position: 'Director de Proyectos',
    company: 'Constructora del Sur',
    text: 'La colaboración con YEUL ha sido excepcional. Su equipo demostró un alto nivel de profesionalismo y conocimiento técnico que fue clave para el éxito de nuestro proyecto comercial.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Laura Mendoza',
    position: 'Gerente de Infraestructura',
    company: 'Municipalidad de Arequipa',
    text: 'El diseño de nuestra planta de tratamiento superó todas las expectativas. YEUL no solo entregó un proyecto técnicamente robusto, sino que también consideró aspectos ambientales y económicos fundamentales.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Ricardo Martinez',
    position: 'Director General',
    company: 'Desarrollos Inmobiliarios Perú S.A.C.',
    text: 'Llevamos trabajando con YEUL más de 5 años y siempre han demostrado compromiso y excelencia en cada proyecto. Su capacidad para resolver problemas y adaptarse a cambios ha sido invaluable.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Grupo Empresarial Lima S.A.C.',
    logo: 'https://cinco-creative.myshopify.com/cdn/shop/products/PerfectHomes-Construction-1_533x.jpg?v=1670553303',
  },
  {
    id: '2',
    name: 'Municipalidad de Arequipa',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmU3faS7uCJsBSAAEVRfgty7KrH3PGcp8fw&s',
  },
  {
    id: '3',
    name: 'Gobierno Regional del Cusco',
    logo: 'https://cinco-creative.myshopify.com/cdn/shop/products/GoldStandard-Construction-Logo-2_2625a26c-c4e9-4504-a7a5-8e093afec996_1946x.jpg?v=1675299009',
  },
  {
    id: '4',
    name: 'Constructora del Sur',
    logo: 'https://img.freepik.com/vector-premium/estampa-diseno-logotipo-vector-reparacion-construccion-inmobiliaria_1295800-28.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: '5',
    name: 'Desarrollos Inmobiliarios Perú S.A.C.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmU3faS7uCJsBSAAEVRfgty7KrH3PGcp8fw&s',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tendencias en Construcción Sostenible en Perú 2025',
    excerpt: 'Descubre las principales tendencias en edificación sostenible que están transformando la industria de la construcción en el Perú.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Ana Rodriguez',
    date: '2025-03-15',
    image: 'https://imgmedia.larepublica.pe/640x371/larepublica/original/2025/03/26/67e3fdb7af40561e30082bea.webp',
    tags: ['Sostenibilidad', 'Construcción', 'Innovación']
  },
  {
    id: '2',
    title: 'BIM en Proyectos de Infraestructura Pública',
    excerpt: 'Cómo la metodología BIM está revolucionando la planificación y ejecución de proyectos de infraestructura pública en el Perú.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Carlos Huamán',
    date: '2025-02-28',
    image: 'https://cdn.cs.1worldsync.com/b1/50/b1507503-322a-47f7-b261-85df67ff4f14.jpg',
    tags: ['BIM', 'Infraestructura', 'Tecnología']
  },
  {
    id: '3',
    title: 'Desafíos en Ingeniería Hidráulica: Casos de Éxito en la Sierra',
    excerpt: 'Análisis de proyectos exitosos que enfrentaron complejos desafíos en el diseño y ejecución de sistemas hidráulicos en la sierra peruana.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'María López',
    date: '2025-01-20',
    image: 'https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Hidráulica', 'Casos de Éxito', 'Innovación']
  },
];

export const sectors: Sector[] = [
  {
    id: '1',
    name: 'Infraestructura Vial',
    description: 'Carreteras, puentes, túneles y sistemas de transporte urbano.',
    image: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Edificación Comercial',
    description: 'Centros comerciales, oficinas, hoteles y espacios de uso mixto.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Infraestructura Hídrica',
    description: 'Presas, sistemas de conducción, plantas de tratamiento y sistemas de distribución.',
    image: 'https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Salud',
    description: 'Hospitales, clínicas, laboratorios y centros de investigación médica.',
    image: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'Educación',
    description: 'Escuelas, universidades, centros de investigación y espacios educativos.',
    image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const projectDocuments = [
  {
    id: '1',
    projectId: '1',
    name: 'Estudio de Mecánica de Suelos',
    type: 'pdf',
    section: 'Estudios Previos',
    status: 'approved',
    uploadDate: '2025-01-20',
    uploader: 'Ana Rodriguez',
  },
  {
    id: '2',
    projectId: '1',
    name: 'Plano Estructural Nivel 1',
    type: 'dxf',
    section: 'Planos',
    status: 'in_review',
    uploadDate: '2025-02-15',
    uploader: 'Ana Rodriguez',
  },
  {
    id: '3',
    projectId: '1',
    name: 'Presupuesto General',
    type: 'xlsx',
    section: 'Presupuesto',
    status: 'approved',
    uploadDate: '2025-02-05',
    uploader: 'Carlos Huamán',
  },
  {
    id: '4',
    projectId: '1',
    name: 'Informe de Avance Febrero',
    type: 'pdf',
    section: 'Informes técnicos',
    status: 'approved',
    uploadDate: '2025-03-01',
    uploader: 'Ana Rodriguez',
  },
  {
    id: '5',
    projectId: '1',
    name: 'Fotografías de Avance',
    type: 'jpg',
    section: 'Fotografías',
    status: 'approved',
    uploadDate: '2025-03-10',
    uploader: 'Ana Rodriguez',
  },
];