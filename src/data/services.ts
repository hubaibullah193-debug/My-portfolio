/**
 * Services data
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications with React, Next.js, Node.js, and modern databases.',
    icon: 'Code2',
  },
  {
    id: 'business-management-systems',
    title: 'Business Management Systems',
    description: 'Custom BMS solutions to streamline operations, inventory, and workflows.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Professional, conversion-focused websites that establish credibility and drive growth.',
    icon: 'Globe',
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Stunning personal portfolios that showcase your work and attract opportunities.',
    icon: 'Briefcase',
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    description: 'Interactive, data-rich dashboards with real-time visualizations and analytics.',
    icon: 'BarChart3',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Seamless third-party API integrations to extend your application capabilities.',
    icon: 'Plug',
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'Scalable, well-structured database architectures for performance and reliability.',
    icon: 'Database',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic campaigns across SEO, social media, and content to grow your reach.',
    icon: 'TrendingUp',
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Technical and on-page SEO strategies to rank higher and drive organic traffic.',
    icon: 'Search',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and monitoring to keep your site secure and performant.',
    icon: 'Wrench',
  },
];
