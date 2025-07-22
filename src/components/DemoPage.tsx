import React from 'react';
import { ChevronRight, FileText, Zap, Shield, TrendingUp, Link, RefreshCw, Clock, ArrowDownRight, Menu, X } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-white font-inter relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 70%' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="bg-gradient-to-br from-primary-500/10 to-purple-600/10 border border-primary-500/30 rounded-lg px-4 py-2 font-bold text-xl text-white shadow-glow">
              UzOPay
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-link active">Home</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/features" className="nav-link">Features</a>
              <a href="/documentation" className="nav-link">Documentation</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-dark-900/95 backdrop-blur-md border-t border-primary-500/10">
              <nav className="flex flex-col space-y-4 px-4 py-6">
                <a href="/" className="nav-link active py-2">Home</a>
                <a href="/services" className="nav-link py-2">Services</a>
                <a href="/features" className="nav-link py-2">Features</a>
                <a href="/documentation" className="nav-link py-2">Documentation</a>
                <a href="/contact" className="nav-link py-2">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Top Section - Hero Area */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Glowing Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  We focus on your finances,
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  you focus on what matters
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  most.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
                Your finance our
                <br />
                pride, Always Safe &
                <br />
                Reliable.
              </p>
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
              <button className="btn btn-primary mt-8">
                Get Started <ChevronRight size={16} />
              </button>
            </div>

            {/* Right Content - Hexagonal Graphics */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {/* Hexagon 1 - Line Graph */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center p-4">
                    <TrendingUp className="text-white mb-2" size={24} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Hexagon 2 - Chain Link */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center p-4">
                    <Link className="text-white" size={24} />
                  </div>
                </div>

                {/* Hexagon 3 - Network */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center p-4">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Hexagon 4 - Refresh Loop (with blue glow) */}
                <div className="hexagon bg-gray-800/50 border border-primary-500/30 backdrop-blur-sm shadow-glow">
                  <div className="flex flex-col items-center justify-center p-4">
                    <RefreshCw className="text-white mb-2" size={24} />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Hexagon 5 - Clock */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center p-4">
                    <Clock className="text-white mb-2" size={24} />
                    <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                  </div>
                </div>

                {/* Hexagon 6 - Document */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center p-4">
                    <FileText className="text-white mb-2" size={24} />
                    <div className="flex flex-col gap-0.5">
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Hexagon 7 - Arrow */}
                <div className="hexagon bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center p-4">
                    <ArrowDownRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 