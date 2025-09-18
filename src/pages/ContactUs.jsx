// import React from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const ContactUs = () => {
//   return (
//     <section id="contact" className="py-16 bg-light-sky-blue">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Contact Us</h2>
//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="lg:col-span-1 animate-slide-in-left">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold text-charcoal font-space-grotesk mb-4">Get in Touch</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-6 h-6 text-mint-green mt-1" />
//                   <div>
//                     <p className="text-charcoal/80 font-host-grotesk">123 Textile Avenue</p>
//                     <p className="text-charcoal/80 font-host-grotesk">Garment District, NY 10018</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-6 h-6 text-mint-green" />
//                   <p className="text-charcoal/80 font-host-grotesk">+1 (555) 123-4567</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Mail className="w-6 h-6 text-mint-green mt-1" />
//                   <p className="text-charcoal/80 font-host-grotesk">info@lebasbuyingco.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-1 animate-slide-in-right">
//             <form className="bg-white p-6 rounded-lg shadow-lg">
//               <div className="grid gap-6">
//                 <div>
//                   <label className="block text-charcoal/80 font-host-grotesk mb-2">Name</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-charcoal/80 font-host-grotesk mb-2">Email</label>
//                   <input
//                     type="email"
//                     className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green"
//                     placeholder="Your Email"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-charcoal/80 font-host-grotesk mb-2">Message</label>
//                   <textarea
//                     className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green h-32 resize-none"
//                     placeholder="Your Message"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-mint-green text-white p-3 rounded-lg hover:bg-mint-green/80 transition-colors duration-300"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});
  const axiosSecure = useAxiosSecure();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to set refs
  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosSecure.post('/contacts', formData);
      console.log('Submission response:', response.data);
      setFormData({ name: '', email: '', message: '' });
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your message! We will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#0A3D91',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to submit the form.');
      console.log('Submission error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to submit the form.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#B91C1C',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-light-sky-blue" ref={setRef('contact')}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-space-grotesk mb-12 text-center">Contact Us</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`lg:col-span-1 ${isVisible.contact ? 'animate-slide-in-left' : ''}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-charcoal font-space-grotesk mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-mint-green mt-1" />
                  <div>
                    <p className="text-charcoal/80 font-host-grotesk">123 Textile Avenue</p>
                    <p className="text-charcoal/80 font-host-grotesk">Garment District, NY 10018</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-mint-green" />
                  <p className="text-charcoal/80 font-host-grotesk">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-mint-green mt-1" />
                  <p className="text-charcoal/80 font-host-grotesk">info@lebasbuyingco.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-1 ${isVisible.contact ? 'animate-slide-in-right' : ''}`}>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid gap-6">
                <div>
                  <label className="block text-charcoal/80 font-host-grotesk mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/80 font-host-grotesk mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/80 font-host-grotesk mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-green h-32 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-mint-green text-white p-3 rounded-lg hover:bg-mint-green/80 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;