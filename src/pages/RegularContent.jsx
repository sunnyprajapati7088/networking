import React from 'react';
import SlideCourse from '../components/SlideCourse';
import Carousel from '../components/Carousel';
import Landing from '../components/Landing';
import ContactUs from '../components/ContactUs';
import Testimonials from '../components/Testimonials';

const RegularContent = () => {
    return (
        <div>
             <SlideCourse/>
      {/* Carousal Section */}
     <Carousel/>
      <Landing />
      <ContactUs/>
      <Testimonials/>
      <div className="">
          <iframe
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8852643063426!2d75.76187567538684!3d26.89156386024239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4873aaaaaab%3A0x123456789abcdef!2s64-65%2C%20near%20Aarti%20Zanana%20Hospital%2C%20Kalyan%20Colony%2C%20Khatipura%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1711989876543!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
    );
};

export default RegularContent;