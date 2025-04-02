// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SlideCourse = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/carousel")
//       .then((res) => res.json())
//       .then((data) => {
//         // Remove duplicate images based on URL
//         const uniqueImages = Array.from(new Set(data.map((img) => img.image))).map((image) =>
//           data.find((img) => img.image === image)
//         );
//         setImages(uniqueImages);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "ease-in-out",
//     pauseOnHover: true,
//     arrows: false,
//     adaptiveHeight: false, // Ensures all slides have the same height
//   };

//   return (
//     <div className="w-full min-w-screen-lg mx-auto">
//       <Slider {...settings}>
//         {images.map((slide, index) => (
//           <div key={index} className="relative w-full h-[500px]"> {/* Fixed height */}
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//             {/* Optional Overlay with Caption */}
            
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SlideCourse;


import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCourse = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/carousel")
      .then((res) => res.json())
      .then((data) => {
        // Remove duplicate images based on URL
        const uniqueImages = Array.from(new Set(data.map((img) => img.image))).map((image) =>
          data.find((img) => img.image === image)
        );
        setImages(uniqueImages.filter((img)=>img.isActive === true)); // Filter out inactive images
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-4 border-orange-500"></div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <Slider {...settings}>
            {images.map((slide, index) => (
              <div key={index} className="focus:outline-none">
                <div className="relative w-full aspect-video h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px]">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default SlideCourse;