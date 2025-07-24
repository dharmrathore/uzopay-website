import React from 'react';
import { ChevronRight, FileText, Zap, Shield, TrendingUp, Link, RefreshCw, Clock, ArrowDownRight } from 'lucide-react';

const DemoSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-dark-950 text-white font-inter relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/5 to-transparent"></div>
        <div className="absolute inset-0 bg-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Top Section - Hero Area */}
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Glowing Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="neon-glow-primary">
                We focus on your finances,
              
                you focus on what matters   most.
              </span>
             
            
              <span className=" neon-glow-secondary">
              Your finance our pride, Always Safe & Reliable.
            </span>
            </h1>

            {/* Sub-headline */}
           
          </div>

          {/* Right side - Empty for clean design */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Section - Features Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Features */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-block bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-gray-400">
              Payout Service Centric
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Streamlined for Payout Ease and
              <br />
              Efficiency
            </h2>

            {/* Feature List */}
            <div className="space-y-8">
              {/* Feature 1 - Comprehensive Documentation */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-purple-600 to-transparent"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <FileText className="text-purple-600" size={20} />
                    Comprehensive Documentation
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Access clear, detailed documentation that simplifies integration and accelerates your payout setup.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Quick Start SDKs */}
              <div className="relative pl-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <Zap className="text-purple-600" size={20} />
                    Quick Start SDKs
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Sandbox Environment */}
              <div className="relative pl-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <Shield className="text-purple-600" size={20} />
                    Sandbox Environment
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <button className="btn btn-primary mt-8 glow-on-hover">
              Get Started <ChevronRight size={16} />
            </button>
          </div>

          {/* Right Content - Hexagonal Graphics */}
          <div className="relative">
     <img src='images/content.png' alt='' width='' height=''/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 