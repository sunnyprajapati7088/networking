import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram ,FaYoutube} from "react-icons/fa";

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
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left - Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
    src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743102748/logo_wf6fxs.jpg" 
    alt="Institute Logo" 
    className="h-12 w-12 md:h-14 md:w-14 border-2 border-orange-500 shadow-lg"
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
             <a  href="" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-orange-400 transition">
                    <FaInstagram/>
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
  );
};

export default Footer;
