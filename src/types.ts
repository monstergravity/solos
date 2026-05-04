export interface Startup {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  website: string;
  mrr: number;
  revenue: number;
  growth: number;
  founder: {
    name: string;
    avatar: string;
    xHandle?: string;
    twitter?: string;
    linkedin?: string;
  };
  founded: string;
  isForSale: boolean;
  salePrice?: number;
  saleStats?: {
    revenueMultiple: number;
    recentViews: number;
    offersReceived: number;
  };
  insights: {
    valueProp: string;
    targetAudience: string;
    problemSolved: string;
    pricing: string;
    details: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
  };
  revenueHistory: { date: string; value: number }[];
}
