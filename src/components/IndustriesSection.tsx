import React, { useState } from 'react';
import { ArrowRight, BarChart3, Users, TrendingUp, Clock, Check, Grid, MessageCircle } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('payments');

  const tabs = [
    {
      id: 'payments',
      label: 'Payments',
      icon: BarChart3,
      content: {
        title: "Elevate Your Online Store's Payment Experience",
        description: "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
        features: [
          { text: "Optimize Your Checkout", icon: Check },
          { text: "Fast and Secure", icon: Grid },
          { text: "Smooth Integration", icon: MessageCircle }
        ]
      }
    },
    {
      id: 'payout',
      label: 'Payout',
      icon: Users,
      content: {
        title: "Streamline Your Payout Operations",
        description: "Efficient payout solutions for businesses of all sizes. Automate disbursements, reduce processing time, and ensure timely payments to your partners and employees.",
        features: [
          { text: "Automated Disbursements", icon: Check },
          { text: "Real-time Tracking", icon: Grid },
          { text: "Multi-channel Support", icon: MessageCircle }
        ]
      }
    },
    {
      id: 'payroll',
      label: 'Payroll',
      icon: TrendingUp,
      content: {
        title: "Simplify Your Payroll Management",
        description: "Comprehensive payroll solutions that handle everything from salary processing to tax calculations. Save time and reduce errors with our automated payroll system.",
        features: [
          { text: "Automated Processing", icon: Check },
          { text: "Tax Calculations", icon: Grid },
          { text: "Compliance Ready", icon: MessageCircle }
        ]
      }
    },
    {
      id: 'ai-banking',
      label: 'AI Banking',
      icon: Clock,
      content: {
        title: "Intelligent Banking Solutions",
        description: "Leverage artificial intelligence to enhance your banking operations. Smart fraud detection, predictive analytics, and automated decision-making for better financial management.",
        features: [
          { text: "Fraud Detection", icon: Check },
          { text: "Predictive Analytics", icon: Grid },
          { text: "Smart Automation", icon: MessageCircle }
        ]
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 lg:py-24 bg-dark-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 70%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-lg font-medium">Enhancing payments—</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-2"></div>
          </div>
          <h2 className="hero-title text-4xl sm:text-5xl lg:text-[55px] heading-title font-medium leading-tight text-white">
            Powering Payments Across <br></br> Industries
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-glow max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 border border-white/20 shadow-glow-purple' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/8'
                  }`}
                >
                  <IconComponent className={`${isActive ? 'text-primary-500' : 'text-gray-400'}`} size={20} />
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {activeTabData?.content.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {activeTabData?.content.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {activeTabData?.content.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center">
                        <FeatureIcon className="text-primary-500" size={16} />
                      </div>
                      <span className="text-white font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className="btn btn-secondary">
                Get Started <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Graphic Area */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-purple-600/20 border border-primary-500/30 rounded-full flex items-center justify-center shadow-glow">
                  <div className="w-16 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>

                {/* Four Connected Circles */}
                {[
                  { top: '10%', left: '20%' },
                  { top: '10%', right: '20%' },
                  { bottom: '10%', left: '20%' },
                  { bottom: '10%', right: '20%' }
                ].map((position, index) => (
                  <div key={index} className="absolute" style={position}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full flex items-center justify-center shadow-glow">
                      <Users className="text-white" size={20} />
                    </div>
                    {/* Connecting Lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-blue-500/50 to-purple-600/50"></div>
                  </div>
                ))}

                {/* Glowing Effects */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-purple-600/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection; 