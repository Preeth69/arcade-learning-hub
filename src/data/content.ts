
export interface Resource {
  id: string;
  title: string;
  description: string;
  link?: string;
  videoId?: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

export const learningContent: Phase[] = [
  {
    id: 'foundation',
    title: 'Phase 1: Foundation',
    description: 'Build the essential knowledge and mindset for successful trading',
    resources: [
      {
        id: 'market-basics',
        title: 'Market Basics',
        description: 'Understand how financial markets work, the major players, and basic terminology',
        link: 'https://www.investopedia.com/articles/basics/04/092404.asp',
        tags: ['Basics', 'Markets'],
        level: 'Beginner'
      },
      {
        id: 'psychology',
        title: 'Trading Psychology',
        description: 'Learn the psychological factors that impact trading decisions and how to manage them',
        videoId: 'M-KnYCK_wDY',
        tags: ['Psychology', 'Mindset'],
        level: 'Beginner'
      },
      {
        id: 'risk-management',
        title: 'Risk Management',
        description: 'Discover essential techniques to preserve capital and manage risk effectively',
        link: 'https://www.babypips.com/learn/forex/risk-management',
        tags: ['Risk', 'Capital Preservation'],
        level: 'Beginner'
      },
      {
        id: 'technical-analysis',
        title: 'Technical Analysis Fundamentals',
        description: 'Learn to read charts and basic technical indicators',
        videoId: 'lJ7MVzLGbZ0',
        tags: ['Technical Analysis', 'Charts'],
        level: 'Beginner'
      }
    ]
  },
  {
    id: 'strategy',
    title: 'Phase 2: Strategy',
    description: 'Develop and refine your trading strategies',
    resources: [
      {
        id: 'price-action',
        title: 'Price Action Trading',
        description: 'Learn to trade based on price movements without relying heavily on indicators',
        videoId: 'eKFSAH5IOug',
        tags: ['Price Action', 'Charts'],
        level: 'Intermediate'
      },
      {
        id: 'trend-trading',
        title: 'Trend Trading Strategies',
        description: 'Identify and follow market trends for profitable trades',
        link: 'https://www.investopedia.com/articles/trading/07/trend_following.asp',
        tags: ['Trends', 'Strategy'],
        level: 'Intermediate'
      },
      {
        id: 'options-basics',
        title: 'Options Trading Basics',
        description: 'Understand the fundamentals of options contracts and basic strategies',
        videoId: 'SD7sw0bf1ms',
        tags: ['Options', 'Derivatives'],
        level: 'Intermediate'
      }
    ]
  },
  {
    id: 'execution',
    title: 'Phase 3: Execution',
    description: 'Perfect your trade entries, exits, and position sizing',
    resources: [
      {
        id: 'entry-exit',
        title: 'Mastering Entries and Exits',
        description: 'Learn optimal techniques for entering and exiting trades',
        videoId: 'JKUm_iK-3yk',
        tags: ['Entries', 'Exits', 'Execution'],
        level: 'Intermediate'
      },
      {
        id: 'position-sizing',
        title: 'Position Sizing Strategies',
        description: 'Understand how to determine appropriate position sizes for your trades',
        link: 'https://www.investopedia.com/articles/trading/08/position-sizing.asp',
        tags: ['Position Sizing', 'Risk'],
        level: 'Intermediate'
      }
    ]
  },
  {
    id: 'refinement',
    title: 'Phase 4: Refinement',
    description: 'Track, analyze, and improve your trading performance',
    resources: [
      {
        id: 'journal',
        title: 'Trading Journal Techniques',
        description: 'Learn how to maintain an effective trading journal to track and improve your performance',
        link: 'https://traderhq.com/trading-journal/',
        tags: ['Journal', 'Improvement'],
        level: 'Intermediate'
      },
      {
        id: 'performance-metrics',
        title: 'Performance Metrics',
        description: 'Understand key metrics to evaluate your trading success',
        videoId: '6-guYh2Yy9g',
        tags: ['Metrics', 'Analysis'],
        level: 'Advanced'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Phase 5: Advanced Topics',
    description: 'Explore specialized trading approaches and advanced techniques',
    resources: [
      {
        id: 'options-advanced',
        title: 'Advanced Options Strategies',
        description: 'Learn complex options strategies for various market conditions',
        videoId: 'B3H4iqEkook',
        tags: ['Options', 'Advanced'],
        level: 'Advanced'
      },
      {
        id: 'algo-trading',
        title: 'Algorithmic Trading Introduction',
        description: 'Discover the basics of using algorithms and automation in trading',
        link: 'https://www.investopedia.com/articles/active-trading/101014/basics-algorithmic-trading-concepts-and-examples.asp',
        tags: ['Algorithms', 'Automation'],
        level: 'Advanced'
      }
    ]
  }
];
