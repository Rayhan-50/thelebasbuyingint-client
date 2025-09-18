

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Production', href: '#production' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Custom Tailoring',
    'Bulk Manufacturing',
    'Quality Control',
    'Fabric Sourcing',
    'Pattern Making',
    'Finishing Services'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-teal text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1757758678/lebas_bhx7wl.png" 
              alt="The Lebas Buying" 
              className="h-32 w-auto mb-6"
            />
            <p className="text-white/80 font-host-grotesk mb-6 leading-relaxed">
              Your trusted partner in professional garment manufacturing, delivering quality and precision since 2009.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group">
                <Facebook className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group">
                <Instagram className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-space-grotesk mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-mint-green transition-colors duration-300 font-host-grotesk"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-space-grotesk mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 font-host-grotesk">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-space-grotesk mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mint-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-host-grotesk">123 Textile Avenue</p>
                  <p className="text-white/80 font-host-grotesk">Garment District, NY 10018</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mint-green flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-host-grotesk">+1 (555) 123-4567</p>
                  <p className="text-white/80 font-host-grotesk">+1 (555) 789-0123</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-mint-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 font-host-grotesk">info@lebasbuyingco.com</p>
                  <p className="text-white/80 font-host-grotesk">orders@lebasbuyingco.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-host-grotesk text-sm">
              © 2024 The Lebas Buying. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-mint-green transition-colors duration-300 font-host-grotesk">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-mint-green transition-colors duration-300 font-host-grotesk">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-mint-green transition-colors duration-300 font-host-grotesk">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;