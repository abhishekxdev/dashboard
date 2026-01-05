
import React from 'react';
import { Search, ChevronDown, MessageSquare, Info } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="p-6 bg-white border-b border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Revenue Intelligence</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search deals, reps, accounts..." 
              className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-80 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <MessageSquare size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 whitespace-nowrap">
          <div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center text-[10px] text-white">M</div>
          <span>Models /</span>
          <div className="w-4 h-4 rounded bg-purple-500 flex items-center justify-center text-[10px] text-white">S</div>
          <span className="text-slate-900">SaaS Revenue</span>
        </div>

        <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap">
          <span className="w-5 h-5 flex items-center justify-center text-slate-400">📅</span>
          Q1 2025
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap">
          <LinkIcon size={14} className="text-slate-400" />
          Models
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap">
          <ScenariosIcon size={14} className="text-slate-400" />
          Scenarios
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        <button className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap ml-auto">
          <TypeIcon size={14} className="text-slate-400" />
          Type: <span className="text-indigo-600">Spreadsheet</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
};

// Simple Icons
const LinkIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ScenariosIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const TypeIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);
