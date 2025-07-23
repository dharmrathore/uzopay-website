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

      </div>
    </section>
  );
};

export default MidSection; 