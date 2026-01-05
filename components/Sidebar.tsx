
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SIDEBAR_NAV, SIDEBAR_TEAM, SIDEBAR_ACCOUNTS, SIDEBAR_DATA, SIDEBAR_FOOTER } from '../constants';

// SidebarItem component for individual navigation links
const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`
    flex items-center gap-3 px-4 py-2.5 mx-2 cursor-pointer transition-all duration-200 group relative
    ${active 
      ? 'bg-white rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_2px_4px_-1px_rgba(0,0,0,0.04)] ring-1 ring-slate-200/60 font-semibold text-slate-900 translate-x-1' 
      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/30 rounded-lg'}
  `}>
    <span className={`${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600 transition-colors'}`}>{icon}</span>
    <span className="text-sm truncate">{label}</span>
    {active && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-600 rounded-full" />
    )}
  </div>
);

// SectionContainer for grouping navigation items
const SectionContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400/80 mb-1">{title}</h3>
    <div className="space-y-1">{children}</div>
  </div>
);

// Main Sidebar component
export const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-slate-50 border-r border-slate-200 h-screen flex flex-col overflow-hidden shrink-0 hidden lg:flex">
      {/* Sidebar Header */}
      <div className="p-6 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            P
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">Pipesale</span>
        </div>
        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-md transition-colors">
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <SectionContainer title="Revenue Cloud">
          {SIDEBAR_NAV.map((item, idx) => (
            <SidebarItem 
              key={idx} 
              icon={item.icon} 
              label={item.label} 
              active={'active' in item ? (item as any).active : false} 
            />
          ))}
        </SectionContainer>

        <SectionContainer title="Teams">
          {SIDEBAR_TEAM.map((item, idx) => (
            <SidebarItem key={idx} icon={item.icon} label={item.label} />
          ))}
        </SectionContainer>

        <SectionContainer title="Accounts">
          {SIDEBAR_ACCOUNTS.map((item, idx) => (
            <SidebarItem key={idx} icon={item.icon} label={item.label} />
          ))}
        </SectionContainer>

        <SectionContainer title="Reports & Data">
          {SIDEBAR_DATA.map((item, idx) => (
            <SidebarItem key={idx} icon={item.icon} label={item.label} />
          ))}
        </SectionContainer>
      </div>

      {/* Footer / Settings */}
      <div className="p-4 border-t border-slate-200/60 bg-white/50">
        {SIDEBAR_FOOTER.map((item, idx) => (
          <SidebarItem key={idx} icon={item.icon} label={item.label} />
        ))}
      </div>
    </aside>
  );
};
