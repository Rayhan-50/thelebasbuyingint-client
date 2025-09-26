import React from 'react';
import { Play, Award, Users, Zap } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="video" className="py-12 md:py-20 bg-gradient-to-br from-charcoal to-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 md:mb-6">
            See Our <span className="text-mint-green">Craftsmanship</span> in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Watch how we transform raw materials into premium garments using state-of-the-art machinery 
            and decades of expertise in textile manufacturing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Video Player */}
          <div className="relative group">
            <div className="relative aspect-video bg-gradient-to-br from-mint-green/20 to-deep-teal/50 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/7876328/pexels-photo-7876328.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Garment manufacturing process" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-deep-teal/40 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-mint-green rounded-full flex items-center justify-center hover:bg-mint-green/90 hover:scale-110 transition-all duration-300 group">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-deep-teal ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 md:p-4">
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">
                    Professional Garment Manufacturing
                  </h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    From cutting to finishing - 3:45 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-space-grotesk mb-4 md:mb-6">
              Behind the Scenes of Excellence
            </h3>
            <p className="text-base md:text-lg text-white/90 font-dm-sans mb-6 md:mb-8 leading-relaxed">
              Take an exclusive look inside our manufacturing facility where skilled craftsmen and 
              advanced machinery work together to create exceptional garments. From initial design 
              to final quality control, every step reflects our commitment to precision and quality.
            </p>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Advanced Technology</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    State-of-the-art sewing machines and automated cutting systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Skilled Craftsmen</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    Expert tailors with decades of experience in garment construction
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Quality Assurance</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    Rigorous testing and inspection at every stage of production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Video Thumbnails */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-space-grotesk text-center mb-12">
            More from Our Workshop
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fabric Selection Process",
                duration: "2:15",
                image: "https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Pattern Making & Cutting",
                duration: "4:30",
                image: "https://images.pexels.com/photos/7876354/pexels-photo-7876354.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Quality Control Standards",
                duration: "3:20",
                image: "https://images.pexels.com/photos/7876365/pexels-photo-7876365.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={video.image} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-deep-teal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-deep-teal ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-semibold font-space-grotesk text-white mt-3 group-hover:text-mint-green transition-colors duration-300">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;