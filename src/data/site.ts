/**
 * Site-wide configuration and metadata
 */

export const siteConfig = {
  name: 'Hubaib Ullah',
  title: 'Hubaib Ullah - Full Stack Developer & Digital Marketer',
  description:
    'Full stack web developer and digital marketer specializing in building scalable web applications and digital growth strategies.',
  url: 'https://hubaibullah.com',
  ogImage: 'https://hubaibullah.com/og-image.jpg',
  links: {
    github: 'https://github.com/hubaibullah',
    facebook: 'https://facebook.com/hubaibullah',
    email: 'mailto:hubaibullah193@gmail.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;
