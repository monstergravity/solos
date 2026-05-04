import { Startup } from './types';

export const MOCK_STARTUPS: Startup[] = [
  {
    id: 'rezi',
    name: 'Rezi',
    description: 'The world\'s most advanced AI resume builder.',
    category: 'SaaS',
    logo: 'https://unavatar.io/rezi.ai',
    website: 'https://www.rezi.ai',
    mrr: 125000,
    revenue: 1500000,
    growth: 5,
    founder: {
      name: 'Jacob Jacquet',
      avatar: 'https://unavatar.io/twitter/jacobjacquet',
      twitter: 'https://x.com/jacobjacquet'
    },
    founded: '2019',
    isForSale: true,
    salePrice: 5000000,
    saleStats: {
      revenueMultiple: 4.0,
      recentViews: 2500,
      offersReceived: 2
    },
    insights: {
      valueProp: 'Professional resume optimization using AI.',
      targetAudience: 'Job seekers.',
      problemSolved: 'Getting past Applicant Tracking Systems (ATS).',
      pricing: '$19/mo',
      details: ['B2C', 'Subscription']
    },
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: [
      { date: 'Jan', value: 95000 },
      { date: 'Feb', value: 102000 },
      { date: 'Mar', value: 110000 },
      { date: 'Apr', value: 118000 },
      { date: 'May', value: 125000 },
    ]
  },
  {
    id: 'testimonial',
    name: 'Testimonial.to',
    description: 'Get video testimonials from your customers with ease.',
    category: 'Marketing',
    logo: 'https://logo.clearbit.com/testimonial.to',
    website: 'https://testimonial.to',
    mrr: 21000,
    revenue: 250000,
    growth: 8,
    founder: {
      name: 'Damon Chen',
      avatar: 'https://unavatar.io/twitter/damengchen',
      twitter: 'https://x.com/damengchen'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'The easiest way to collect and share video testimonials.',
      targetAudience: 'SaaS founders and creators.',
      problemSolved: 'Difficulty of collecting and displaying social proof.',
      pricing: '$19/mo - $69/mo',
      details: ['Bootstrapped', 'Social Proof']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js', 'Prisma']
    },
    revenueHistory: [
      { date: 'Jan', value: 17500 },
      { date: 'Feb', value: 18200 },
      { date: 'Mar', value: 19500 },
      { date: 'Apr', value: 20400 },
      { date: 'May', value: 21000 },
    ]
  },
  {
    id: 'bannerbear',
    name: 'Bannerbear',
    description: 'Automate your marketing visuals with our API and integrations.',
    category: 'Marketing',
    logo: 'https://logo.clearbit.com/bannerbear.com',
    website: 'https://www.bannerbear.com',
    mrr: 52000,
    revenue: 600000,
    growth: 4,
    founder: {
      name: 'Jon Yongfook',
      avatar: 'https://unavatar.io/twitter/yongfook',
      twitter: 'https://x.com/yongfook',
      linkedin: 'https://linkedin.com/in/yongfook'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'API for automated image and video generation.',
      targetAudience: 'Growth hackers and developers.',
      problemSolved: 'Manual design work for dynamic content.',
      pricing: '$49/mo - $299/mo',
      details: ['Open Startup', 'High Margin']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Ruby on Rails']
    },
    revenueHistory: [
      { date: 'Dec', value: 48000 },
      { date: 'Jan', value: 49500 },
      { date: 'Feb', value: 50200 },
      { date: 'Mar', value: 51000 },
      { date: 'Apr', value: 52000 },
    ]
  },
  {
    id: 'plausible',
    name: 'Plausible Analytics',
    description: 'Simple and privacy-friendly alternative to Google Analytics.',
    category: 'Analytics',
    logo: 'https://logo.clearbit.com/plausible.io',
    website: 'https://plausible.io',
    mrr: 110000,
    revenue: 1300000,
    growth: 6,
    founder: {
      name: 'Uku Taht',
      avatar: 'https://unavatar.io/twitter/ukutaht',
      twitter: 'https://x.com/ukutaht'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'Privacy-focused web analytics.',
      targetAudience: 'Website owners and privacy advocates.',
      problemSolved: 'Privacy concerns and complexity of Google Analytics.',
      pricing: '$9/mo+',
      details: ['Open Source', 'Bootstrapped']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Elixir', 'Phoenix', 'ClickHouse']
    },
    revenueHistory: [
      { date: 'Jan', value: 98000 },
      { date: 'Feb', value: 102000 },
      { date: 'Mar', value: 105000 },
      { date: 'Apr', value: 108000 },
      { date: 'May', value: 110000 },
    ]
  },
  {
    id: 'simpleanalytics',
    name: 'Simple Analytics',
    description: 'Privacy-first analytics without tracking your visitors.',
    category: 'Analytics',
    logo: 'https://logo.clearbit.com/simpleanalytics.com',
    website: 'https://simpleanalytics.com',
    mrr: 24000,
    revenue: 280000,
    growth: 3,
    founder: {
      name: 'Adriaan van Rossum',
      avatar: 'https://unavatar.io/twitter/adriaanvrossum',
      twitter: 'https://x.com/adriaanvrossum'
    },
    founded: '2018',
    isForSale: false,
    insights: {
      valueProp: 'Analytics that doesn\'t require a cookie banner.',
      targetAudience: 'EU companies and privacy-conscious devs.',
      problemSolved: 'GDPR compliance and user tracking.',
      pricing: '$19/mo',
      details: ['100% Privacy', 'Verified MRR']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 21000 },
      { date: 'Feb', value: 21800 },
      { date: 'Mar', value: 22500 },
      { date: 'Apr', value: 23200 },
      { date: 'May', value: 24000 },
    ]
  },
  {
    id: 'hypefury',
    name: 'Hypefury',
    description: 'Grow your Twitter audience and monetize your followers.',
    category: 'SaaS',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=HF&backgroundColor=6366f1',
    website: 'https://hypefury.com',
    mrr: 38000,
    revenue: 450000,
    growth: 5,
    founder: {
      name: 'Yannick Veys',
      avatar: 'https://unavatar.io/twitter/yannick_veys',
      twitter: 'https://x.com/yannick_veys'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Tweet scheduling and automation for growth.',
      targetAudience: 'Solopreneurs and influencers.',
      problemSolved: 'Low engagement and time-consuming manual tweeting.',
      pricing: '$19/mo - $49/mo',
      details: ['Bootstrapped', 'Creator Tools']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 32000 },
      { date: 'Feb', value: 34500 },
      { date: 'Mar', value: 36000 },
      { date: 'Apr', value: 37200 },
      { date: 'May', value: 38000 },
    ]
  },
  {
    id: 'pdfai',
    name: 'PDF.ai',
    description: 'Chat with any PDF document using AI.',
    category: 'Artificial Intelligence',
    logo: 'https://logo.clearbit.com/pdf.ai',
    website: 'https://pdf.ai',
    mrr: 115000,
    revenue: 1400000,
    growth: 15,
    founder: {
      name: 'Damon Chen',
      avatar: 'https://unavatar.io/twitter/damengchen',
      twitter: 'https://x.com/damengchen'
    },
    founded: '2023',
    isForSale: false,
    insights: {
      valueProp: 'Semantic search and chat for PDF files.',
      targetAudience: 'Students, researchers, and lawyers.',
      problemSolved: 'Reading long documents manually.',
      pricing: '$15/mo',
      details: ['Rapid Growth', 'AI First']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['OpenAI', 'Pinecone', 'Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 85000 },
      { date: 'Feb', value: 92000 },
      { date: 'Mar', value: 105000 },
      { date: 'Apr', value: 110000 },
      { date: 'May', value: 115000 },
    ]
  },
  {
    id: 'sitegpt',
    name: 'SiteGPT',
    description: 'Create your own AI chatbot trained on your website content.',
    category: 'Artificial Intelligence',
    logo: 'https://logo.clearbit.com/sitegpt.ai',
    website: 'https://sitegpt.ai',
    mrr: 62000,
    revenue: 750000,
    growth: 10,
    founder: {
      name: 'Bhanu Teja',
      avatar: 'https://unavatar.io/twitter/pbteja1998',
      twitter: 'https://x.com/pbteja1998'
    },
    founded: '2023',
    isForSale: false,
    insights: {
      valueProp: 'Instant custom AI customer support.',
      targetAudience: 'SaaS and e-commerce owners.',
      problemSolved: 'High support load and answering FAQs.',
      pricing: '$49/mo+',
      details: ['Solopreneur', 'Verified']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['OpenAI', 'Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 42000 },
      { date: 'Feb', value: 48000 },
      { date: 'Mar', value: 54000 },
      { date: 'Apr', value: 58000 },
      { date: 'May', value: 62000 },
    ]
  },
  {
    id: 'chatbase',
    name: 'Chatbase',
    description: 'Custom ChatGPT for your website data.',
    category: 'Artificial Intelligence',
    logo: 'https://logo.clearbit.com/chatbase.co',
    website: 'https://www.chatbase.co',
    mrr: 210000,
    revenue: 2500000,
    growth: 12,
    founder: {
      name: 'Yasser Elsaid',
      avatar: 'https://unavatar.io/twitter/yasser_elsaid',
      twitter: 'https://x.com/yasser_elsaid'
    },
    founded: '2023',
    isForSale: false,
    insights: {
      valueProp: 'Build advanced AI agents with your own data.',
      targetAudience: 'Enterprise and SMBs.',
      problemSolved: 'Generic GPT lack of domain knowledge.',
      pricing: '$19/mo - $399/mo',
      details: ['Market Leader', 'Solo Founder']
    },
    techStack: {
      frontend: ['Next.js', 'Tailwind'],
      backend: ['OpenAI', 'Python']
    },
    revenueHistory: [
      { date: 'Jan', value: 150000 },
      { date: 'Feb', value: 165000 },
      { date: 'Mar', value: 180000 },
      { date: 'Apr', value: 195000 },
      { date: 'May', value: 210000 },
    ]
  },
  {
    id: 'feather',
    name: 'Feather.so',
    description: 'Notion to Blog in minutes. Super fast and SEO friendly.',
    category: 'NOCode',
    logo: 'https://logo.clearbit.com/feather.so',
    website: 'https://feather.so',
    mrr: 14000,
    revenue: 160000,
    growth: 5,
    founder: {
      name: 'Bhanu Teja',
      avatar: 'https://unavatar.io/twitter/pbteja1998',
      twitter: 'https://x.com/pbteja1998'
    },
    founded: '2022',
    isForSale: false,
    insights: {
      valueProp: 'Use Notion as your CMS.',
      targetAudience: 'Creators and writers.',
      problemSolved: 'Clunky CMS interfaces.',
      pricing: '$15/mo - $39/mo',
      details: ['Notion Ecosystem', 'Solo']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 11000 },
      { date: 'Feb', value: 11800 },
      { date: 'Mar', value: 12500 },
      { date: 'Apr', value: 13200 },
      { date: 'May', value: 14000 },
    ]
  },
  {
    id: 'feedhive',
    name: 'FeedHive',
    description: 'The social media scheduler that helps you grow.',
    category: 'SaaS',
    logo: 'https://logo.clearbit.com/feedhive.io',
    website: 'https://feedhive.io',
    mrr: 28000,
    revenue: 340000,
    growth: 4,
    founder: {
      name: 'Simon Høiberg',
      avatar: 'https://unavatar.io/twitter/simonhoiberg',
      twitter: 'https://x.com/simonhoiberg'
    },
    founded: '2021',
    isForSale: false,
    insights: {
      valueProp: 'AI-assisted social media management.',
      targetAudience: 'Marketing agencies and creators.',
      problemSolved: 'Inconsistent posting and content planning.',
      pricing: '$19/mo - $299/mo',
      details: ['Community Driven', 'AI']
    },
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: [
      { date: 'Jan', value: 24000 },
      { date: 'Feb', value: 25200 },
      { date: 'Mar', value: 26100 },
      { date: 'Apr', value: 27200 },
      { date: 'May', value: 28000 },
    ]
  },
  {
    id: 'scrapingbee',
    name: 'ScrapingBee',
    description: 'Web scraping API that handles headless browsers and rotates proxies.',
    category: 'Developer Tools',
    logo: 'https://logo.clearbit.com/scrapingbee.com',
    website: 'https://www.scrapingbee.com',
    mrr: 125000,
    revenue: 1500000,
    growth: 4,
    founder: {
      name: 'Pierre de Wulf',
      avatar: 'https://unavatar.io/twitter/pierredewulf',
      twitter: 'https://x.com/pierredewulf'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'Reliable web scraping at scale.',
      targetAudience: 'Developers and data scientists.',
      problemSolved: 'IP blocking and browser detection.',
      pricing: '$49/mo - $999/mo',
      details: ['High LTV', 'Stable Growth']
    },
    techStack: {
      frontend: ['Vue.js'],
      backend: ['Node.js', 'AWS']
    },
    revenueHistory: []
  },
  {
    id: 'helpkit',
    name: 'HelpKit',
    description: 'Knowledge base for Notion. Beautiful, fast and customisable.',
    category: 'SaaS',
    logo: 'https://logo.clearbit.com/helpkit.so',
    website: 'https://www.helpkit.so',
    mrr: 12500,
    revenue: 150000,
    growth: 3,
    founder: {
      name: 'Dominik Sobe',
      avatar: 'https://unavatar.io/twitter/dominiksobe',
      twitter: 'https://x.com/dominiksobe'
    },
    founded: '2021',
    isForSale: false,
    insights: {
      valueProp: 'Self-service support using Notion.',
      targetAudience: 'Notion-first companies.',
      problemSolved: 'Poor help center design and UX.',
      pricing: '$19/mo - $79/mo',
      details: ['Indie Hacker', 'Bootstrapped']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 9500 },
      { date: 'Feb', value: 10200 },
      { date: 'Mar', value: 11000 },
      { date: 'Apr', value: 11800 },
      { date: 'May', value: 12500 },
    ]
  },
  {
    id: 'potion',
    name: 'Potion',
    description: 'Create custom websites from Notion.',
    category: 'NOCode',
    logo: 'https://logo.clearbit.com/potion.so',
    website: 'https://www.potion.so',
    mrr: 16000,
    revenue: 190000,
    growth: 2,
    founder: {
      name: 'Noah Bragg',
      avatar: 'https://unavatar.io/twitter/noahbragg',
      twitter: 'https://x.com/noahbragg'
    },
    founded: '2021',
    isForSale: false,
    insights: {
      valueProp: 'SEO-ready Notion websites.',
      targetAudience: 'Indie makers.',
      problemSolved: 'Complex website builders.',
      pricing: '$10/mo',
      details: ['Micro SaaS', 'Solo Built']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 14000 },
      { date: 'Feb', value: 14800 },
      { date: 'Mar', value: 15200 },
      { date: 'Apr', value: 15800 },
      { date: 'May', value: 16000 },
    ]
  },
  {
    id: 'super-so',
    name: 'Super.so',
    description: 'Notion to website in minutes.',
    category: 'NOCode',
    logo: 'https://logo.clearbit.com/super.so',
    website: 'https://super.so',
    mrr: 55000,
    revenue: 650000,
    growth: 3,
    founder: {
      name: 'Cam Gould',
      avatar: 'https://unavatar.io/twitter/camgould',
      twitter: 'https://x.com/camgould'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Static site generation for Notion.',
      targetAudience: 'Agencies and creators.',
      problemSolved: 'Notion\'s default slow public links.',
      pricing: '$12/mo',
      details: ['Market Leader', 'Fast UX']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 51000 },
      { date: 'Feb', value: 52500 },
      { date: 'Mar', value: 53200 },
      { date: 'Apr', value: 54100 },
      { date: 'May', value: 55000 },
    ]
  },
  {
    id: 'mailbrew',
    name: 'Mailbrew',
    description: 'Your own personal newsletter, with the best of the internet.',
    category: 'SaaS',
    logo: 'https://logo.clearbit.com/mailbrew.com',
    website: 'https://mailbrew.com',
    mrr: 10500,
    revenue: 120000,
    growth: -1,
    founder: {
      name: 'Francesco Di Lorenzo',
      avatar: 'https://unavatar.io/twitter/frankdilo',
      twitter: 'https://x.com/frankdilo'
    },
    founded: '2020',
    isForSale: true,
    salePrice: 150000,
    saleStats: {
      revenueMultiple: 1.2,
      recentViews: 800,
      offersReceived: 1
    },
    insights: {
      valueProp: 'Curation for busy professionals.',
      targetAudience: 'Information junkies.',
      problemSolved: 'Too much noise in social feeds.',
      pricing: '$10/mo',
      details: ['Sold in 2023', 'Acquisition']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 11000 },
      { date: 'Feb', value: 10800 },
      { date: 'Mar', value: 10600 },
      { date: 'Apr', value: 10500 },
      { date: 'May', value: 10500 },
    ]
  },
  {
    id: 'leavemealone',
    name: 'LeaveMeAlone',
    description: 'Easily unsubscribe from unwanted emails.',
    category: 'Privacy',
    logo: 'https://logo.clearbit.com/leavemealone.app',
    website: 'https://leavemealone.app',
    mrr: 6800,
    revenue: 80000,
    growth: 2,
    founder: {
      name: 'Danielle Johnson',
      avatar: 'https://unavatar.io/twitter/d_j_johnson',
      twitter: 'https://x.com/d_j_johnson'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'Clean up your inbox without giving away data.',
      targetAudience: 'Busy professionals.',
      problemSolved: 'Spam and marketing email overload.',
      pricing: '$7 - $15 one-time/mo',
      details: ['Digital Wellbeing', 'Solo Founder']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js']
    },
    revenueHistory: [
      { date: 'Jan', value: 6100 },
      { date: 'Feb', value: 6300 },
      { date: 'Mar', value: 6500 },
      { date: 'Apr', value: 6700 },
      { date: 'May', value: 6800 },
    ]
  },
  {
    id: 'userlist',
    name: 'Userlist',
    description: 'Email automation for SaaS companies.',
    category: 'Marketing',
    logo: 'https://logo.clearbit.com/userlist.com',
    website: 'https://userlist.com',
    mrr: 16500,
    revenue: 200000,
    growth: 3,
    founder: {
      name: 'Jane Portman',
      avatar: 'https://unavatar.io/twitter/itsportman',
      twitter: 'https://x.com/itsportman'
    },
    founded: '2017',
    isForSale: false,
    insights: {
      valueProp: 'B2B lifecycle email automation.',
      targetAudience: 'SaaS founders and PMs.',
      problemSolved: 'Marketing automation not built for B2B structures.',
      pricing: '$99/mo+',
      details: ['Niche SaaS', 'Bootstrapped']
    },
    techStack: {
      frontend: ['Vue.js'],
      backend: ['Ruby on Rails']
    },
    revenueHistory: []
  },
  {
    id: 'panelbear',
    name: 'Panelbear',
    description: 'Fast and lightweight website analytics.',
    category: 'Analytics',
    logo: 'https://logo.clearbit.com/panelbear.com',
    website: 'https://panelbear.com',
    mrr: 5000,
    revenue: 60000,
    growth: 1,
    founder: {
      name: 'Nuno Ayres',
      avatar: 'https://unavatar.io/twitter/nunoayres',
      twitter: 'https://x.com/nunoayres'
    },
    founded: '2020',
    isForSale: true,
    salePrice: 120000,
    saleStats: {
      revenueMultiple: 2.0,
      recentViews: 300,
      offersReceived: 0
    },
    insights: {
      valueProp: 'Speed and simplicity for analytics.',
      targetAudience: 'Personal blogs and indie makers.',
      problemSolved: 'Bloated analytics scripts.',
      pricing: '$0 - $29/mo',
      details: ['Micro SaaS', 'Verified']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js']
    },
    revenueHistory: []
  },
  {
    id: 'screenshotapi',
    name: 'ScreenshotAPI.net',
    description: 'Take programmatic screenshots of any website.',
    category: 'Developer Tools',
    logo: 'https://logo.clearbit.com/screenshotapi.net',
    website: 'https://screenshotapi.net',
    mrr: 8500,
    revenue: 100000,
    growth: 2,
    founder: {
      name: 'Gareth McCumskey',
      avatar: 'https://unavatar.io/twitter/garethmcc',
      twitter: 'https://x.com/garethmcc'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'Reliable website screenshots via URL.',
      targetAudience: 'Developers and marketing automation.',
      problemSolved: 'Running headless browsers at scale.',
      pricing: '$10/mo+',
      details: ['Utility', 'Indie Hacker']
    },
    techStack: {
      frontend: ['HTML/Tailwind'],
      backend: ['Python']
    },
    revenueHistory: []
  },
  {
    id: 'tweethunter',
    name: 'TweetHunter',
    description: 'The all-in-one Twitter growth tool.',
    category: 'SaaS',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TH&backgroundColor=2563eb',
    website: 'https://tweethunter.io',
    mrr: 350000,
    revenue: 4000000,
    growth: 20,
    founder: {
      name: 'Tibo Louis-Lucas',
      avatar: 'https://unavatar.io/twitter/tibo_maker',
      twitter: 'https://x.com/tibo_maker'
    },
    founded: '2021',
    isForSale: false,
    insights: {
      valueProp: 'AI-assisted ghostwriting for Twitter.',
      targetAudience: 'High-end influencers and businesses.',
      problemSolved: 'Writer\'s block and poor audience growth.',
      pricing: '$49/mo - $200/mo',
      details: ['Acquired by Lempire', 'Explosive Growth']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js', 'OpenAI']
    },
    revenueHistory: [
      { date: 'Jan', value: 180000 },
      { date: 'Feb', value: 220000 },
      { date: 'Mar', value: 280000 },
      { date: 'Apr', value: 320000 },
      { date: 'May', value: 350000 },
    ]
  },
  {
    id: 'nomadlist',
    name: 'Nomad List',
    description: 'Find the best places in the world to live, work and travel as a remote worker.',
    category: 'Travel',
    logo: 'https://logo.clearbit.com/nomadlist.com',
    website: 'https://nomadlist.com',
    mrr: 45000,
    revenue: 550000,
    growth: 5,
    founder: {
      name: 'Pieter Levels',
      avatar: 'https://unavatar.io/twitter/levelsio',
      twitter: 'https://x.com/levelsio'
    },
    founded: '2014',
    isForSale: false,
    insights: {
      valueProp: 'The ultimate database for digital nomads.',
      targetAudience: 'Remote workers and travelers.',
      problemSolved: 'Finding safe, affordable, and connected cities to work from.',
      pricing: '$99/year',
      details: ['Community Driven', 'Verified MRR']
    },
    techStack: {
      frontend: ['HTML/Tailwind'],
      backend: ['PHP', 'SQLite']
    },
    revenueHistory: []
  },
  {
    id: 'remoteok',
    name: 'Remote OK',
    description: 'The #1 remote job board on the web.',
    category: 'Jobs',
    logo: 'https://logo.clearbit.com/remoteok.com',
    website: 'https://remoteok.com',
    mrr: 58000,
    revenue: 700000,
    growth: 3,
    founder: {
      name: 'Pieter Levels',
      avatar: 'https://unavatar.io/twitter/levelsio',
      twitter: 'https://x.com/levelsio'
    },
    founded: '2015',
    isForSale: false,
    insights: {
      valueProp: 'Connect remote talent with the best companies.',
      targetAudience: 'Tech workers and hiring managers.',
      problemSolved: 'Difficulty finding truly remote-first positions.',
      pricing: '$299/post',
      details: ['High Margin', 'Solo Founder']
    },
    techStack: {
      frontend: ['HTML/Tailwind'],
      backend: ['PHP', 'SQLite']
    },
    revenueHistory: []
  },
  {
    id: 'carrd',
    name: 'Carrd',
    description: 'Simple, free, fully responsive one-page sites for pretty much anything.',
    category: 'NOCode',
    logo: 'https://logo.clearbit.com/carrd.co',
    website: 'https://carrd.co',
    mrr: 85000,
    revenue: 1000000,
    growth: 4,
    founder: {
      name: 'AJ',
      avatar: 'https://unavatar.io/twitter/ajlkn',
      twitter: 'https://x.com/ajlkn'
    },
    founded: '2016',
    isForSale: false,
    insights: {
      valueProp: 'The simplest website builder on the internet.',
      targetAudience: 'Creators and small businesses.',
      problemSolved: 'Complex and expensive website builders for simple needs.',
      pricing: '$19/year Pro Plan',
      details: ['Bootstrapped', 'Massive Scale']
    },
    techStack: {
      frontend: ['HTML/JS'],
      backend: ['Node.js']
    },
    revenueHistory: []
  },
  {
    id: 'tally',
    name: 'Tally.so',
    description: 'The simplest way to create forms. Free & no-code.',
    category: 'SaaS',
    logo: 'https://logo.clearbit.com/tally.so',
    website: 'https://tally.so',
    mrr: 75000,
    revenue: 900000,
    growth: 12,
    founder: {
      name: 'Marie Martens',
      avatar: 'https://unavatar.io/twitter/mariemartens',
      twitter: 'https://x.com/mariemartens'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Typeform alternative that works like a Notion doc.',
      targetAudience: 'Indie hackers and startups.',
      problemSolved: 'Expensive and restrictive form builders.',
      pricing: '$29/mo for Pro (Free unlimited docs)',
      details: ['High Growth', 'Product-Led']
    },
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: []
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'The issue tracker you\'ll actually like using.',
    category: 'Productivity',
    logo: 'https://logo.clearbit.com/linear.app',
    website: 'https://linear.app',
    mrr: 850000,
    revenue: 10000000,
    growth: 15,
    founder: {
      name: 'Karri Saarinen',
      avatar: 'https://unavatar.io/twitter/karrisaarinen',
      twitter: 'https://x.com/karrisaarinen'
    },
    founded: '2019',
    isForSale: false,
    insights: {
      valueProp: 'High-performance project management.',
      targetAudience: 'Software engineering teams.',
      problemSolved: 'Slow and bloated project management tools like Jira.',
      pricing: 'Free - $12/user/mo',
      details: ['VC Backed', 'Design Obsessed']
    },
    techStack: {
      frontend: ['React', 'TypeScript'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: []
  },
  {
    id: 'fathom',
    name: 'Fathom Analytics',
    description: 'The privacy-first alternative to Google Analytics.',
    category: 'Analytics',
    logo: 'https://logo.clearbit.com/usefathom.com',
    website: 'https://usefathom.com',
    mrr: 145000,
    revenue: 1750000,
    growth: 5,
    founder: {
      name: 'Paul Jarvis',
      avatar: 'https://unavatar.io/twitter/pjrvs',
      twitter: 'https://x.com/pjrvs'
    },
    founded: '2018',
    isForSale: false,
    insights: {
      valueProp: 'Simple, fast, and privacy-compliant analytics.',
      targetAudience: 'Corporate sites and privacy advocates.',
      problemSolved: 'Privacy laws (GDPR) and tracking complexity.',
      pricing: '$14/mo+',
      details: ['Bootstrapped', 'Privacy First']
    },
    techStack: {
      frontend: ['React'],
      backend: ['PHP', 'Laravel', 'ClickHouse']
    },
    revenueHistory: []
  },
  {
    id: 'ghost',
    name: 'Ghost',
    description: 'The world\'s most popular open source headless CMS.',
    category: 'SaaS',
    logo: 'https://logo.clearbit.com/ghost.org',
    website: 'https://ghost.org',
    mrr: 650000,
    revenue: 8000000,
    growth: 4,
    founder: {
      name: 'John O\'Nolan',
      avatar: 'https://unavatar.io/twitter/JohnOnolan',
      twitter: 'https://x.com/JohnOnolan'
    },
    founded: '2013',
    isForSale: false,
    insights: {
      valueProp: 'The best platform for independent publishing.',
      targetAudience: 'Professional writers and media companies.',
      problemSolved: 'WordPress bloat and lack of native monetization.',
      pricing: '$9/mo - $199/mo',
      details: ['Non-Profit', 'Open Source']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js', 'MySQL']
    },
    revenueHistory: []
  },
  {
    id: 'beehiiv',
    name: 'beehiiv',
    description: 'The newsletter platform built for growth.',
    category: 'Marketing',
    logo: 'https://logo.clearbit.com/beehiiv.com',
    website: 'https://beehiiv.com',
    mrr: 450000,
    revenue: 5400000,
    growth: 25,
    founder: {
      name: 'Tyler Denk',
      avatar: 'https://unavatar.io/twitter/denk_tweets',
      twitter: 'https://x.com/denk_tweets'
    },
    founded: '2021',
    isForSale: false,
    insights: {
      valueProp: 'Best-in-class newsletter tools and ad network.',
      targetAudience: 'Serious newsletter operators.',
      problemSolved: 'Lack of growth features in Substack/Mailchimp.',
      pricing: 'Free - $99/mo',
      details: ['VC Backed', 'Fastest Growing']
    },
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: []
  },
  {
    id: 'loops',
    name: 'Loops',
    description: 'The modern email platform for SaaS.',
    category: 'Marketing',
    logo: 'https://logo.clearbit.com/loops.so',
    website: 'https://loops.so',
    mrr: 55000,
    revenue: 650000,
    growth: 15,
    founder: {
      name: 'Chris Rogers',
      avatar: 'https://unavatar.io/twitter/chris_rogers',
      twitter: 'https://x.com/chris_rogers'
    },
    founded: '2022',
    isForSale: false,
    insights: {
      valueProp: 'Email for people who hate email marketing.',
      targetAudience: 'B2B SaaS companies.',
      problemSolved: 'Overly complex tools like Klaviyo or Intercom.',
      pricing: '$49/mo+',
      details: ['Community Favorite', 'Design First']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: []
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description: 'A powerful knowledge base that works on top of a local folder of plain text Markdown files.',
    category: 'Productivity',
    logo: 'https://logo.clearbit.com/obsidian.md',
    website: 'https://obsidian.md',
    mrr: 120000,
    revenue: 1500000,
    growth: 8,
    founder: {
      name: 'Erica Xu',
      avatar: 'https://unavatar.io/twitter/ericaxu',
      twitter: 'https://x.com/ericaxu'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Second brain that you own and control.',
      targetAudience: 'Knowledge workers and students.',
      problemSolved: 'Cloud lock-in and fragmented note-taking.',
      pricing: '$0 (Personal) - $50/year (Sync)',
      details: ['Offline First', 'Plugin Ecosystem']
    },
    techStack: {
      frontend: ['Electron', 'React'],
      backend: ['Local Storage']
    },
    revenueHistory: []
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'The fastest email experience ever made.',
    category: 'Productivity',
    logo: 'https://logo.clearbit.com/superhuman.com',
    website: 'https://superhuman.com',
    mrr: 1500000,
    revenue: 18000000,
    growth: 5,
    founder: {
      name: 'Rahul Vohra',
      avatar: 'https://unavatar.io/twitter/rahulvohra',
      twitter: 'https://x.com/rahulvohra'
    },
    founded: '2015',
    isForSale: false,
    insights: {
      valueProp: 'Inbox Zero in half the time.',
      targetAudience: 'Power users and executives.',
      problemSolved: 'Email overload and slow Gmail interface.',
      pricing: '$30/mo',
      details: ['Premium Positioning', 'Keyboard Driven']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js', 'Go']
    },
    revenueHistory: []
  },
  {
    id: 'copilot',
    name: 'Copilot',
    description: 'The modern client portal for service businesses.',
    category: 'Finance',
    logo: 'https://logo.clearbit.com/copilot.com',
    website: 'https://www.copilot.com',
    mrr: 250000,
    revenue: 3000000,
    growth: 10,
    founder: {
      name: 'Andres Ugarte',
      avatar: 'https://unavatar.io/twitter/andresugarte',
      twitter: 'https://x.com/andresugarte'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'All-in-one portal for billing, files, and messaging.',
      targetAudience: 'Agencies and accounting firms.',
      problemSolved: 'Fragmented client communication and fragmented workflows.',
      pricing: '$89/mo+',
      details: ['Fast Growing', 'B2B SaaS']
    },
    techStack: {
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Postgres']
    },
    revenueHistory: []
  },
  {
    id: 'dailydev',
    name: 'daily.dev',
    description: 'The professional network for developers.',
    category: 'Education',
    logo: 'https://logo.clearbit.com/daily.dev',
    website: 'https://daily.dev',
    mrr: 35000,
    revenue: 420000,
    growth: 12,
    founder: {
      name: 'Nimrod Kramer',
      avatar: 'https://unavatar.io/twitter/nimrod_kramer',
      twitter: 'https://x.com/nimrod_kramer'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Stay updated with the latest tech news.',
      targetAudience: 'Software developers.',
      problemSolved: 'Information overload and staying current.',
      pricing: 'Free (Ad supported)',
      details: ['Community Driven', 'Extension First']
    },
    techStack: {
      frontend: ['Next.js'],
      backend: ['Node.js', 'Google Cloud']
    },
    revenueHistory: []
  },
  {
    id: 'tally-forms',
    name: 'Tally',
    description: 'The newest way to create forms online.',
    category: 'NOCode',
    logo: 'https://logo.clearbit.com/tally.so',
    website: 'https://tally.so',
    mrr: 75000,
    revenue: 900000,
    growth: 12,
    founder: {
      name: 'Marie Martens',
      avatar: 'https://unavatar.io/twitter/mariemartens',
      twitter: 'https://x.com/mariemartens'
    },
    founded: '2020',
    isForSale: false,
    insights: {
      valueProp: 'Free unlimited forms that work like magic.',
      targetAudience: 'Startups and indie makers.',
      problemSolved: 'Expensive Typeform subscriptions.',
      pricing: '$29/mo (Pro)',
      details: ['Bootstrapped', 'Product-Led']
    },
    techStack: {
      frontend: ['React'],
      backend: ['Node.js']
    },
    revenueHistory: []
  },
  {
    id: 'strong',
    name: 'Strong App',
    description: 'Simple and intuitive workout tracker.',
    category: 'Health',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=SA&backgroundColor=3b82f6',
    website: 'https://www.strong.app',
    mrr: 120000,
    revenue: 1400000,
    growth: 2,
    founder: {
      name: 'Cameron Watkins',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron',
    },
    founded: '2016',
    isForSale: false,
    insights: {
      valueProp: 'The simplest way to track your gym progress.',
      targetAudience: 'Gym goers and bodybuilders.',
      problemSolved: 'Complexity of existing fitness apps.',
      pricing: '$4.99/mo or $29/year',
      details: ['Indie Success', 'User Driven']
    },
    techStack: {
      frontend: ['Native Swift/Kotlin'],
      backend: ['Node.js']
    },
    revenueHistory: []
  }
];
