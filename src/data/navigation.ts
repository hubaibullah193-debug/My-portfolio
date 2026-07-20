/**
 * Navigation data
 */

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const navigation: NavLink[] = [
  {
    label: 'Home',
    href: '#home',
    id: 'nav-home',
  },
  {
    label: 'About',
    href: '#about',
    id: 'nav-about',
  },
  {
    label: 'Skills',
    href: '#skills',
    id: 'nav-skills',
  },
  {
    label: 'Projects',
    href: '#projects',
    id: 'nav-projects',
  },
  {
    label: 'Services',
    href: '#services',
    id: 'nav-services',
  },
  {
    label: 'Why Me',
    href: '#why-work-with-me',
    id: 'nav-why-work-with-me',
  },
  {
    label: 'Contact',
    href: '#contact',
    id: 'nav-contact',
  },
];
