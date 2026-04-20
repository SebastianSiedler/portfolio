export interface Education {
  id: string;
  institution: string;
  url: string;
  logo: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  location: string;
  honors?: string[];
  highlights?: string[];
}

export const education: Education[] = [
  {
    id: 'flpoly-ms',
    institution: 'Florida Polytechnic University',
    url: 'https://floridapoly.edu/',
    logo: '/assets/logos/flpoly_logo.png',
    area: 'Computer Science',
    studyType: 'Master of Science',
    startDate: '2025-08',
    endDate: '2026-06',
    location: 'Lakeland, FL',
    honors: ['Fulbright Grantee', 'Graduate Research Assistant'],
  },
  {
    id: 'thws',
    institution: 'Technical University of Applied Sciences Würzburg-Schweinfurt',
    url: 'https://fiw.thws.de/',
    logo: '/assets/logos/thws_logo.png',
    area: 'Computer Science',
    studyType: 'Bachelor of Engineering',
    startDate: '2021-10',
    endDate: '2025-03',
    location: 'Würzburg, Germany',
    highlights: [
      'Thesis: Analysis and Development of an Alternative OPC-UA Interface for MES Machine Integration',
      'Member of the Student Council (Fachschaft)',
      'Specialization: Mobile and Ubiquitous Solutions',
    ],
  },
  {
    id: 'fisasp',
    institution: 'FIS-ASP GmbH',
    url: 'https://www.fis-asp.de/',
    logo: '/assets/logos/fisasp_logo.png',
    area: 'IT Systems Integration',
    studyType: 'Apprenticeship — Fachinformatiker für Systemintegration',
    startDate: '2017-08',
    endDate: '2020-07',
    location: 'Grafenrheinfeld, Germany',
    honors: ['Outstanding Performance in Final Examination — 1st Place (Kammersieger)'],
    highlights: ['Vocational school: Heinrich-Thein-Schule Haßfurt'],
  },
];
