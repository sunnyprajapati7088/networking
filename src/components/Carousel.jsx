

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     cssEase: "ease-in-out",
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Large screens
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Laptops
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablets
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Mobile
//     ]
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 bg-blue-900 rounded-lg shadow-lg">
//       <h2 className="text-center text-white text-2xl font-bold mb-6">
//         Meet Our Recently Placed Students
//       </h2>
//       <Slider {...settings}>
//         {images.map((student, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
//               <img
//                 src={student.image}
//                 alt={student.name}
//                 className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
//               />
//               <h3 className="text-orange-500 font-bold mt-3 text-lg">{student.name}</h3>
//               <p className="text-gray-600 text-sm">{student.company}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;




import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Large screens
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Laptops
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablets
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Mobile
    ]
  };

  return (
    <div className="w-full max-w-9xl mx-auto p-6  rounded-lg shadow-lg">
      <h2 className="text-center text-blue-500 text-2xl font-bold mb-6">
        Meet Our Recently Placed Students
      </h2>
      <Slider {...settings}>
        {images.map((student, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
              />
              <h3 className="text-orange-100 font-bold mt-3 text-lg">{student.name}</h3>
              <p className="text-gray-600 text-sm">{student.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

