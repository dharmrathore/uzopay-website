import React from 'react';
import { ArrowRight, Smartphone, Tablet, Monitor, Server, FileText, Play, Grid } from 'lucide-react';

const ReasonsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-dark-950 relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 70%' }}></div>
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Exceptional Support for Your Success
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover why leading businesses choose to partner with us for their payment solutions
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Optimize customer journeys */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-glow hover:shadow-glow-purple transition-all duration-300">
            <div className="space-y-6">
              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-white font-medium">PAYMENT</span>
                  <Grid className="text-white" size={20} />
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-600 rounded-full border-2 border-white/20"></div>
                <div className="absolute -bottom-2 left-4 w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="absolute -bottom-2 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Optimize customer journeys
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Streamlined transactions enhancing efficiency and customer satisfaction.
                </p>
              </div>

              {/* CTA Button */}
              <button className="btn btn-secondary w-full sm:w-auto">
                Explore <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2: Faster Processing Time */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-glow hover:shadow-glow-purple transition-all duration-300">
            <div className="space-y-6">
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Faster Processing Time
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Quick and efficient payment processing for a seamless user experience.
                </p>
              </div>

              {/* Visual Elements */}
              <div className="flex items-center justify-center gap-4">
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10">
                  <Play className="text-white" size={20} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10">
                  <Smartphone className="text-white" size={20} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10">
                  <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-purple-600 rounded-sm"></div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn btn-secondary w-full sm:w-auto">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 3: Flexible Solutions */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-glow hover:shadow-glow-purple transition-all duration-300">
            <div className="space-y-6">
              {/* Visual Element - Profile */}
              <div className="relative flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  {/* Glasses effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                      <div className="w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                    </div>
                  </div>
                </div>
                {/* Arc effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-12 border-t-2 border-white/30 rounded-t-full"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Flexible Solutions
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Customizable options to meet the unique needs of your business.
                </p>
              </div>

              {/* CTA Button */}
              <button className="btn btn-secondary w-full sm:w-auto">
                Explore more <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 4: Effortless Integration */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-glow hover:shadow-glow-purple transition-all duration-300">
            <div className="space-y-6">
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Effortless Integration
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Simple API integration with your existing systems and platforms.
                </p>
              </div>

              {/* Visual Elements - Devices Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <Smartphone className="text-white" size={16} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <Tablet className="text-white" size={16} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <Monitor className="text-white" size={16} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <Server className="text-white" size={16} />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-sm"></div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                  <FileText className="text-white" size={16} />
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn btn-secondary w-full sm:w-auto">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection; 