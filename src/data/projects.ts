export interface Project {
  id: number;
  title: string;
  description: string;
  data: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fitout',
    description: 'Fitout é uma plataforma open-source para gerenciamento e acompanhamento de treinos, desenvolvida para atletas e personal trainers',
    data: '2024',
    image: '/projects/fitout.jpeg',
    tags: ['TypeScript', 'Node.js', 'Sqlite', 'Express', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/SantiaGhou/Fitout',
    liveUrl: 'https://github.com/SantiaGhou/Fitout',
    category: 'fullstack'
  },
    {
    id: 2,
    title: 'Zaavy.Ia',
    description: ' uma plataforma que permite que qualquer pessoa, mesmo sem saber programar, consiga criar chatbots integrados com i.a para WhatsApp de forma simples e eficiente.',
    data: '2025',
    image: '/projects/Zaavy.jpeg',
    tags: ['TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/SantiaGhou/Zaavy.Ia',
    liveUrl: 'https://github.com/SantiaGhou/Zaavy.Ia',
    category: 'fullstack'
  },
      {
    id: 3,
    title: 'Echohive',
    description: 'EchoHive é um app que o usuario pode dar play em arquivos de audio e salva los em uma interface visual agradavel (foi meu primeiro projeto em equipe)',
    data: '2023',
    image: '/projects/Echohive.jpg',
    tags: ['Java', 'JavaFX', 'SQLite'],
    githubUrl: 'https://github.com/VeiRL/Echohive',
    liveUrl: 'https://github.com/VeiRL/Echohive',
    category: 'fullstack'
  },
        {
    id: 4,
    title: 'T.H.O.R',
    description: 'T.H.O.R. é um assistente de IA pessoal, local-first e modular, inspirado no J.A.R.V.I.S. Desenvolvido para rodar em sua própria máquina, ele utiliza múltiplos modelos de linguagem (LLMs) para diferentes tarefas, garantindo especialização e privacidade.',
    data: '2025',
    image: '/projects/Thor.png',
    tags: ['Python', 'FastAPI', 'Node.js','LLMS' ],
    githubUrl: 'https://github.com/SantiaGhou/T.H.O.R',
    liveUrl: 'https://github.com/SantiaGhou/T.H.O.R',
    category: 'backend'
  },
          {
    id: 5,
    title: 'Coffe Delivery',
    description: 'Coffe Delivery foi um projeto desenvolvido como pratica de conclusão do curso Ignite da Rocketseat, onde foi utilizado ReactJs, TypeScript e TailwindCSS para criar uma interface responsiva e funcional portanto não possuo mais o mesmo em meu github.',
    data: '2024',
    image: '/projects/CoffeDelivery.png',
    tags: ['ReactJs', 'TypeScript', 'TailwindCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend'
  },
            {
    id: 6,
    title: 'BE2B KIDS - Landing Page',
    description: 'Projeto desenvolvido para anunciar o programa escola de campeões da empresa BE2B, o qual visa aprimorar habilidades de crianças e adolescentes com foco em empreendedorismo e inovação.',
    data: '2025',
    image: '/projects/Be2B_Kids.png',
    tags: ['ReactJs', 'TypeScript', 'TailwindCSS'],
    githubUrl: '',
    liveUrl: 'https://be2b-kids.netlify.app/',
    category: 'frontend'
  },
  { 
    id: 7,
    title: 'Fyinlitics - Gerador de DRES Automatizado',
    description: 'Projeto Desenvolvido dentro da BE2B para empresarios gerarem gráficos e poderem visualizar suas DRES de forma mais intuitiva e pratica. ',
    data: '2025',
    image: '/projects/fyinlitics.jpg',
    tags: ['ReactJs', 'TypeScript', 'TailwindCSS','Node.js','Express','PostgreSQL'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack'
  },  
  { 
    id: 8,
    title: 'Nutri.Ai - Assistente Virtual Nutricional',
    description: 'Projeto desenvolvido com o objetivo de ter maior controle sobre minha alimentação de forma personalizada, alinhada aos meus objetivos. A aplicação funciona diretamente no WhatsApp, tornando o uso prático e acessível, e conta com um sistema de reconhecimento de imagens capaz de identificar alimentos e calcular calorias a partir das fotos enviadas.',
    data: '2024',
    image: '/projects/nutria.png',
    tags: ['Node.js','Python','Express','PostgreSQL','Openai','Whatsapp API'],
    githubUrl: '',
    liveUrl: '',
    category: 'backend'
  },
    { 
    id: 9,
    title: 'Snitap - LP página De Vendas Patíns',
    description: 'Projeto desenvolvido como parte da formação Fullstack Da Rocketseat, onde foi criado uma landing page para vendas de patíns!',
    data: '2024',
    image: '/projects/SnitapPatins.png',
    tags: ['HTML','CSS','JavaScript'],
    githubUrl: 'https://github.com/SantiaGhou/Snitap-Patins-LP-',
    liveUrl: '',
    category: 'frontend'
  },
      { 
    id: 10,
    title: 'NUMBERS - Sorteador de Números',
    description: 'Projeto desenvolvido como parte da formação Fullstack Da Rocketseat, onde foi criado um sorteador de números randomicos!',
    data: '2024',
    image: '/projects/Numbers.png',
    tags: ['HTML','CSS','JavaScript'],
    githubUrl: 'https://github.com/SantiaGhou/Numbers',
    liveUrl: '',
    category: 'frontend'
  },      { 
    id: 11,
    title: 'Habits - habit Dayly Tracker',
    description: 'Projeto desenvolvido como parte do nlw Da Rocketseat, onde foi criado um rastreador de hábitos e resolvi ir alem adicionando uma analise de evolução com I.a Que analiza os habitos e retorna um feedback de como melhorar o desempenho de habitos não concluidos',
    data: '2024',
    image: '/projects/habits.png',
    tags: ['Typescript','React','TailwindCSS'],
    githubUrl: 'https://github.com/SantiaGhou/Habits',
    liveUrl: '',
    category: 'fullstack'
  },

  
];