import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Tailoring',
      description: 'Tailored solutions for unique designs.',
    },
    {
      title: 'Bulk Manufacturing',
      description: 'Efficient production for large orders.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous checks for top-quality output.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-soft-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg animate-slide-in-right">
              <h3 className="text-xl font-bold text-charcoal font-space-grotesk mb-4">{service.title}</h3>
              <p className="text-charcoal/80 font-host-grotesk">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;