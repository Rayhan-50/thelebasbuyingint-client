import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Experience',
      description: 'Over 15 years in the garment industry.',
    },
    {
      title: 'Quality',
      description: 'Uncompromising standards in every product.',
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly practices in production.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-light-sky-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up">
              <h3 className="text-xl font-bold text-charcoal font-space-grotesk mb-4">{reason.title}</h3>
              <p className="text-charcoal/80 font-host-grotesk">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;