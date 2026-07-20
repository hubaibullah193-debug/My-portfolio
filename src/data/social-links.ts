/**
 * Social links data
 */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/hubaibullah',
    icon: 'GitHub',
    label: 'Follow on GitHub',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/hubaibullah',
    icon: 'Facebook',
    label: 'Follow on Facebook',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:hubaibullah193@gmail.com',
    icon: 'Mail',
    label: 'Send an email',
  },
];
