import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="  text-blue-500 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-black mb-6">
          Contact Us
        </h2>
        <p className="text-center text-lg text-black-200 mb-12">
          Have any questions? We'd love to hear from you!
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaPhoneAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-gray-600">+91 07041713818</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaEnvelope className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-gray-600">info@networksolution.com</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaMapMarkerAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Address</h3>
            <p className="text-gray-600">
              64-65, near Aarti Zanana Hospital, Kalyan Colony, Khatipura, Jaipur, Rajasthan 302021
            </p>
          </div>
        </div>

        {/* Contact Form */}
     

        {/* Google Map */}
       
      </div>
    </div>
  );
};

export default ContactUs;