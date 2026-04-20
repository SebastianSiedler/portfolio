export interface Paper {
  id: string;
  title: string;
  conference: string;
  url: string;
  year: number;
}

export const research: Paper[] = [
  {
    id: 'mirror',
    title: 'MIRROR: A Dataset of Structural Metrics for Repackaged Android Apps',
    conference: 'FORGE 2026',
    url: 'https://conf.researchr.org/details/forge-2026/forge-2026-benchmarking/5/MIRROR-A-Dataset-of-Structural-Metrics-for-Repackaged-Android-Apps',
    year: 2026,
  },
  {
    id: 'andrometric',
    title:
      'AndroMetric: Bridging Multi-Dimensional Software Metrics and Mobile Application Security',
    conference: 'MSR 2026',
    url: 'https://2026.msrconf.org/details/msr-2026-data-and-tool-showcase-track/26/AndroMetric-Bridging-Multi-Dimensional-Software-Metrics-and-Mobile-Application-Secur',
    year: 2026,
  },
];
