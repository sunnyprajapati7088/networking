import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCourse = () => {
   const  images= [
    {image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743362331/crousal_plzult.png"},
    {image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743362331/crousal_plzult.png"}   ,    
 {image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743362331/crousal_plzult.png"}
      ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,  // Show one image by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } }, // Laptops
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // Tablets
      { breakpoint: 480, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mx-auto">
     
      <Slider {...settings}>
        {images.map((student, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
              />
              <h3 className="text-orange-600 font-bold mt-3 text-lg">{student.name}</h3>
              <p className="text-gray-600 text-sm">{student.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCourse;
