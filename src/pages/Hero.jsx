import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Deep Teal Background */}
      <div className="absolute inset-0 bg-deep-teal"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-mint-green/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-mint-green/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-6 leading-tight">
            Crafting Quality
            <span className="block text-mint-green">
              Garments
            </span>
            <span className="block">with Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-host-grotesk mb-8 max-w-3xl mx-auto leading-relaxed">
            The Lebas Buying specializes in professional sewing, fabric solutions, and modern garment production with cutting-edge technology and expertise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => scrollToSection('#products')}
              className="bg-mint-green text-deep-teal px-8 py-4 rounded-lg font-semibold font-host-grotesk text-lg hover:bg-mint-green/90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => scrollToSection('#production')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold font-host-grotesk text-lg hover:bg-white hover:text-deep-teal transition-all duration-300 flex items-center gap-2 group"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Watch Production
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-2">15+</div>
            <div className="text-white/80 font-host-grotesk">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-2">500+</div>
            <div className="text-white/80 font-host-grotesk">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-2">50+</div>
            <div className="text-white/80 font-host-grotesk">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-2">24/7</div>
            <div className="text-white/80 font-host-grotesk">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;