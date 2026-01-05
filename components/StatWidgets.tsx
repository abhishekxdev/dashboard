
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface StatCardProps {
  value: string;
  label: string;
  trend: string;
  trendUp: boolean;
  color: string;
}

const Sparkline: React.FC<{ color: string }> = ({ color }) => {
  const data = [
    { v: 10 }, { v: 15 }, { v: 12 }, { v: 22 }, { v: 18 }, { v: 25 }, { v: 21 }, { v: 30 }
  ];
  return (
    <div className="h-10 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="v" stroke={color} fill={color} fillOpacity={0.1} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const StatCard: React.FC<StatCardProps> = ({ value, label, trend, trendUp, color }) => (
  <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className={`text-xs font-bold ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
          {trendUp ? '+' : ''}{trend}
        </span>
      </div>
      <p className="text-xs text-slate-500 mt-1">{label}</p>
    </div>
    <Sparkline color={color} />
  </div>
);

export const StatWidgets: React.FC = () => {
  return (
    <div className="space-y-4">
      <StatCard 
        value="58.9%" 
        label="Revenue recovery rate" 
        trend="4.92%" 
        trendUp={true} 
        color="#6366f1" 
      />
      <StatCard 
        value="10.2%" 
        label="Revenue failure rate" 
        trend="-2.16%" 
        trendUp={false} 
        color="#ec4899" 
      />
    </div>
  );
};
