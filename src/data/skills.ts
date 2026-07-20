export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'Layout',
    description: 'Building responsive, interactive interfaces with modern frameworks and styling tools.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'Server',
    description: 'Developing scalable server-side logic, APIs, and secure authentication systems.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'Database',
    description: 'Designing and managing data storage with relational databases and ORMs.',
    skills: ['PostgreSQL', 'Supabase', 'Prisma ORM'],
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: 'Wrench',
    description: 'Leveraging development tools and platforms for efficient, collaborative workflows.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Figma'],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    icon: 'Megaphone',
    description: 'Driving growth through social media campaigns, SEO optimization, and content strategy.',
    skills: ['Facebook Marketing', 'Social Media Management', 'SEO', 'Content Strategy', 'Brand Promotion'],
  },
  {
    id: 'ai',
    name: 'AI',
    icon: 'Brain',
    description: 'Applying AI tools and prompt engineering to accelerate development and problem-solving.',
    skills: ['ChatGPT', 'Claude Code', 'Prompt Engineering'],
  },
];
