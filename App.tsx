
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { RevenueTable } from './components/RevenueTable';
import { StatWidgets } from './components/StatWidgets';
import { ArrGrowthChart, FunnelConversion } from './components/Charts';
import { getDashboardInsights } from './services/geminiService';
import { REVENUE_DATA } from './constants';
import { Sparkles, X } from 'lucide-react';

const App: React.FC = () => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const fetchInsights = async () => {
    setLoadingInsights(true);
    setShowInsights(true);
    const result = await getDashboardInsights(REVENUE_DATA);
    setInsights(result || "No insights found.");
    setLoadingInsights(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar relative">
        <DashboardHeader />
        
        <div className="p-6 grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <RevenueTable />
            
            {/* Gemini Trigger Button */}
            <div className="flex items-center justify-center py-4">
              <button 
                onClick={fetchInsights}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-indigo-100 hover:shadow-indigo-200 transition-all hover:scale-105"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                Analyze with Gemini AI
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Widgets Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <StatWidgets />
            <ArrGrowthChart />
            <FunnelConversion />
          </div>
        </div>

        {/* AI Insight Overlay */}
        {showInsights && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-300">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Gemini Strategic Insights</h3>
                    <p className="text-xs text-slate-500">Based on Q1 2025 Revenue Models</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowInsights(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {loadingInsights ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                    <p className="text-sm font-medium text-slate-500 animate-pulse">Consulting the model...</p>
                  </div>
                ) : (
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                    {insights}
                  </div>
                )}
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setShowInsights(false)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-auto p-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white">
          &copy; 2025 Pipesale Inc. Built with React, Tailwind & Gemini API.
        </footer>
      </main>
    </div>
  );
};

export default App;
