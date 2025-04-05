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
          <a className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition"  href={`tel:919314887355`}target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-gray-600"  >+91 9314887355</p>
          </a>
          <a href={`mailto:info@insjaipur.com`}  target="_blank" className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaEnvelope className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-gray-600">info@insjaipur.com</p>
          </a>
          <a href="https://www.google.com/maps/place/INS:+Institute+of+Network+Solutions/@26.9246714,75.7425947,17z/data=!3m1!4b1!4m6!3m5!1s0x396db384887b328d:0xa416c5a7c4342827!8m2!3d26.9246714!4d75.7425947!16s%2Fg%2F11k4l9n1k2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaMapMarkerAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Address</h3>
            <p className="text-gray-600">
              64-65, near Aarti Zanana Hospital, Kalyan Colony, Khatipura, Jaipur, Rajasthan 302021
            </p>
          </a>
        </div>

        {/* Contact Form */}
     

        {/* Google Map */}
       
      </div>
    </div>
  );
};

export default ContactUs;