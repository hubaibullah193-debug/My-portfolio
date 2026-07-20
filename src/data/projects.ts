export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  status?: string;
  techStack: string[];
  features: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'bms',
    title: 'Business Management System',
    role: 'Full Stack Developer',
    description:
      'An all-in-one platform for managing businesses, customers, invoicing, and payments — built for small to medium enterprises.',
    image: '/images/projects/Buisness management system.png',
    status: 'In Development',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Supabase'],
    features: [
      'Customer management dashboard',
      'Invoice generation & tracking',
      'Payment processing integration',
      'Role-based access control',
      'Real-time analytics & reporting',
    ],
    github: 'https://github.com/Sayed-Ali-02/business-management-system',
    featured: true,
  },
  {
    id: 'marble-factory',
    title: 'Marble Factory Website',
    role: 'Frontend Developer',
    description:
      'A modern, responsive website for a marble factory — showcasing products, services, and enabling customer inquiries.',
    image: '/images/projects/marbel-factory.png',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: [
      'Responsive product catalog',
      'Smooth scroll animations',
      'Contact form with validation',
      'Performance-optimized images',
    ],
    live: '#',
  },
  {
    id: 'marble-marketing',
    title: 'Digital Marketing Campaign',
    role: 'Digital Marketing Specialist',
    description:
      'A comprehensive social media marketing campaign for the marble factory — driving brand awareness and lead generation.',
    image: '/images/projects/digital-marketing-1.png',
    techStack: ['Facebook Ads', 'SEO', 'Content Strategy', 'Social Media Management'],
    features: [
      'Targeted Facebook ad campaigns',
      'SEO-optimized content strategy',
      'Social media content calendar',
      'Performance analytics & reporting',
      'Brand consistency guidelines',
    ],
  },
];
