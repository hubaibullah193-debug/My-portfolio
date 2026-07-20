/**
 * Why Work With Me data
 */

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const advantages: Advantage[] = [
  {
    id: 'clean-scalable-code',
    title: 'Clean & Scalable Code',
    description: 'Well-structured, maintainable code following best practices for long-term viability.',
    icon: 'Code2',
  },
  {
    id: 'business-focused-solutions',
    title: 'Business-Focused Solutions',
    description: 'Technology decisions driven by your business goals, not trends.',
    icon: 'Target',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Pixel-perfect experiences across all devices, from mobile to ultrawide.',
    icon: 'Smartphone',
  },
  {
    id: 'performance-seo',
    title: 'Performance & SEO',
    description: 'Optimized load times and search visibility to maximize user engagement.',
    icon: 'Gauge',
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication',
    description: 'Regular updates, transparent timelines, and no jargon — just results.',
    icon: 'MessageCircle',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Staying current with the latest technologies to deliver modern solutions.',
    icon: 'BookOpen',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description: 'Every pixel, interaction, and edge case is carefully considered and refined.',
    icon: 'Eye',
  },
  {
    id: 'long-term-support',
    title: 'Long-Term Support',
    description: 'Reliable post-launch support and maintenance to keep your project thriving.',
    icon: 'Handshake',
  },
];
