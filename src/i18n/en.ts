export const en = {
  meta: {
    title: 'Sebastian Siedler – Software Engineer',
    description:
      'Portfolio of Sebastian Siedler, software engineer and Fulbright grantee based in Munich, Germany.',
  },
  nav: {
    experience: 'Experience',
    education: 'Education',
    research: 'Research',
    contact: 'Contact',
  },
  hero: {
    tagline: 'Software Engineer & Fulbright Grantee',
    location: 'Munich, Germany',
    bio: 'Software engineer and Fulbright grantee pursuing an MS in Computer Science at Florida Polytechnic University. I build web applications and conduct research at the intersection of software metrics and mobile security. Previously worked on automotive software at ZF Friedrichshafen, enterprise AI tooling at vAudience, and data-driven frontend systems at Prognostica.',
  },
  sections: {
    experience: 'Experience',
    education: 'Education',
    research: 'Research',
    contact: 'Contact',
  },
  common: {
    present: 'Present',
  },
  research: {
    submitted: 'Submitted',
    viewPaper: 'View Paper',
  },
  contact: {
    heading: 'Get in Touch',
    description: 'Feel free to reach out via email or connect on social media.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Location',
    locationValue: 'Munich, Germany',
  },
  footer: {
    rights: '© 2026 Sebastian Siedler. All rights reserved.',
  },
  theme: {
    toggleLight: 'Switch to light mode',
    toggleDark: 'Switch to dark mode',
  },
  lang: {
    switchTo: 'DE',
    switchHref: '/de',
  },
} as const;

export type Translations = typeof en;
