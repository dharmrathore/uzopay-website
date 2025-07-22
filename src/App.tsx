import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MidSection from './components/MidSection';
import QuickStartCard from './components/QuickStartCard';
import DemoSection from './components/DemoSection';
import ReasonsSection from './components/ReasonsSection';
import ExpertiseSection from './components/ExpertiseSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-dark-950 text-white font-inter">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-600/5 to-transparent"></div>
      </div>
      
      <Header />
      
      {/* Original UzOPay Design */}
      <main className="pt-20 max-w-7xl mx-auto px-8 lg:px-12">
        <HeroSection />
        <div className="grid lg:grid-cols-2 gap-16 py-16">
          <MidSection />
          <QuickStartCard />
        </div>
      </main>

      {/* New Demo Section */}
      <DemoSection />

      {/* Reasons to Partner Section */}
      <ReasonsSection />

      {/* Our Expertise Section */}
      <ExpertiseSection />

      {/* Powering Payments Across Industries Section */}
      <IndustriesSection />

      {/* Client Feedbacks Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
