import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
            <a href="/ai-banking" className="nav-link dropdown">
              Ai Banking
              <ChevronDown size={16} />
            </a>
            <a href="/payments" className="nav-link">Payments</a>
            <a href="/payouts" className="nav-link">Payouts</a>
            <a href="/payroll" className="nav-link">Payroll</a>
            <a href="/contact" className="nav-link">Contact Us</a>
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
                <a href="/ai-banking" className="nav-link py-2 flex items-center justify-between">
                  Ai Banking
                  <ChevronDown size={16} />
                </a>
                <a href="/payments" className="nav-link py-2">Payments</a>
                <a href="/payouts" className="nav-link py-2">Payouts</a>
                <a href="/payroll" className="nav-link py-2">Payroll</a>
                <a href="/contact" className="nav-link py-2">Contact Us</a>
              </nav>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header; 