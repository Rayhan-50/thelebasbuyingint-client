import React from 'react';

const Production = () => {
  return (
    <section id="production" className="py-16 bg-mint-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Our Production Process</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-span-1 animate-slide-in-left">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Production Process"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-1 animate-fade-in-up">
            <ul className="space-y-6 text-charcoal/80 font-host-grotesk">
              <li className="flex items-start gap-3">
                <span className="bg-deep-teal text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                <span>Design & Pattern Making</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-deep-teal text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                <span>Fabric Selection & Cutting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-deep-teal text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                <span>Sewing & Assembly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-deep-teal text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                <span>Quality Control & Finishing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;