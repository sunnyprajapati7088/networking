



// import { useState, useEffect } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";

// const Testimonials = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: "", rating: 5, text: "" });
//   const [loading, setLoading] = useState(true);

//   // Mock API Call (Replace with an actual API fetch)
//   useEffect(() => {
//     const mockReviews = [
//       {
//         author_name: "Rahul Sharma",
//         rating: 5,
//         text: "Amazing website! The user interface is very smooth, and I found exactly what I was looking for. Great job!",
//         time: "3 days ago",
//       },
//       {
//         author_name: "Priya Patel",
//         rating: 4,
//         text: "Very helpful and easy to navigate. Could improve the checkout process, but overall a great experience.",
//         time: "1 week ago",
//       },
//       {
//         author_name: "Arjun Singh",
//         rating: 5,
//         text: "Fast loading, clean design, and excellent customer support. Highly recommended!",
//         time: "2 weeks ago",
//       },
//     ];

//     setReviews(mockReviews);
//     setLoading(false);
//   }, []);

//   // Handle Review Submission
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();

//     if (newReview.name && newReview.text) {
//       const newEntry = {
//         author_name: newReview.name,
//         rating: newReview.rating,
//         text: newReview.text,
//         time: "Just now",
//       };

//       setReviews([newEntry, ...reviews]);
//       setNewReview({ name: "", rating: 5, text: "" });
//     }
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (i === fullStars + 1 && hasHalfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }

//     return stars;
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//            Testimonials
//           </h2>
//           <div className="mt-4 flex justify-center items-center">
//             <div className="flex">
//               {renderStars(
//                 reviews.reduce((acc, review) => acc + review.rating, 0) /
//                   reviews.length || 0
//               )}
//             </div>
//             <span className="ml-2 text-gray-600">
//               {reviews.length} reviews
//             </span>
//           </div>
//         </div>

//         {/* Feedback Form */}
//         <div className="bg-white p-6 rounded-lg text-black shadow-md mb-8">
//           <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
//           <form onSubmit={handleReviewSubmit} className="space-y-4">
//             <input
//               type="text"
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your Name"
//               value={newReview.name}
//               onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//               required
//             />
//             <textarea
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your Feedback"
//               value={newReview.text}
//               onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//               required
//             />
//             <div className="flex items-center">
//               <span className="mr-2 font-medium">Rating:</span>
//               <select
//                 className="border p-2 rounded-md focus:outline-none"
//                 value={newReview.rating}
//                 onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//               >
//                 {[5, 4, 3, 2, 1].map((num) => (
//                   <option key={num} value={num}>
//                     {num} Star{num > 1 ? "s" : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit Review
//             </button>
//           </form>
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="flex">{renderStars(review.rating)}</div>
//                 <span className="ml-2 text-gray-500 text-sm">{review.time}</span>
//               </div>
//               <div className="relative mb-4">
//                 <FaQuoteLeft className="text-gray-300 text-2xl absolute -top-2 -left-1" />
//                 <p className="text-gray-700 pl-6 italic">{review.text}</p>
//               </div>
//               <div className="font-medium text-gray-900">- {review.author_name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ author_name: "", text: "", rating: 0 });
  const [submitting, setSubmitting] = useState(false);

  // Fetch feedbacks from backend
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedback");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle rating selection
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/feedback", formData);
      fetchFeedbacks(); // Refresh feedbacks after submission
      setFormData({ author_name: "", text: "", rating: 0 }); // Reset form
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Render stars for rating
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

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Customer Reviews</h2>
      </div>

      {/* Feedback Form */}
      <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Leave Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="author_name"
            placeholder="Your Name"
            value={formData.author_name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="text"
            placeholder="Your Feedback"
            value={formData.text}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <div className="flex items-center space-x-2">{renderStars(formData.rating, true)}</div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>

      {/* Reviews Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
              <div className="relative mb-4">
                <FaQuoteLeft className="text-gray-300 text-2xl absolute -top-2 -left-1" />
                <p className="text-gray-700 pl-6 italic">{review.text}</p>
              </div>
              <div className="font-medium text-gray-900">- {review.author_name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
