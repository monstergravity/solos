import React from 'react';
import { Link } from 'react-router-dom';
import { Startup } from '../types';
import { cn } from '../lib/utils';

import StartupLogo from './StartupLogo';

interface StartupCardProps {
  startup: Startup;
  className?: string;
  key?: string | number;
}

export default function StartupCard({ startup, className }: StartupCardProps) {
  return (
    <Link 
      to={`/startup/${startup.id}`}
      className={cn(
        "group relative bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300",
        className
      )}
    >
      {startup.isForSale && (
        <div className="absolute top-3 right-3 bg-brand-yellow px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
          For Sale
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-6">
        <StartupLogo logo={startup.logo} name={startup.name} />
        <div>
          <h3 className="font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {startup.name}
          </h3>
          <p className="text-xs text-gray-500 truncate max-w-[150px]">
            {startup.category}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-gray-50 pt-4">
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Revenue</p>
          <p className="font-mono text-sm font-bold text-gray-900">${(startup.mrr / 1000).toFixed(1)}k</p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Price</p>
          <p className="font-mono text-sm font-bold text-gray-900">
            {startup.salePrice ? `$${(startup.salePrice / 1000).toFixed(0)}k` : '—'}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Multiple</p>
          <p className="font-mono text-sm font-bold text-gray-900">
            {startup.saleStats?.revenueMultiple ?? '—'}x
          </p>
        </div>
      </div>
    </Link>
  );
}
