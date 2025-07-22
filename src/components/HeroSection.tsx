import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Label */}
          <div className="inline-block bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-gray-400">
            Pay Smart. Pay Fast
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            End-to-End Payout & Payroll
            <br />
            <span className="text-white">Solutions for Digital Era.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-secondary">
              Reach out <ChevronRight size={16} />
            </button>
            <button className="btn btn-primary">
              Get Started <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - Robot Illustration */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Robot Head */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full relative border-2 border-primary-500/30 shadow-glow">
              {/* Robot Eyes */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8">
                <div className="robot-eye"></div>
                <div className="robot-eye"></div>
              </div>
            </div>

            {/* Robot Core */}
            <div className="robot-core"></div>

            {/* Floating Labels */}
            <div className="floating-label payout-process" style={{ top: '30%', left: '-20px', animationDelay: '0s' }}>
              Payout process
            </div>
            <div className="floating-label sales-screening" style={{ top: '10%', right: '-30px', animationDelay: '1s' }}>
              Sales Product Screening
            </div>
            <div className="floating-label transactions" style={{ bottom: '20%', right: '-20px', animationDelay: '2s' }}>
              Transactions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 