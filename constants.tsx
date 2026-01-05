
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Target, 
  Zap, 
  Filter, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Trophy, 
  Milestone, 
  BookOpen, 
  FileSearch, 
  AlertTriangle, 
  RefreshCcw, 
  FileText, 
  Download, 
  Database,
  Settings,
  Lock,
  Link
} from 'lucide-react';
import { RevenueGroup, ChartDataPoint } from './types';

export const SIDEBAR_NAV = [
  { icon: <LayoutDashboard size={18} />, label: 'Overview' },
  { icon: <BarChart3 size={18} />, label: 'Performance Dashboard' },
  { icon: <Target size={18} />, label: 'Pipeline Insights' },
  { icon: <Zap size={18} />, label: 'Revenue Intelligence', active: true },
  { icon: <Filter size={18} />, label: 'Conversion Funnel' },
  { icon: <TrendingUp size={18} />, label: 'Forecasting' },
];

export const SIDEBAR_TEAM = [
  { icon: <Users size={18} />, label: 'Team Leaderboard' },
  { icon: <MessageSquare size={18} />, label: 'Reps Activity Logs' },
  { icon: <Trophy size={18} />, label: 'Coaching & Feedback' },
  { icon: <Milestone size={18} />, label: 'Goals & Milestones' },
];

export const SIDEBAR_ACCOUNTS = [
  { icon: <BookOpen size={18} />, label: 'Accounts Directory' },
  { icon: <FileSearch size={18} />, label: 'Opportunities' },
  { icon: <AlertTriangle size={18} />, label: 'High-Risk Deals' },
  { icon: <TrendingUp size={18} />, label: 'Renewals & Upsell' },
];

export const SIDEBAR_DATA = [
  { icon: <FileText size={18} />, label: 'Custom Reports' },
  { icon: <Download size={18} />, label: 'Export Center' },
  { icon: <Database size={18} />, label: 'Data Sync Status' },
];

export const SIDEBAR_FOOTER = [
  { icon: <Settings size={18} />, label: 'Team Settings' },
  { icon: <Lock size={18} />, label: 'Access Control' },
  { icon: <Link size={18} />, label: 'Integrations' },
];

export const REVENUE_DATA: RevenueGroup[] = [
  {
    title: 'Inbound',
    color: 'bg-green-500',
    rows: [
      { label: 'Inbound leads (initial)', formula: '100', jan: '100', feb: '100', mar: '100', type: 'number' },
      { label: 'Inbound lead growth', formula: '3%', jan: '3%', feb: '3%', mar: '3%', type: 'percentage' },
      { label: 'Inbound lead marketing booked', formula: '5%', jan: '5%', feb: '5%', mar: '5%', type: 'percentage' },
    ]
  },
  {
    title: 'Outbound',
    color: 'bg-red-500',
    rows: [
      { label: 'Outbound messages sent', formula: '1000', jan: '1000', feb: '1000', mar: '1000', type: 'number' },
      { label: 'Outbound lead marketing booked', formula: '2%', jan: '2%', feb: '2%', mar: '2%', type: 'percentage' },
    ]
  },
  {
    title: 'Sales assumptions',
    color: 'bg-purple-500',
    rows: [
      { label: 'Existing customers (initial)', formula: '5', jan: '5', feb: '5', mar: '5', type: 'number' },
      { label: 'Meeting demo', formula: '50%', jan: '50%', feb: '50%', mar: '50%', type: 'percentage' },
      { label: 'Demo closed won', formula: '50%', jan: '50%', feb: '50%', mar: '50%', type: 'percentage' },
      { label: 'Sales cycle (months)', formula: '2', jan: '2', feb: '2', mar: '2', type: 'number' },
      { label: 'ACV', formula: '$15,000', jan: '$15,000', feb: '$15,000', mar: '$15,000', type: 'currency' },
      { label: 'Contract length (months)', formula: '12', jan: '12', feb: '12', mar: '12', type: 'number' },
      { label: 'Churn rate', formula: '10%', jan: '10%', feb: '10%', mar: '10%', type: 'percentage' },
    ]
  },
  {
    title: 'Sales funnel',
    color: 'bg-blue-500',
    rows: [
      { label: 'Total meetings held', formula: '45', jan: '45', feb: '45', mar: '45', type: 'number' },
      { label: 'Demos', formula: '23', jan: '23', feb: '23', mar: '23', type: 'number' },
      { label: 'Closed won deals', formula: '11', jan: '11', feb: '11', mar: '11', type: 'number' },
    ]
  }
];

export const ARR_CHART_DATA: ChartDataPoint[] = [
  { month: 'Jan', arr: 5000, growth: 4500 },
  { month: 'Feb', arr: 6000, growth: 5500 },
  { month: 'Mar', arr: 8500, growth: 7200 },
  { month: 'Apr', arr: 11000, growth: 9800 },
  { month: 'May', arr: 15500, growth: 12000 },
  { month: 'Jun', arr: 18000, growth: 14500 },
];

export const FUNNEL_DATA = [
  { label: 'Inbound to meeting', percentage: 32, color: 'bg-indigo-500' },
  { label: 'Outbound to meeting', percentage: 41, color: 'bg-pink-500' },
  { label: 'Meeting to demo', percentage: 68, color: 'bg-blue-500' },
  { label: 'Demo to close', percentage: 49, color: 'bg-emerald-500' },
];
