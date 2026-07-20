/**
 * Contact data — info, availability, social links
 */

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'hubaibullah193@gmail.com',
    href: 'mailto:hubaibullah193@gmail.com',
    icon: 'Mail',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+92 347 0954691',
    href: 'tel:+923470954691',
    icon: 'Phone',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Peshawar, Pakistan',
    href: 'https://maps.google.com/?q=Peshawar,Pakistan',
    icon: 'MapPin',
  },
];

export interface WhatsAppConfig {
  phone: string;
  message: string;
  url: string;
}

export const whatsapp: WhatsAppConfig = {
  phone: '+923470954691',
  message: 'Hi Hubaib, I would like to discuss a project.',
  url: 'https://wa.me/923470954691?text=Hi%20Hubaib%2C%20I%20would%20like%20to%20discuss%20a%20project.',
};

export interface AvailabilityStatus {
  available: boolean;
  message: string;
  detail: string;
}

export const availability: AvailabilityStatus = {
  available: true,
  message: 'Currently available for new projects',
  detail: 'Open to freelance, full-time, and contract opportunities.',
};

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  required: boolean;
  rows?: number;
}

export const formFields: FormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'Project inquiry',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell me about your project...',
    required: true,
    rows: 5,
  },
];
