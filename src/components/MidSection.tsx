import React from 'react';

const MidSection: React.FC = () => {
  return (
    <section className="flex items-center">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 flex-1">
          {/* Label */}
          <div className="inline-block bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-gray-400">
            Reliable, and Efficient
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Simplify the payments process
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            Tools crafted to simplify and enhance your payout processes.
          </p>
        </div>

        {/* Right Content - Abstract Graph */}
        <div className="flex-shrink-0">
          <div className="w-48 h-24 sm:w-64 sm:h-32 lg:w-80 lg:h-40">
            <svg width="100%" height="100%" viewBox="0 0 200 100" className="w-full h-full">
              <path
                d="M0 80 Q50 60 100 40 T200 20"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-line"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection; 