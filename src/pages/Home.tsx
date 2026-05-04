import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';
import { MOCK_STARTUPS } from '../data';
import StartupCard from '../components/StartupCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

import StartupLogo from '../components/StartupLogo';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-mono font-bold tracking-tighter mb-8"
        >
          The database of verified startup revenues
        </motion.h1>

        <div className="max-w-2xl mx-auto flex gap-2">
          <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
             <input 
               type="text" 
               placeholder='"SaaS over $10K/mo"'
               className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-mono"
             />
          </div>
          <Link to="/verify" className="bg-black text-white px-8 flex items-center justify-center rounded-xl font-bold hover:bg-gray-800 transition-colors font-mono">
            + Add startup
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500 font-mono">
          <button className="hover:text-black">Buy/sell</button>
          <button className="hover:text-black">Feed</button>
          <button className="hover:text-black">Stats</button>
          <button className="hover:text-black">Co-founders</button>
          <button className="hover:text-black">$1 vs $1,000,000</button>
        </div>
      </section>

      {/* Full Leaderboard */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <section className="bg-[#fcfcfc] border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-8 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold font-mono uppercase tracking-tight">Revenue Leaderboard</h2>
            <div className="flex gap-2">
               <select className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium font-mono focus:outline-none cursor-pointer hover:border-gray-300">
                 <option>MRR</option>
                 <option>Revenue</option>
               </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 font-mono">
                  <th className="px-8 py-4 w-16">#</th>
                  <th className="px-4 py-4">Startup</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Founder</th>
                  <th className="px-4 py-4 text-right">MRR</th>
                  <th className="px-8 py-4 text-right">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MOCK_STARTUPS.sort((a, b) => b.mrr - a.mrr).map((s, idx) => (
                  <tr key={s.id} className="hover:bg-gray-50 transition-colors group cursor-pointer" onClick={() => navigate(`/startup/${s.id}`)}>
                    <td className="px-8 py-6 font-mono text-gray-400 text-sm">
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-4">
                        <StartupLogo logo={s.logo} name={s.name} className="w-10 h-10" />
                        <div>
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{s.name}</span>
                             {s.isForSale && (
                               <span className="bg-brand-yellow text-[8px] font-bold px-1 py-0.5 rounded uppercase tracking-tighter">For Sale</span>
                             )}
                          </div>
                          <p className="text-xs text-gray-500 truncate max-w-[200px]">{s.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <span className="text-[10px] font-bold text-gray-400 font-mono uppercase tracking-widest bg-gray-50 px-2 py-1 rounded border border-gray-100">
                        {s.category}
                      </span>
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-2">
                        <img src={s.founder.avatar} className="w-6 h-6 rounded-full border border-gray-100" />
                        <span className="text-xs font-medium text-gray-600">{s.founder.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-right font-mono font-bold text-gray-900 text-sm">
                      ${s.mrr.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className={cn(
                        "inline-flex items-center gap-1 font-mono font-bold text-xs",
                        s.growth > 0 ? "text-green-500" : s.growth < 0 ? "text-red-500" : "text-gray-400"
                      )}>
                        {s.growth > 0 ? <TrendingUp className="w-3 h-3" /> : s.growth < 0 ? <TrendingDown className="w-3 h-3" /> : null}
                        {s.growth}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
