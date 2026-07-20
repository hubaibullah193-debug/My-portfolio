/**
 * About section data
 */

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface About {
  heading: string;
  subheading: string;
  bio: string[];
  stats: Stat[];
  values: Value[];
}

export const about: About = {
  heading: 'About Me',
  subheading: 'A glimpse into who I am and what drives me',
  bio: [
    "I'm a full-stack web developer and digital marketer who thrives at the intersection of technology and strategy. With a strong foundation in modern JavaScript frameworks and a passion for clean, scalable code, I build web applications that don't just work — they perform.",
    "Beyond code, I understand the power of digital marketing. I craft strategies that drive traffic, engagement, and conversions. Whether it's SEO, content strategy, or social media, I help businesses grow their online presence.",
    "I believe in continuous learning, attention to detail, and delivering solutions that create real impact for clients and users alike.",
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' },
    { value: '4+', label: 'Tech Domains' },
  ],
  values: [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, well-structured code that scales with your business.',
      icon: 'Code2',
    },
    {
      title: 'User First',
      description: 'Designing interfaces that are intuitive, accessible, and delightful to use.',
      icon: 'Users',
    },
    {
      title: 'Results Driven',
      description: 'Focusing on measurable outcomes that contribute to business growth.',
      icon: 'Target',
    },
    {
      title: 'Continuous Learning',
      description: 'Staying current with the latest technologies and industry best practices.',
      icon: 'BookOpen',
    },
  ],
} as const;
