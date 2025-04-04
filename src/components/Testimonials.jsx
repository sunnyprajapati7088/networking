import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This would be replaced with actual API call
  useEffect(() => {
    // Mock data - replace with real API call
    const mockReviews = [
      {
        author_name: "Rahul Sharma",
        rating: 5,
        text: "Amazing website! The user interface is very smooth, and I found exactly what I was looking for. Great job!",
        time: "3 days ago",
      },
      {
        author_name: "Priya Patel",
        rating: 4,
        text: "Very helpful and easy to navigate. Could improve the checkout process, but overall a great experience.",
        time: "1 week ago",
      },
      {
        author_name: "Arjun Singh",
        rating: 5,
        text: "Fast loading, clean design, and excellent customer support. Highly recommended!",
        time: "2 weeks ago",
      },
      {
        author_name: "Ananya Gupta",
        rating: 3,
        text: "Decent website, but some features are confusing. Needs better instructions for first-time users.",
        time: "3 weeks ago",
      },
      {
        author_name: "Vikram Joshi",
        rating: 5,
        text: "One of the best websites I've used. The service was quick, and the support team was very responsive.",
        time: "1 month ago",
      },
      {
        author_name: "Neha Reddy",
        rating: 4,
        text: "Loved the variety of options available. A little slow on mobile, but works perfectly on desktop.",
        time: "1 month ago",
      },
    ];

    setReviews(mockReviews);
    setLoading(false);
    
    // In a real implementation, you would call the Google API here
    // fetchGoogleReviews();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading reviews: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex justify-center items-center">
            <div className="flex">
              {renderStars(
                reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length || 0
              )}
            </div>
            <span className="ml-2 text-gray-600">
              {reviews.length} reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-gray-500 text-sm">
                  {review.time}
                </span>
              </div>
              <div className="relative mb-4">
                <FaQuoteLeft className="text-gray-300 text-2xl absolute -top-2 -left-1" />
                <p className="text-gray-700 pl-6 italic">{review.text}</p>
              </div>
              <div className="font-medium text-gray-900">
                - {review.author_name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


// useEffect(() => {
//     const fetchGoogleReviews = async () => {
//       try {
//         const placeId = "YOUR_GOOGLE_PLACE_ID"; // Get this from Google Maps
//         const apiKey = "YOUR_GOOGLE_API_KEY";
        
//         const response = await fetch(
//           `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
//         );
        
//         const data = await response.json();
        
//         if (data.result && data.result.reviews) {
//           setReviews(data.result.reviews);
//         } else {
//           setError("No reviews found");
//         }
//       } catch (err) {
//         setError("Failed to fetch reviews");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchGoogleReviews();
//   }, []);