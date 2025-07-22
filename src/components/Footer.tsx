import React from 'react';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Left Column - UzOPay Branding */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Logo/Name */}
              <h3 className="text-2xl font-bold text-white">UzOPay</h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                Our payment gateway simplifies transactions for e-commerce businesses, 
                delivering fast and secure processing. With smooth integration, we enhance 
                your store's payment capabilities. Optimize your checkout process and boost 
                customer satisfaction easily.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Payment Column */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Payment</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Payment Gateway
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Payment Links
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Bulk Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Invoice
                </a>
              </li>
            </ul>
          </div>

          {/* AI Banking Column */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">AI Banking</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Current Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  API Banking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  UPI Autopay
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Tax Payment
                </a>
              </li>
            </ul>
          </div>

          {/* Cards & CMS Column */}
          <div className="space-y-6">
            <div className="space-y-6">
              {/* Cards Section */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-3">Cards</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Virtual Cards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Physical Cards
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* CMS Section */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-3">CMS</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      Analytics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-white text-sm">
              © 2025 UzOPay
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <div className="w-px h-4 bg-white/20"></div>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 