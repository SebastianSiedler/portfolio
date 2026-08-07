export interface Paper {
  id: string;
  title: string;
  conference: string;
  url: string;
  year: number;
  published: boolean;
}

export const research: Paper[] = [
  {
    id: 'mirror',
    title: 'MIRROR: A Dataset of Structural Metrics for Repackaged Android Apps',
    conference: 'FORGE 2026',
    url: 'https://dl.acm.org/doi/full/10.1145/3793655.3793713',
    year: 2026,
    published: true,
  },
  {
    id: 'andrometric',
    title:
      'AndroMetric: Bridging Multi-Dimensional Software Metrics and Mobile Application Security',
    conference: 'MSR 2026',
    url: 'https://dl.acm.org/doi/full/10.1145/3793302.3793329',
    year: 2026,
    published: true,
  },
];
