import React from 'react';

const Portfolio = () => {
  const portfolios = [
    {
      title: 'Summer Collection 2023',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Vibrant designs for the warm season.',
    },
    {
      title: 'Winter Line 2022',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Cozy and stylish winter wear.',
    },
    {
      title: 'Casual Wear Series',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Everyday comfort with a modern twist.',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-soft-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Our Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal font-space-grotesk mb-2">{portfolio.title}</h3>
                <p className="text-charcoal/80 font-host-grotesk">{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;