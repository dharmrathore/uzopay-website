import React from 'react';
import { Zap } from 'lucide-react';

const QuickStartCard: React.FC = () => {
  return (
    <div className="bg-white/5 border border-primary-500/20 rounded-2xl p-6 lg:p-8 shadow-glow backdrop-blur-md">
      <div className="space-y-6">
        {/* Top Section */}
        <div className="card-section">
          <div className="text-purple-600 flex-shrink-0">
            <Zap size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">Quick Start SDKs</h3>
            <p className="text-sm text-gray-400">Programming Languages</p>
          </div>
          <div className="flex flex-col gap-2 ml-auto">
            <div className="h-0.5 bg-white/10 rounded w-16"></div>
            <div className="h-0.5 bg-white/10 rounded w-16"></div>
            <div className="h-0.5 bg-white/10 rounded w-16"></div>
            <div className="h-0.5 bg-white/10 rounded w-16"></div>
          </div>
        </div>
        
        {/* Middle Section - Active */}
        <div className="card-section active">
          <div className="text-purple-600 flex-shrink-0">
            <Zap size={20} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">Sandbox Environment</h3>
          </div>
          <div className="flex flex-col gap-2 absolute right-4">
            <div className="flow-line up"></div>
            <div className="flow-line down"></div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="card-section">
          <div className="flex-1">
            <p className="text-sm text-gray-400">Sandbox Environment</p>
            <h3 className="text-lg font-semibold text-white">Environment Setup</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartCard; 