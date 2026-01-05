
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Line, 
  ComposedChart,
  Cell
} from 'recharts';
import { ARR_CHART_DATA, FUNNEL_DATA } from '../constants';

export const ArrGrowthChart: React.FC = () => {
  return (
    <div className="p-5 bg-white rounded-xl border border-slate-200 h-80">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800 text-sm">ARR + Growth</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            ARR
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            Growth
          </div>
        </div>
      </div>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={ARR_CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 500}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 500}}
              tickFormatter={(v) => `$${v / 1000}K`}
            />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
            />
            <Bar dataKey="arr" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={24} />
            <Bar dataKey="growth" fill="#c084fc" radius={[4, 4, 0, 0]} barSize={24} />
            <Line 
              type="monotone" 
              dataKey="arr" 
              stroke="#000" 
              strokeWidth={1} 
              strokeDasharray="4 4" 
              dot={{r: 3, fill: '#000', stroke: '#fff', strokeWidth: 2}}
              activeDot={{r: 5}}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const FunnelConversion: React.FC = () => {
  return (
    <div className="p-5 bg-white rounded-xl border border-slate-200">
      <h3 className="font-bold text-slate-800 text-sm mb-6">Funnel Conversion</h3>
      <div className="space-y-6">
        {FUNNEL_DATA.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-slate-500">{item.label}</span>
              <span className="text-slate-900">{item.percentage}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div 
                className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                style={{ width: `${item.percentage}%` }}
              />
              <div className="flex-1 flex gap-0.5 px-0.5">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="flex-1 bg-white opacity-20 h-full" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
