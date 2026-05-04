import React from 'react';
import { cn } from '../lib/utils';

interface StartupLogoProps {
  logo: string;
  name: string;
  className?: string;
}

export default function StartupLogo({ logo, name, className = "w-12 h-12" }: StartupLogoProps) {
  const [error, setError] = React.useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  
  const getBackgroundColor = (str: string) => {
    const colors = [
      'bg-blue-600', 'bg-indigo-600', 'bg-purple-600', 
      'bg-pink-600', 'bg-emerald-600', 'bg-orange-600', 
      'bg-rose-600', 'bg-cyan-600', 'bg-violet-600',
      'bg-[#6366f1]'
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  if (error || !logo) {
    return (
      <div className={cn(className, "rounded-xl flex items-center justify-center font-sans font-bold text-white tracking-tight shadow-sm", getBackgroundColor(name), className.includes('w-20') ? 'text-3xl' : 'text-lg')}>
        {initials}
      </div>
    );
  }

  return (
    <img 
      src={logo} 
      alt={name} 
      className={cn(className, "rounded-xl object-cover ring-1 ring-gray-100 bg-white shadow-sm")}
      onError={() => setError(true)}
    />
  );
}
