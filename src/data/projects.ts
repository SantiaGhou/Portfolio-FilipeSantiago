export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced product filtering, secure payment processing, real-time inventory management, and responsive design for optimal user experience.',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'An interactive analytics dashboard featuring real-time data visualization, customizable widgets, performance metrics, and comprehensive social media insights.',
    image: 'https://images.pexels.com/photos/7887815/pexels-photo-7887815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js', 'API Integration'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'A robust RESTful API with JWT authentication, role-based authorization, comprehensive documentation, and scalable architecture for enterprise applications.',
    image: 'https://images.pexels.com/photos/7172649/pexels-photo-7172649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, group conversations, emoji reactions, and end-to-end encryption.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with modern design, smooth animations, contact forms, and optimized performance for showcasing creative work.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'CSS Modules', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Microservices Architecture',
    description: 'A scalable microservices system with API Gateway, service discovery, load balancing, monitoring, and containerized deployment.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'Nginx'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'backend'
  }
];