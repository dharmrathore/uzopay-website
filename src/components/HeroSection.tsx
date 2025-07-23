import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24  items-center">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Label */}
          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400 font-medium ">
            Pay Smart. Pay Fast
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl heading-title font-medium leading-tight text-white">
            End-to-End Payout & Payroll
            
            <span className="text-white">Solutions for Digital Era.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-secondary rounded-full">
              Reach out <ChevronRight size={16} />
            </button>
              <button className="btn btn-primary rounded-full bg-gradient-to-b from-transparent via-[#402788] to-[#402788] shadow-[inset_0px_10px_30px_0px_rgba(73,123,255,0.7)]">
              Get Started <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Content - Robot Illustration */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Robot Head */}
            <img src="/images/roboto.png" alt="Robot Eye" className=""  />

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