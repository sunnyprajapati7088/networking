// // import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram ,FaYoutube} from "react-icons/fa";

// // const footerData = {
// //   "company": {
// //     "name": "Institute of Network Solution",
// //     "about": "Providing top-quality networking courses and IT solutions to enhance your career.",
// //     "logo": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743103678/logo.png"
// //   },
// //   "links": [
// //     {
// //       "title": "Quick Links",
// //       "items": [
// //         { "name": "Home", "url": "/" },
// //         { "name": "About Us", "url": "/about" },
// //         { "name": "Courses", "url": "/courses" },
// //         { "name": "Contact", "url": "/contact" }
// //       ]
// //     },
// //     {
// //       "title": "Support",
// //       "items": [
// //         { "name": "FAQ", "url": "/faq" },
// //         { "name": "Help Center", "url": "/help" },
// //         { "name": "Privacy Policy", "url": "/privacy" },
// //         { "name": "Terms of Service", "url": "/terms" }
// //       ]
// //     }
// //   ],
// //   "socialMedia": [
// //     { "platform": "Facebook", "url": "https://www.facebook.com/IIHTJAIPUR?mibextid=ZbWKwL", "icon": "facebook" },
// //     { "platform": "Twitter", "url": "https://twitter.com/yourhandle", "icon": "twitter" },
// //     { "platform": "LinkedIn", "url": "https://www.linkedin.com/company/institute-of-network-solutions/", "icon": "linkedin" },

// //     { "platform": "Youtube", "url": "https://www.youtube.com/@insjaipur", "icon": "Youtube" }
// //   ],
// //   "contact": {
// //     "email": "info@networksolution.com",
// //     "phone": "+91 07041713818",
// //     "address": "Plot No.- 65, Kalyan Colony, Khatipura Road, Jaswant Nagar, Jaipur - 302012 (Near Arti Janana Hospital)"
// //   }
// // };

// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
// //       <div className="container mx-auto px-6 lg:px-12">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
// //           {/* Left - Company Info */}
// //           <div className="flex flex-col items-center md:items-start text-center md:text-left">
// //           <img 
// //                 src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
// //                 alt="Institute Logo" 
// //                 className="h-12 md:h-14 md:w-14  w-[100px] md:w-[150px] lg:w-[200px] border-2 border-orange-300 shadow-lg"
// //               />
// //             <h2 className="text-xl font-semibold">{footerData.company.name}</h2>
// //             <p className="text-sm mt-2">{footerData.company.about}</p>
// //           </div>

// //           {/* Middle - Quick Links & Support */}
// //           <div className="flex justify-center space-x-10">
// //             {footerData.links.map((section, index) => (
// //               <div key={index}>
// //                 <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
// //                 <ul className="space-y-2">
// //                   {section.items.map((link, idx) => (
// //                     <li key={idx}>
// //                       <a href={link.url} className="hover:text-orange-400 transition">
// //                         {link.name}
// //                       </a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Right - Social & Contact */}
// //           <div className="flex flex-col items-center md:items-end text-center md:text-right">
// //             <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
// //             <div className="flex space-x-4">
// //               {footerData.socialMedia.map((social, index) => {
// //                 const Icon =
// //                   social.icon === "facebook" ? FaFacebook :
// //                   social.icon === "twitter" ? FaTwitter :
// //                   social.icon === "linkedin" ? FaLinkedin :
// //                   FaYoutube;
// //                 return (
// //                   <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
// //                     <Icon />
// //                   </a>
// //                 );
// //               })}
// //              <a  href="" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
// //                     <FaInstagram/>
// //                   </a>
// //             </div>

// //             {/* Contact Details */}
// //             <div className="mt-4 text-sm">
// //               <p>Email: <a href={`mailto:${footerData.contact.email}`} className="hover:text-orange-400">{footerData.contact.email}</a></p>
// //               <p>Phone: <a href={`tel:${footerData.contact.phone}`} className="hover:text-orange-400">{footerData.contact.phone}</a></p>
// //               <p>Address: {footerData.contact.address}</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Section */}
// //         <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
// //           &copy; {new Date().getFullYear()} {footerData.company.name}. All rights reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";

// const footerData = {
//   "company": {
//     "name": "Institute of Network Solution",
//     "about": "Providing top-quality networking courses and IT solutions to enhance your career.",
//     "logo": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743103678/logo.png"
//   },
//   "links": [
//     {
//       "title": "Quick Links",
//       "items": [
//         { "name": "Home", "url": "/" },
//         { "name": "About Us", "url": "/about" },
//         { "name": "Courses", "url": "/courses" },
//         { "name": "Contact", "url": "/contact" }
//       ]
//     },
//     {
//       "title": "Support",
//       "items": [
//         { "name": "FAQ", "url": "/faq" },
//         { "name": "Help Center", "url": "/help" },
//         { "name": "Privacy Policy", "url": "/privacy" },
//         { "name": "Terms of Service", "url": "/terms" }
//       ]
//     }
//   ],
//   "socialMedia": [
//     { "platform": "Facebook", "url": "https://www.facebook.com/IIHTJAIPUR?mibextid=ZbWKwL", "icon": "facebook" },
//     { "platform": "Twitter", "url": "https://twitter.com/yourhandle", "icon": "twitter" },
//     { "platform": "LinkedIn", "url": "https://www.linkedin.com/company/institute-of-network-solutions/", "icon": "linkedin" },
//     { "platform": "Youtube", "url": "https://www.youtube.com/@insjaipur", "icon": "Youtube" }
//   ],
//   "contact": {
//     "email": "info@networksolution.com",
//     "phone": "+91 07041713818",
//     "address": "Plot No.- 65, Kalyan Colony, Khatipura Road, Jaswant Nagar, Jaipur - 302012 (Near Arti Janana Hospital)"
//   }
// };

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Left - Company Info */}
//             <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <img 
//                  src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
//                alt="Institute Logo" 
//             className="h-12 md:h-14 md:w-14  w-[100px] md:w-[150px] lg:w-[200px] border-2 border-orange-300 shadow-lg"
//                />
//               <h2 className="text-xl font-semibold">{footerData.company.name}</h2>
//               <p className="text-sm mt-2">{footerData.company.about}</p>
//             </div>

//             {/* Middle - Quick Links & Support */}
//             <div className="flex justify-center space-x-10">
//               {footerData.links.map((section, index) => (
//                 <div key={index}>
//                   <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
//                   <ul className="space-y-2">
//                     {section.items.map((link, idx) => (
//                       <li key={idx}>
//                         <a href={link.url} className="hover:text-orange-400 transition">
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* Right - Social & Contact */}
//             <div className="flex flex-col items-center md:items-end text-center md:text-right">
//               <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {footerData.socialMedia.map((social, index) => {
//                   const Icon =
//                     social.icon === "facebook" ? FaFacebook :
//                     social.icon === "twitter" ? FaTwitter :
//                     social.icon === "linkedin" ? FaLinkedin :
//                     FaYoutube;
//                   return (
//                     <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
//                       <Icon />
//                     </a>
//                   );
//                 })}
//                 <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
//                   <FaInstagram />
//                 </a>
//               </div>

//               {/* Contact Details */}
//               <div className="mt-4 text-sm">
//                 <p>Email: <a href={`mailto:${footerData.contact.email}`} className="hover:text-orange-400">{footerData.contact.email}</a></p>
//                 <p>Phone: <a href={`tel:${footerData.contact.phone}`} className="hover:text-orange-400">{footerData.contact.phone}</a></p>
//                 <p>Address: {footerData.contact.address}</p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
//             &copy; {new Date().getFullYear()} {footerData.company.name}. All rights reserved.
//           </div>
//         </div>
//       </footer>

//       {/* Sticky WhatsApp and Call Back Buttons */}
//       <div className="fixed bottom-5 right-5 flex flex-col space-y-3 gap-10">
//         {/* WhatsApp Button */}
//         <a 
//           href="https://wa.me/917041713818" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="relative group bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition gap-5"
//         >
//           <FaWhatsapp size={24} />
//           <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//             WhatsApp
//           </span>
//         </a>

//         {/* Call Back Button */}
//         <a 
//           href="tel:+917041713818" 
//           className="relative group bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//         >
//         <div className="flex gap-2">  <FaPhone size={24} /><span>Call back Carrer</span></div>
//           <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//             Call Back
//           </span>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Footer;



import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";
const footerData = {
  "company": {
    "name": "Institute of Network Solution",
    "about": "Providing top-quality networking courses and IT solutions to enhance your career.",
    "logo": "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743103678/logo.png"
  },
  "links": [
    {
      "title": "Quick Links",
      "items": [
        { "name": "Home", "url": "/" },
        { "name": "About Us", "url": "/about" },
        { "name": "Courses", "url": "/courses" },
        { "name": "Contact", "url": "/contact" }
      ]
    },
    {
      "title": "Support",
      "items": [
        { "name": "FAQ", "url": "/faq" },
        { "name": "Help Center", "url": "/help" },
        { "name": "Privacy Policy", "url": "/privacy" },
        { "name": "Terms of Service", "url": "/terms" }
      ]
    }
  ],
  "socialMedia": [
    { "platform": "Facebook", "url": "https://www.facebook.com/IIHTJAIPUR?mibextid=ZbWKwL", "icon": "facebook" },
    { "platform": "Twitter", "url": "https://twitter.com/yourhandle", "icon": "twitter" },
    { "platform": "LinkedIn", "url": "https://www.linkedin.com/company/institute-of-network-solutions/", "icon": "linkedin" },
    { "platform": "Youtube", "url": "https://www.youtube.com/@insjaipur", "icon": "Youtube" }
  ],
  "contact": {
    "email": "info@networksolution.com",
    "phone": "+91 07041713818",
    "address": "Plot No.- 65, Kalyan Colony, Khatipura Road, Jaswant Nagar, Jaipur - 302012 (Near Arti Janana Hospital)"
  }
};

const Footer = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceLevel: '',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://lms-backend-f9h3.onrender.com/api/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          experienceLevel: '',
          termsAccepted: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
    
      <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left - Company Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
                 src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743360843/logo_axtiqg.png" 
               alt="Institute Logo" 
            className="h-12 md:h-14 md:w-14  w-[100px] md:w-[150px] lg:w-[200px] border-2 border-orange-300 shadow-lg"
               />
              <h2 className="text-xl font-semibold">{footerData.company.name}</h2>
              <p className="text-sm mt-2">{footerData.company.about}</p>
            </div>

            {/* Middle - Quick Links & Support */}
            <div className="flex justify-center space-x-10">
              {footerData.links.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url} className="hover:text-orange-400 transition">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right - Social & Contact */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {footerData.socialMedia.map((social, index) => {
                  const Icon =
                    social.icon === "facebook" ? FaFacebook :
                    social.icon === "twitter" ? FaTwitter :
                    social.icon === "linkedin" ? FaLinkedin :
                    FaYoutube;
                  return (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
                      <Icon />
                    </a>
                  );
                })}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
                  <FaInstagram />
                </a>
              </div>

              {/* Contact Details */}
              <div className="mt-4 text-sm">
                <p>Email: <a href={`mailto:${footerData.contact.email}`} className="hover:text-orange-400">{footerData.contact.email}</a></p>
                <p>Phone: <a href={`tel:${footerData.contact.phone}`} className="hover:text-orange-400">{footerData.contact.phone}</a></p>
                <p>Address: {footerData.contact.address}</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} {footerData.company.name}. All rights reserved.
          </div>
        </div>

      </footer>

      {/* Sticky WhatsApp and Call Back Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 gap-10">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917041713818" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group bg-green-500 text-white p-3 w-[50px] rounded-full shadow-lg hover:scale-110 transition gap-5"
        >
          <FaWhatsapp size={24} />
         
        </a>

        {/* Call Back Button */}
        <button 
          onClick={() => setShowCallbackForm(true)}
          className="relative group bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <div className="flex gap-2">
            <FaPhone size={24} />
            <span>Request a callback</span>
          </div>
        </button>
      </div>

      {/* Callback Form Modal */}
      {showCallbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-black max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Unlock more than just IT skills with us</h2>
              <button 
                onClick={() => {
                  setShowCallbackForm(false);
                  setSubmitStatus(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        pattern="[0-9]{10}"
                        title="10 digit phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">Experience Level *</label>
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="Fresher">Fresher</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAccepted"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                        I accept the Terms of Use *
                      </label>
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-red-500 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;