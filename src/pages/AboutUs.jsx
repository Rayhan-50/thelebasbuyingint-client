import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-warm-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:col-span-1 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-6">About Us</h2>
            <p className="text-charcoal/80 font-host-grotesk leading-relaxed mb-6">
              Founded in 2009, The Lebas Buying Co. has established itself as a premier garment manufacturing company. With a commitment to quality, innovation, and sustainability, we cater to a global clientele, delivering tailored solutions for every need.
            </p>
            <p className="text-charcoal/80 font-host-grotesk leading-relaxed">
              Our state-of-the-art facilities and skilled artisans ensure precision and excellence in every stitch. Partner with us to bring your vision to life with unmatched expertise.
            </p>
          </div>
          <div className="lg:col-span-1 animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;