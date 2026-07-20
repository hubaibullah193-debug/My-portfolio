/**
 * Personal information data
 */

export const personal = {
  name: 'Hubaib Ullah',
  title: 'Full Stack Web Developer & Digital Marketer',
  tagline: 'Building scalable web applications & digital growth strategies.',
  bio: 'I am a passionate full-stack web developer with expertise in modern JavaScript frameworks and digital marketing strategies. I combine technical excellence with strategic thinking to deliver impactful solutions.',
  email: 'hubaibullah193@gmail.com',
  phone: '+92 347 0954691',
  whatsapp: '+92 347 0954691',
  location: 'Peshawar, Pakistan',
  profileImage: '/images/profile.jpg',
} as const;

export type Personal = typeof personal;
