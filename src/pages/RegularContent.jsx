import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const API_BASE_URL = 'https://lms-backend-f9h3.onrender.com/api';

const RegularContent = () => {
    // --- State: Carousel ---
    const [carouselImages, setCarouselImages] = useState([]);
    const [carouselLoading, setCarouselLoading] = useState(true);

    // --- State: Courses (Landing) ---
    const [courses, setCourses] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [enrollFormData, setEnrollFormData] = useState({ name: "", email: "", phone: "" });
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

    // --- State: Testimonials ---
    const [reviews, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [reviewFormData, setReviewFormData] = useState({ author_name: "", text: "", rating: 0 });
    const [reviewSubmitting, setReviewSubmitting] = useState(false);

    // --- Effects ---
    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        // 1. Fetch Carousel
        try {
            const res = await fetch(`${API_BASE_URL}/carousel`);
            const data = await res.json();
            // Filter active images
            const activeImages = data.filter((img) => img.isActive === true);
            setCarouselImages(activeImages);
            setCarouselLoading(false);
        } catch (error) {
            console.error("Error fetching carousel:", error);
            setCarouselLoading(false);
        }

        // 2. Fetch Courses
        try {
            const response = await axios.get(`${API_BASE_URL}/courses`);
            setCourses(response.data);
            setCoursesLoading(false);
        } catch (err) {
            console.error("Error fetching courses:", err);
            setCoursesLoading(false);
        }

        // 3. Fetch Reviews
        fetchReviews();
    };

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/feedback`);
            setReviews(response.data);
            setReviewsLoading(false);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setReviewsLoading(false);
        }
    };

    // --- Handlers: Courses ---
    const handleEnrollClick = (course) => {
        setSelectedCourse(course);
        setIsEnrollModalOpen(true);
    };

    const handleEnrollChange = (e) => {
        setEnrollFormData({ ...enrollFormData, [e.target.name]: e.target.value });
    };

    const handleEnrollSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}/enrollments`, {
                course: selectedCourse.name,
                name: enrollFormData.name,
                email: enrollFormData.email,
                phone: enrollFormData.phone,
            });
            alert("Enrollment successful!");
            setIsEnrollModalOpen(false);
            setEnrollFormData({ name: "", email: "", phone: "" });
        } catch (error) {
            console.error("Error submitting enrollment:", error);
            alert("Failed to enroll");
        }
    };

    // --- Handlers: Reviews ---
    const handleReviewChange = (e) => {
        setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setReviewFormData({ ...reviewFormData, rating });
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setReviewSubmitting(true);
        try {
            await axios.post(`${API_BASE_URL}/feedback`, reviewFormData);
            fetchReviews();
            setReviewFormData({ author_name: "", text: "", rating: 0 });
            alert("Review submitted!");
        } catch (error) {
            console.error("Error submitting feedback:", error);
        } finally {
            setReviewSubmitting(false);
        }
    };

    const renderStars = (rating, interactive = false) => {
        return [...Array(5)].map((_, i) => (
            <span
                key={i}
                className={`text-yellow-400 text-xl cursor-pointer ${interactive ? "hover:scale-110 transition" : ""}`}
                onClick={interactive ? () => handleRatingChange(i + 1) : null}
            >
                {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
        ));
    };

    // --- Slider Settings ---
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
        pauseOnHover: true,
        arrows: false,
        adaptiveHeight: true,
    };

    const courseSettings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="w-full pt-16">
            {/* 1. Hero Banner (Carousel) */}
            <div className="w-full">
                {carouselLoading ? (
                    <div className="flex justify-center items-center h-[50vh] sm:h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-500"></div>
                    </div>
                ) : (
                    <Slider {...carouselSettings}>
                        {carouselImages.map((slide, index) => (
                            <div key={index} className="outline-none">
                                <div className="relative w-full">
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto object-cover block"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            {/* 2. Intro Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-50 to-blue-50 shadow-lg rounded-xl p-6 md:p-10 mt-8"
                >
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
                    <motion.img
                        src="https://res.cloudinary.com/drz6fzlpu/image/upload/v1743568477/ppeh4kjfzfqloi19m9n8.jpg"
                        alt="Career Growth"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 w-full max-w-xs md:max-w-sm rounded-lg shadow-lg mt-6 md:mt-0 md:ml-10"
                    />
                </motion.div>
            </div>

            {/* 3. About Us Sections (Merged from About.jsx) */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Vision & Mission */}
                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To set the benchmark for IT training by creating a workforce that is not just skilled but future-ready, innovative, and globally competitive.
                            </p>
                        </div>
                        <div className="bg-orange-50/50 p-6 rounded-xl border-l-4 border-orange-600 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-4 text-orange-800">Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To transform aspiring IT professionals into industry-ready experts through hands-on training, real-world exposure, and career-driven mentorship.
                            </p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Certifications</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Cloud */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h4 className="text-xl font-bold mb-3 text-blue-700">Cloud Certifications</h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li><strong>AWS Certified Solutions Architect</strong> – Validate expertise in scalable, secure cloud solutions.</li>
                                    <li><strong>Microsoft Certified: Azure Solutions Architect</strong> – Design and implement secure Azure solutions.</li>
                                </ul>
                            </div>
                            {/* Security */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h4 className="text-xl font-bold mb-3 text-orange-700">Cybersecurity Certifications</h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li><strong>CompTIA Security+</strong> – Fundamental security concepts and risk management.</li>
                                    <li><strong>Certified Ethical Hacker (CEH)</strong> – Ethical hacking, penetration testing, and threat detection.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Team</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                            {/* Member 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">JR</div>
                                <h3 className="text-xl font-bold text-gray-800">J.R. Jakhar</h3>
                                <p className="text-orange-600 font-medium text-sm">Chairman</p>
                            </div>
                            {/* Member 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">JJ</div>
                                <h3 className="text-xl font-bold text-gray-800">Jitendra Jakhar</h3>
                                <p className="text-orange-600 font-medium text-sm">Mentor & Industry Advisor</p>
                            </div>
                            {/* Member 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">CJ</div>
                                <h3 className="text-xl font-bold text-gray-800">Chandrashekhar Jakhar</h3>
                                <p className="text-orange-600 font-medium text-sm">Mentor & Industry Advisor</p>
                            </div>
                            {/* Member 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">AM</div>
                                <h3 className="text-xl font-bold text-gray-800">Ashish Muwal</h3>
                                <p className="text-orange-600 font-medium text-sm">Admin Head</p>
                            </div>
                            {/* Member 5 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">BB</div>
                                <h3 className="text-xl font-bold text-gray-800">Bharat Bhakar</h3>
                                <p className="text-orange-600 font-medium text-sm">Technical Head</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Courses Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-black">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Courses</h2>
                {coursesLoading ? (
                    <p className="text-center text-lg">Loading courses...</p>
                ) : (
                    <Slider {...courseSettings}>
                        {courses.map((course) => (
                            <div key={course._id} className="p-4 h-full"> {/* h-full added to ensure equal height in slick slide */}
                                <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 h-full flex flex-col relative">
                                    {/* Image Section */}
                                    <div className="relative h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center group-hover:scale-105 transition duration-500">
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition tracking-tight">{course.name}</h3>
                                            {/* Badges */}
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full border border-blue-100 uppercase tracking-wider">
                                                    {course.duration}
                                                </span>
                                                <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-50 rounded-full border border-green-100 uppercase tracking-wider">
                                                    {course.salary}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Desc */}
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                                            {course.description}
                                        </p>

                                        {/* Footer / Button */}
                                        <button
                                            onClick={() => handleEnrollClick(course)}
                                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300"
                                        >
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            {/* 4. Contact Us Section */}
            <div className="text-blue-500 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl font-bold text-black mb-6">Contact Us</h2>
                    <p className="text-center text-lg text-gray-600 mb-12">Have any questions? We'd love to hear from you!</p>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <a className="bg-gray-50 text-blue-900 p-6 rounded-lg shadow hover:scale-105 transition flex flex-col items-center" href={`tel:919314887355`} target="_blank" rel="noopener noreferrer">
                            <FaPhoneAlt className="text-orange-500 text-4xl mb-4" />
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p className="text-gray-600 mt-2">+91 9314887355</p>
                        </a>
                        <a href={`mailto:info@insjaipur.com`} target="_blank" className="bg-gray-50 text-blue-900 p-6 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                            <FaEnvelope className="text-orange-500 text-4xl mb-4" />
                            <h3 className="font-bold text-lg">Email</h3>
                            <p className="text-gray-600 mt-2">info@insjaipur.com</p>
                        </a>
                        <a href="https://www.google.com/maps/place/INS:+Institute+of+Network+Solutions/@26.9246714,75.7425947,17z/data=!3m1!4b1!4m6!3m5!1s0x396db384887b328d:0xa416c5a7c4342827!8m2!3d26.9246714!4d75.7425947!16s%2Fg%2F11k4l9n1k2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="bg-gray-50 text-blue-900 p-6 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                            <FaMapMarkerAlt className="text-orange-500 text-4xl mb-4" />
                            <h3 className="font-bold text-lg">Address</h3>
                            <p className="text-gray-600 mt-2">64-65, near Aarti Zanana Hospital, Kalyan Colony, Khatipura, Jaipur, Rajasthan 302021</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* 5. Testimonials Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 text-black">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Customer Reviews</h2>
                </div>

                {/* Reviews Grid */}
                {reviewsLoading ? (
                    <div className="flex justify-center items-center h-32 mt-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
                        {reviews.map((review) => (
                            <div key={review._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
                                <div className="relative mb-4">
                                    <FaQuoteLeft className="text-gray-300 text-2xl absolute -top-2 -left-1" />
                                    <p className="text-gray-700 pl-6 italic">{review.text}</p>
                                </div>
                                <div className="font-medium text-gray-900 mt-auto">- {review.author_name}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Feedback Form */}
                <div className="max-w-xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Leave Your Review</h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="author_name"
                            placeholder="Your Name"
                            value={reviewFormData.author_name}
                            onChange={handleReviewChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <textarea
                            name="text"
                            placeholder="Share your experience..."
                            value={reviewFormData.text}
                            onChange={handleReviewChange}
                            required
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-medium">Rating:</span>
                            <div className="flex">{renderStars(reviewFormData.rating, true)}</div>
                        </div>
                        <button
                            type="submit"
                            disabled={reviewSubmitting}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                        >
                            {reviewSubmitting ? "Submitting..." : "Submit Feedback"}
                        </button>
                    </form>
                </div>
            </div>

            {/* 6. Google Map Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Our Location</h2>
                <div className="w-full max-w-7xl mx-auto h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.226373703946!2d75.7400190753873!3d26.92467137664879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db384887b328d%3A0xa416c5a7c4342827!2sINS%3A%20Institute%20of%20Network%20Solutions!5e0!3m2!1sen!2sin!4v1715062764517!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Enrollment Modal */}
            {isEnrollModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Enroll in <span className="text-blue-600">{selectedCourse?.name}</span></h2>
                        <form onSubmit={handleEnrollSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="name" placeholder="John Doe" value={enrollFormData.name} onChange={handleEnrollChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" placeholder="john@example.com" value={enrollFormData.email} onChange={handleEnrollChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 98765 43210" value={enrollFormData.phone} onChange={handleEnrollChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold shadow-md mt-4">Confirm Enrollment</button>
                        </form>
                        <button onClick={() => setIsEnrollModalOpen(false)} className="mt-4 w-full text-gray-500 hover:text-gray-800 text-sm font-medium">Cancel</button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default RegularContent;
