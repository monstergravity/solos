import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink, 
  HelpCircle,
  Lightbulb,
  Users,
  Briefcase,
  Layers,
  Heart,
  Mail,
  Shield,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import React from 'react';
import { MOCK_STARTUPS } from '../data';
import RevenueChart from '../components/RevenueChart';
import StartupCard from '../components/StartupCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

import StartupLogo from '../components/StartupLogo';

export default function StartupDetail() {
  const { id } = useParams();
  const startup = MOCK_STARTUPS.find(s => s.id === id);

  if (!startup) {
    return <div className="p-20 text-center font-mono">Startup not found</div>;
  }


  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Sale Banner */}
      {startup.isForSale && (
        <div className="bg-[#fff7ed] border-b border-orange-100 py-3 px-4 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-brand-orange hover:bg-orange-100 p-1 rounded-full transition-colors">
                 <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <p className="text-sm font-mono font-bold text-gray-900">
                  This startup is for sale. Asking price: <span className="text-brand-orange">${startup.salePrice?.toLocaleString()}</span>
                </p>
                <div className="flex gap-4 mt-1">
                   <div className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                     <TrendingUp className="w-3 h-3" /> {startup.saleStats?.revenueMultiple}x revenue
                   </div>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                     <Users className="w-3 h-3" /> {startup.saleStats?.recentViews} buyers saw this recently
                   </div>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                     <Mail className="w-3 h-3" /> {startup.saleStats?.offersReceived} offers received
                   </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-orange-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-orange-50 transition-colors shadow-sm">
                <Heart className="w-4 h-4" /> Save
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-brand-orange text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-200">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 font-mono">
           <Link to="/" className="flex items-center gap-1 hover:text-black tracking-tight">
             solos <ChevronRight className="w-3 h-3" />
           </Link>
           <span className="flex items-center gap-1 hover:text-black tracking-tight cursor-default">
             Startup <ChevronRight className="w-3 h-3" />
           </span>
           <span className="text-gray-900 tracking-tight">{startup.name}</span>
        </div>

        {/* Hero Info */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <StartupLogo logo={startup.logo} name={startup.name} />
            <div>
              <h1 className="text-4xl font-mono font-bold tracking-tight mb-2">{startup.name}</h1>
              <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
                {startup.description}
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           <MetricCard label="All-time revenue" value={`$${startup.revenue.toLocaleString()}`} subText={`Ranked #${Math.floor(Math.random() * 500)} on solos`} />
           <MetricCard label="MRR (estimated)" value={`$${startup.mrr.toLocaleString()}`} subText="Active subscriptions" hasInfo />
           <MetricCard 
             label="Founder" 
             value={startup.founder.name} 
             avatar={startup.founder.avatar} 
             subText={
               <div className="flex gap-2 mt-1">
                 {startup.founder.twitter && (
                   <a href={startup.founder.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2]">
                     <span className="text-[10px] uppercase tracking-widest font-bold">Twitter</span>
                   </a>
                 )}
                 {startup.founder.linkedin && (
                   <a href={startup.founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5]">
                     <span className="text-[10px] uppercase tracking-widest font-bold">LinkedIn</span>
                   </a>
                 )}
               </div>
             } 
           />
           <MetricCard label="Founded" value={startup.founded} subText="Moldova 🇲🇩" />
        </div>

        {/* Main Content Area */}
        <div className="space-y-8">
            {/* Screenshot Preview */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm aspect-video relative group bg-gray-50">
              <img 
                src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(startup.website)}?w=1280`} 
                alt={`${startup.name} real-time screenshot`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 opacity-0 transition-opacity"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-100">
                <span className="text-xs font-mono text-gray-400">Capturing real-time preview...</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-8">
                <a 
                  href={`${startup.website}?ref=solos`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-white/30 transition-all shadow-xl text-sm"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-mono font-bold flex items-center gap-2">
                    Monthly Recurring Revenue
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-widest rounded border border-blue-100">Verified</span>
                  </h2>
                  <p className="text-gray-400 text-xs font-medium mt-1">Growth trends based on Stripe data snapshots</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-1">
                    <button className="bg-white text-gray-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm ring-1 ring-black/5">MRR</button>
                    <button className="text-gray-500 hover:text-gray-900 px-3 py-1 text-xs font-bold">Volume</button>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-mono font-bold">${startup.mrr.toLocaleString()}</span>
                <span className="text-green-500 font-bold font-mono text-sm flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> 
                  +{startup.growth}% <span className="text-gray-400 font-normal">this month</span>
                </span>
              </div>
              
              {startup.revenueHistory.length > 0 ? (
                <RevenueChart data={startup.revenueHistory} />
              ) : (
                <div className="h-[300px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 text-gray-400 font-mono text-sm gap-2">
                  <HelpCircle className="w-8 h-8 opacity-20" />
                  No historical data available for this startup
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-gray-50 flex flex-wrap items-center justify-between gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Verified by solos</p>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Connected via Stripe API</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Last manual audit</p>
                    <p className="text-xs font-bold text-gray-700">May 3, 2026</p>
                 </div>
              </div>
            </div>

           {/* Insights Section */}
           <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
             <h2 className="text-lg font-bold font-mono mb-8 italic">Startup insights</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
               <InsightBlock 
                 icon={<Lightbulb className="w-5 h-5 text-gray-400" />} 
                 title="VALUE PROPOSITION"
                 content={startup.insights.valueProp}
               />
               <InsightBlock 
                 icon={<Users className="w-5 h-5 text-gray-400" />} 
                 title="TARGET AUDIENCE"
                 content={startup.insights.targetAudience}
               />
               <InsightBlock 
                 icon={<Briefcase className="w-5 h-5 text-gray-400" />} 
                 title="PROBLEM SOLVED"
                 content={startup.insights.problemSolved}
               />
               <InsightBlock 
                 icon={<Layers className="w-5 h-5 text-gray-400" />} 
                 title="BUSINESS DETAILS"
                 details={startup.insights.details}
               />
               <InsightBlock 
                 icon={<HelpCircle className="w-5 h-5 text-gray-400" />} 
                 title="PRICING"
                 content={startup.insights.pricing}
               />
             </div>
             <div className="mt-12 flex flex-wrap gap-2">
               {startup.insights.details.map(d => (
                 <span key={d} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-gray-600 font-mono">{d}</span>
               ))}
               <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-gray-600 font-mono">{startup.category}</span>
             </div>
           </section>

           {/* Tech Stack & More */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
               <h2 className="text-lg font-bold font-mono mb-8">Tech stack</h2>
               <div className="space-y-6">
                 <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Frontend</p>
                   <div className="flex flex-wrap gap-2">
                     {startup.techStack.frontend.map(t => (
                       <span key={t} className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-bold flex items-center gap-2">
                         <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${t}&backgroundColor=random`} className="w-4 h-4 rounded" />
                         {t}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Backend</p>
                   <div className="flex flex-wrap gap-2">
                     {startup.techStack.backend.map(t => (
                       <span key={t} className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-bold flex items-center gap-2">
                         <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${t}&backgroundColor=random`} className="w-4 h-4 rounded" />
                         {t}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </section>

             <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col justify-between">
               <h2 className="text-lg font-bold font-mono mb-4 text-center">Commit activity</h2>
               <div className="flex-1 flex items-center justify-center">
                 <div className="grid grid-cols-12 gap-1">
                   {Array.from({ length: 96 }).map((_, i) => (
                     <div 
                       key={i} 
                       className={cn(
                         "w-3 h-3 rounded-[2px]",
                         Math.random() > 0.7 ? "bg-green-600" : Math.random() > 0.4 ? "bg-green-400" : "bg-gray-100"
                       )}
                     />
                   ))}
                 </div>
               </div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mt-4">828 contributions in the last year</p>
             </section>
           </div>

           {/* Related */}
           <section className="pt-12">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-xl font-bold font-mono">More startups for sale</h2>
               <Link to="/" className="text-xs font-bold text-gray-500 hover:text-black flex items-center gap-1 font-mono">
                  View Marketplace <ChevronRight className="w-4 h-4" />
               </Link>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {MOCK_STARTUPS.filter(s => s.id !== id && s.isForSale).slice(0, 3).map(s => (
                 <StartupCard key={s.id} startup={s} />
               ))}
             </div>
           </section>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, subText, avatar, hasInfo }: { label: string; value: string; subText: React.ReactNode; avatar?: string; hasInfo?: boolean }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-1">
        {label} {hasInfo && <HelpCircle className="w-3 h-3" />}
      </p>
      <div className="flex items-center gap-3 mb-1">
        {avatar && <img src={avatar} className="w-8 h-8 rounded-full" />}
        <div className="flex flex-col">
          <p className="text-2xl font-mono font-bold text-gray-900">{value}</p>
        </div>
      </div>
      <div className="text-xs text-gray-400 font-medium">
        {subText}
      </div>
    </div>
  );
}

function InsightBlock({ icon, title, content, details }: { icon: React.ReactNode; title: string; content?: string; details?: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{title}</p>
        {content && <p className="text-sm font-medium text-gray-700 leading-relaxed">{content}</p>}
        {details && (
          <div className="flex flex-wrap gap-2">
            {details.map(d => (
              <span key={d} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-600">{d}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
