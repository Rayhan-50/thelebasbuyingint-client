// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Shirt, Scissors, Package, Palette } from 'lucide-react';
// import MagicCard from '../components/ui/MagicCard';

// const Products = () => {
//   const categories = [
//     { key: 'knit', title: 'Knit', image: 'https://images.pexels.com/photos/6311577/pexels-photo-6311577.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Shirt className="w-8 h-8" /> },
//     { key: 'woven', title: 'Woven', image: 'https://images.pexels.com/photos/3738085/pexels-photo-3738085.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Scissors className="w-8 h-8" /> },
//     { key: 'sweater', title: 'Sweater', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Package className="w-8 h-8" /> },
//     { key: 'prospectus', title: 'Prospectus', image: 'https://images.pexels.com/photos/6311667/pexels-photo-6311667.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Palette className="w-8 h-8" /> },
//   ];

//   return (
//     <section id="products" className="py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-3">
//             Our <span className="text-deep-teal">Products</span>
//           </h2>
//           <p className="text-base md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto leading-relaxed">
//             Explore categories. Click a card to view a curated gallery.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {categories.map((c) => (
//             <MagicCard key={c.key} className="rounded-3xl">
//               <Link to={`/products/${c.key}`} className="group block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-warm-beige">
//                 <div className="relative h-60 md:h-72">
//                   <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
//                   <div className="absolute top-4 left-4 w-12 h-12 bg-deep-teal text-white rounded-2xl flex items-center justify-center">
//                     {c.icon}
//                   </div>
//                   <div className="absolute bottom-0 inset-x-0 p-5">
//                     <h3 className="text-white text-2xl font-space-grotesk font-bold drop-shadow">{c.title}</h3>
//                   </div>
//                 </div>
//               </Link>
//             </MagicCard>
//           ))}
//         </div>

//         {/* Criteria & Specifications */}
//         <div className="mt-12 md:mt-20">
//           <div className="text-center mb-8 md:mb-12">
//             <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold text-charcoal">
//               Criteria <span className="text-deep-teal">& Specifications</span>
//             </h3>
//             <p className="mt-3 text-charcoal/80 font-dm-sans max-w-3xl mx-auto">
//               Clear, production-ready standards we follow for consistent quality and reliable delivery.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Materials & Fabrics</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Cotton (Combed, Ringspun, Organic), Cotton-Spandex</li>
//                 <li>Polyester, Recycled Polyester (rPET), Performance Blends</li>
//                 <li>Denim, Twill, Poplin, Flannel for woven programs</li>
//                 <li>Wool, Acrylic, Cashmere blends for sweaters</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Sizing & Grading</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Standard size sets: XS–XXXL (adult), 2–12 (kids)</li>
//                 <li>Custom grading rules per region (US/EU/UK/ASIA)</li>
//                 <li>Tolerance: ±0.5–1.0 cm by garment area</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">MOQ & Capacity</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Sampling: 3–5 pcs per style</li>
//                 <li>Bulk: 300–1,000 pcs per color/style (flexible by program)</li>
//                 <li>Monthly capacity available on request by category</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Lead Times</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Development samples: 7–14 days</li>
//                 <li>Pre‑production (PP) sample: 10–15 days</li>
//                 <li>Bulk production: 45–75 days post PP approval</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Quality & Testing</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>AQL 2.5/4.0 inline and final inspections</li>
//                 <li>Color fastness, shrinkage, pilling, seam strength tests</li>
//                 <li>Needle policy, metal detection (as required)</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Compliance & Sustainability</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>OEKO‑TEX®/GOTS/GRS capable supply chain</li>
//                 <li>Social audits: BSCI/SEDEX/WRAP (site‑wise availability)</li>
//                 <li>Restricted Substances List (RSL) adherence</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Customization</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Printing: screen, digital DTG, sublimation, puff, discharge</li>
//                 <li>Embroidery: flat, 3D, chenille, appliqué</li>
//                 <li>Trims: woven labels, heat transfers, zippers, hardware</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Packaging</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Poly‑bag or eco paper options, size stickers, barcodes</li>
//                 <li>Folding boards, hangtags, care and fiber labels</li>
//                 <li>Custom cartons with brand and shipping marks</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Sampling & Approvals</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Fit, size set, color lab dips, fabric hand‑feel swatches</li>
//                 <li>Pre‑production sample for sign‑off before bulk</li>
//                 <li>Gold seal sample retained for reference</li>
//               </ul>
//             </div>

//             <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
//               <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Payments & Shipping</h4>
//               <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
//                 <li>Terms: TT/LC (discussed per order volume)</li>
//                 <li>Incoterms: FOB/CIF/DDP options</li>
//                 <li>Logistics: sea/air/courier with full tracking</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Scissors, Package, Palette } from 'lucide-react';
import MagicCard from '../components/ui/MagicCard';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Map icon names to components
  const iconMap = {
    Shirt: <Shirt className="w-8 h-8" />,
    Scissors: <Scissors className="w-8 h-8" />,
    Package: <Package className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />,
  };

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axiosSecure.get('/categories');
        setCategories(response.data);
      } catch (e) {
        setError(e.response?.data?.message || 'Failed to load categories');
        console.error('Error fetching categories:', e.response?.data || e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [axiosSecure]);

  if (isLoading) {
    return <div className="text-center py-12 text-charcoal">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-3">
            Our <span className="text-deep-teal">Products</span>
          </h2>
          <p className="text-base md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto leading-relaxed">
            Explore categories. Click a card to view a curated gallery.
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-12 text-charcoal/80">
            No categories available. Please add categories through the admin panel.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((c) => (
              <MagicCard key={c.key} className="rounded-3xl">
                <Link
                  to={`/products/${c.key}`}
                  className="group block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-warm-beige"
                >
                  <div className="relative h-60 md:h-72">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-deep-teal text-white rounded-2xl flex items-center justify-center">
                      {iconMap[c.icon] || <Shirt className="w-8 h-8" />}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <h3 className="text-white text-2xl font-space-grotesk font-bold drop-shadow">{c.title}</h3>
                    </div>
                  </div>
                </Link>
              </MagicCard>
            ))}
          </div>
        )}

        {/* Criteria & Specifications */}
        <div className="mt-12 md:mt-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold text-charcoal">
              Criteria <span className="text-deep-teal">& Specifications</span>
            </h3>
            <p className="mt-3 text-charcoal/80 font-dm-sans max-w-3xl mx-auto">
              Clear, production-ready standards we follow for consistent quality and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Materials & Fabrics</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Cotton (Combed, Ringspun, Organic), Cotton-Spandex</li>
                <li>Polyester, Recycled Polyester (rPET), Performance Blends</li>
                <li>Denim, Twill, Poplin, Flannel for woven programs</li>
                <li>Wool, Acrylic, Cashmere blends for sweaters</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Sizing & Grading</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Standard size sets: XS–XXXL (adult), 2–12 (kids)</li>
                <li>Custom grading rules per region (US/EU/UK/ASIA)</li>
                <li>Tolerance: ±0.5–1.0 cm by garment area</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">MOQ & Capacity</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Sampling: 3–5 pcs per style</li>
                <li>Bulk: 300–1,000 pcs per color/style (flexible by program)</li>
                <li>Monthly capacity available on request by category</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Lead Times</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Development samples: 7–14 days</li>
                <li>Pre-production (PP) sample: 10–15 days</li>
                <li>Bulk production: 45–75 days post PP approval</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Quality & Testing</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>AQL 2.5/4.0 inline and final inspections</li>
                <li>Color fastness, shrinkage, pilling, seam strength tests</li>
                <li>Needle policy, metal detection (as required)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Compliance & Sustainability</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>OEKO-TEX®/GOTS/GRS capable supply chain</li>
                <li>Social audits: BSCI/SEDEX/WRAP (site-wise availability)</li>
                <li>Restricted Substances List (RSL) adherence</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Customization</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Printing: screen, digital DTG, sublimation, puff, discharge</li>
                <li>Embroidery: flat, 3D, chenille, appliqué</li>
                <li>Trims: woven labels, heat transfers, zippers, hardware</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Packaging</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Poly-bag or eco paper options, size stickers, barcodes</li>
                <li>Folding boards, hangtags, care and fiber labels</li>
                <li>Custom cartons with brand and shipping marks</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Sampling & Approvals</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Fit, size set, color lab dips, fabric hand-feel swatches</li>
                <li>Pre-production sample for sign-off before bulk</li>
                <li>Gold seal sample retained for reference</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
              <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">Payments & Shipping</h4>
              <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                <li>Terms: TT/LC (discussed per order volume)</li>
                <li>Incoterms: FOB/CIF/DDP options</li>
                <li>Logistics: sea/air/courier with full tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;