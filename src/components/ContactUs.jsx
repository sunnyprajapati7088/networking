import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-blue-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-6">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-200 mb-12">
          Have any questions? We'd love to hear from you!
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaPhoneAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <FaEnvelope className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-gray-600">support@krishiconnect.com</p>
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
        <div className="mt-12 bg-white text-blue-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-orange-500">
            Send Us a Message
          </h3>
          <form>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Your Name</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Message</label>
              <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500" rows="4" placeholder="Write your message..."></textarea>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8852643063426!2d75.76187567538684!3d26.89156386024239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4873aaaaaab%3A0x123456789abcdef!2s64-65%2C%20near%20Aarti%20Zanana%20Hospital%2C%20Kalyan%20Colony%2C%20Khatipura%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1711989876543!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;