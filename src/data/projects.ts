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
    title: 'teste',
    description: 'teste',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'fullstack'
  },

];