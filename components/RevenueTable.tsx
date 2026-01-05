
import React, { useState } from 'react';
import { Search, Info, Plus } from 'lucide-react';
import { REVENUE_DATA } from '../constants';

export const RevenueTable: React.FC = () => {
  const [activeCell, setActiveCell] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">SaaS Revenue</h2>
        <Info size={16} className="text-slate-400 cursor-help" />
      </div>

      <div className="p-4 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500 border-b border-slate-100">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder="Search variables" 
            className="pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-md outline-none w-48"
          />
        </div>
        <div className="flex items-center gap-1 italic">
          Select a cell to see its formula
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">
              <th className="px-6 py-3 font-bold">Inputs</th>
              <th className="px-6 py-3 font-bold">Formula</th>
              <th className="px-6 py-3 font-bold text-center">Jan '25</th>
              <th className="px-6 py-3 font-bold text-center">Feb '25</th>
              <th className="px-6 py-3 font-bold text-center">Mar '25</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {REVENUE_DATA.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <tr className="bg-slate-50/30">
                  <td colSpan={5} className="px-6 py-3 font-semibold text-slate-700 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${group.color}`}></div>
                    {group.title}
                  </td>
                </tr>
                {group.rows.map((row, rowIdx) => (
                  <tr 
                    key={`${groupIdx}-${rowIdx}`} 
                    className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <td className="px-6 py-3 flex items-center gap-3">
                      <span className="text-slate-400">
                        {row.type === 'percentage' ? '%' : row.type === 'currency' ? '$' : '#'}
                      </span>
                      <span className="text-slate-600 font-medium">{row.label}</span>
                    </td>
                    <td className="px-6 py-3 text-slate-900 font-medium">{row.formula}</td>
                    <td className="px-6 py-3 text-center text-indigo-600 font-semibold">{row.jan}</td>
                    <td className="px-6 py-3 text-center text-indigo-600 font-semibold">{row.feb}</td>
                    <td className="px-6 py-3 text-center text-indigo-600 font-semibold">{row.mar}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <button className="w-full py-3 px-6 text-left text-sm font-medium text-slate-400 hover:text-slate-600 hover:bg-slate-50 flex items-center gap-2 transition-all">
        <Plus size={16} />
        Add variable
      </button>
    </div>
  );
};
