import {
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaGithub,
  FaReact,
  FaJs,
  FaLock,
  FaPython,
} from 'react-icons/fa';
import {
  SiPrisma,
  SiPostgresql,
  SiPostman,
  SiNestjs,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiFastapi,
} from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'LearnQube',
    description:
      'An e-learning platform where users can buy and watch videos to learn tech skills. It offers a wide variety of courses designed to enhance learning through engaging video content.',
    image: '/learnqube-bg.png',
    githubLink: 'https://github.com/ChineduOscar/learnqube',
    liveLink: 'https://learnqube.netlify.app/',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
      'Google Auth 2.0',
    ],
  },
  {
    id: 2,
    title: 'LancheAI',
    description:
      'A Web3-powered AI system built on the Avalanche blockchain offering decentralized intelligent solutions for business automation. It enhances decision-making, security, and operational efficiency with smart contract integration.',
    image: '/lancheai-bg.png',
    githubLink: 'https://github.com/lancheaiteam/lancheai-v0',
    liveLink: 'https://lancheai.netlify.app',
    technologies: ['React', 'Tailwind CSS', 'Next.js', 'Node.js'],
  },
  {
    id: 3,
    title: 'Raymart',
    description:
      'An intuitive e-commerce platform for seamless shopping experiences with product search, secure checkout, and personalized recommendations.',
    image: '/raymart-bg.png',
    githubLink: 'https://github.com/ChineduOscar/Raymart',
    liveLink: 'https://raymart.onrender.com',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JavaScript',
      'CSS',
    ],
  },
  {
    id: 4,
    title: 'SmartifyPDF',
    description:
      'SmartifyPDF uses AI to instantly convert your PDFs into interactive quizzes, making learning faster and more engaging.',
    image: '/smartifypdf-bg.png',
    liveLink: 'https://smartifypdf.com',
    technologies: [
      'Next.js',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Gemini API',
      'JWT Authentication',
      'Firebase',
      'Tailwind CSS',
      'FastAPI',
      'Python',
    ],
  },
];

export const skills = [
  { name: 'JavaScript', icon: <FaJs className='text-[#F7DF1E] text-4xl' /> },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='text-[#3178C6] text-4xl' />,
  },
  { name: 'Node.js', icon: <FaNodeJs className='text-[#339933] text-4xl' /> },
  { name: 'NestJS', icon: <SiNestjs className='text-[#E0234E] text-4xl' /> },
  { name: 'Express', icon: <SiExpress className='text-[#000000] text-4xl' /> },

  { name: 'Python', icon: <FaPython className='text-[#3776AB] text-4xl' /> },
  { name: 'FastAPI', icon: <SiFastapi className='text-[#009688] text-4xl' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-[#4DB33D] text-4xl' /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className='text-[#336791] text-4xl' />,
  },
  { name: 'Prisma', icon: <SiPrisma className='text-[#2D3748] text-4xl' /> },
  { name: 'SQL', icon: <FaDatabase className='text-[#E53E3E] text-4xl' /> },
  { name: 'React', icon: <FaReact className='text-[#61DAFB] text-4xl' /> },
  { name: 'Postman', icon: <SiPostman className='text-[#FF6C37] text-4xl' /> },
  { name: 'Git', icon: <FaGitAlt className='text-[#F05032] text-4xl' /> },
  { name: 'GitHub', icon: <FaGithub className='text-[#181717] text-4xl' /> },
];

export const services = [
  {
    title: 'Backend Development',
    icon: <FaServer className='text-blue-400 text-2xl' />,
    description:
      'Building scalable, secure, and efficient backends with modern frameworks and databases.',
  },
  {
    title: 'API Development',
    icon: <FaDatabase className='text-green-400 text-2xl' />,
    description:
      'Creating RESTful and GraphQL APIs with technologies like NestJS, Express, and Prisma.',
  },
  {
    title: 'Database Management',
    icon: <SiPostgresql className='text-yellow-400 text-2xl' />,
    description:
      'Designing and managing databases with PostgreSQL, MongoDB, and SQL to ensure high performance and scalability.',
  },
  {
    title: 'Authentication & Security',
    icon: <FaLock className='text-purple-400 text-2xl' />,
    description:
      'Implementing secure authentication systems using JWT, OAuth, and other best practices.',
  },
];
