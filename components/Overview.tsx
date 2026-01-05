
import React from 'react';
import { TrendingUp, DollarSign, Users, Target, AlertCircle, CheckCircle } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface OverviewCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  trend?: Array<{ value: number }>;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, change, isPositive, icon, trend }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
        {icon}
      </div>
      <div className={`px-2 py-1 rounded-full text-xs font-bold ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {isPositive ? '+' : ''}{change}
      </div>
    </div>
    <h3 className="text-sm text-slate-500 mb-1">{title}</h3>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      {trend && (
        <div className="h-12 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositive ? '#10b981' : '#ef4444'}
                fill={isPositive ? '#10b981' : '#ef4444'}
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  </div>
);

interface QuickStatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  status?: 'success' | 'warning' | 'neutral';
}

const QuickStat: React.FC<QuickStatProps> = ({ label, value, icon, status = 'neutral' }) => {
  const statusColors = {
    success: 'bg-green-50 text-green-600 border-green-100',
    warning: 'bg-amber-50 text-amber-600 border-amber-100',
    neutral: 'bg-slate-50 text-slate-600 border-slate-100',
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border ${statusColors[status]}`}>
      <div className="text-inherit">{icon}</div>
      <div>
        <p className="text-xs font-medium opacity-80">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

export const Overview: React.FC = () => {
  const arrTrend = [
    { value: 75000 }, { value: 82000 }, { value: 88000 },
    { value: 95000 }, { value: 103000 }, { value: 112000 }
  ];

  const mrrTrend = [
    { value: 8500 }, { value: 9100 }, { value: 9600 },
    { value: 10200 }, { value: 10800 }, { value: 11500 }
  ];

  const customerTrend = [
    { value: 45 }, { value: 48 }, { value: 52 },
    { value: 56 }, { value: 61 }, { value: 67 }
  ];

  const dealTrend = [
    { value: 18 }, { value: 22 }, { value: 19 },
    { value: 25 }, { value: 28 }, { value: 32 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-1">Business Overview</h2>
        <p className="text-sm text-slate-500">Key metrics and performance indicators for Q1 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <OverviewCard
          title="Annual Recurring Revenue"
          value="$112K"
          change="18.2%"
          isPositive={true}
          icon={<DollarSign size={20} />}
          trend={arrTrend}
        />
        <OverviewCard
          title="Monthly Recurring Revenue"
          value="$11.5K"
          change="15.4%"
          isPositive={true}
          icon={<TrendingUp size={20} />}
          trend={mrrTrend}
        />
        <OverviewCard
          title="Active Customers"
          value="67"
          change="12.8%"
          isPositive={true}
          icon={<Users size={20} />}
          trend={customerTrend}
        />
        <OverviewCard
          title="Active Deals"
          value="32"
          change="23.5%"
          isPositive={true}
          icon={<Target size={20} />}
          trend={dealTrend}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStat
          label="Avg Deal Size"
          value="$15.2K"
          icon={<DollarSign size={18} />}
          status="success"
        />
        <QuickStat
          label="Win Rate"
          value="42.3%"
          icon={<CheckCircle size={18} />}
          status="success"
        />
        <QuickStat
          label="Churn Rate"
          value="8.7%"
          icon={<AlertCircle size={18} />}
          status="warning"
        />
        <QuickStat
          label="Sales Cycle"
          value="45 days"
          icon={<Target size={18} />}
          status="neutral"
        />
      </div>
    </div>
  );
};
