import React from 'react';
import SlideCourse from '../components/SlideCourse';
import Landing from '../components/Landing';
import ContactUs from '../components/ContactUs';
import Testimonials from '../components/Testimonials';
import { motion } from "framer-motion";

const RegularContent = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <SlideCourse />

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-50 to-blue-50 shadow-lg rounded-xl p-6 md:p-10 mt-8"
            >
                {/* Left Side: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                        Transforming Careers Since 1998
                    </h1>
                    <p className="text-blue-600 text-lg md:text-2xl mt-4">
                        Become a Network Engineer, Cloud Engineer, or Security Engineer and Get <span className="text-orange-500 font-bold">100% Job!</span>
                    </p>
                    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
                        Explore Courses
                    </button>
                </div>

                {/* Right Side: Animated Image */}
                <motion.img
                    src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743568477/ppeh4kjfzfqloi19m9n8.jpg"
                    alt="Career Growth"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 w-full max-w-xs md:max-w-sm rounded-lg shadow-lg mt-6 md:mt-0"
                />
            </motion.div>

            {/* Additional Sections */}
            <Landing />
            <ContactUs />
            <Testimonials />

            {/* Google Map Section */}
            <div className="mt-8 px-4">
    <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
    <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
        <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.226373703946!2d75.7400190753873!3d26.92467137664879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db384887b328d%3A0xa416c5a7c4342827!2sINS%3A%20Institute%20of%20Network%20Solutions!5e0!3m2!1sen!2sin!4v1715062764517!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    </div>
</div>

        </div>
    );
};

export default RegularContent;
