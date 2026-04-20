export interface Experience {
  id: string;
  organization: string;
  url: string;
  logo: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: 'flpoly-gra',
    organization: 'Florida Polytechnic University',
    url: 'https://floridapoly.edu/',
    logo: '/assets/logos/flpoly_logo.png',
    location: 'Lakeland, FL',
    position: 'Graduate Research Assistant',
    startDate: '2025-08',
    endDate: null,
    highlights: [
      'Conducted research at the intersection of software metrics and mobile application security, resulting in two submitted conference papers.',
      'MIRROR: A Dataset of Structural Metrics for Repackaged Android Apps — submitted to FORGE 2026.',
      'AndroMetric: Bridging Multi-Dimensional Software Metrics and Mobile Application Security — submitted to MSR 2026.',
    ],
  },
  {
    id: 'vaudience',
    organization: 'vAudience GmbH',
    url: 'https://www.vaudience.ai/',
    logo: '/assets/logos/vaudience_logo.png',
    location: 'Würzburg, Germany',
    position: 'Software Developer',
    startDate: '2025-04',
    endDate: '2025-08',
    highlights: [
      'Contributed to Nexus, a multi-LLM conversational platform for enterprise use, enabling organizations to manage user access and integrate multiple large language models within a unified interface built with Vue 3 and TypeScript.',
    ],
  },
  {
    id: 'zf',
    organization: 'ZF Friedrichshafen AG',
    url: 'https://www.zf.com/',
    logo: '/assets/logos/zf_logo.png',
    location: 'Schweinfurt, Germany',
    position: 'Dual Student – Software Development',
    startDate: '2021-08',
    endDate: '2025-03',
    highlights: [
      'Developed an automated solution for flashing correct hex files (bootloader and application software) onto ECUs for the eWorX system in commercial vehicles, reducing manual errors and improving traceability.',
      'Designed and built a web application to streamline equipment changeovers on the shop floor by comparing current and upcoming production orders, helping workers identify required adjustments quickly.',
    ],
  },
  {
    id: 'prognostica',
    organization: 'Prognostica GmbH',
    url: 'https://www.prognostica.de/de/',
    logo: '/assets/logos/prognostica_logo.png',
    location: 'Würzburg, Germany',
    position: 'Software Developer (Frontend)',
    startDate: '2022-10',
    endDate: '2023-08',
    highlights: [
      'Built frontend solutions in TypeScript and Vue 3, integrating data science models into production systems with reactive components for interactive forecasting.',
      'Maintained an internal indicator database via API integration and contributed to CI/CD pipelines using Docker and Kubernetes.',
    ],
  },
];
