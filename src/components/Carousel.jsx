import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-blue-900 rounded-lg shadow-lg">
      <h2 className="text-center text-white text-2xl font-bold mb-4">
        Meet Our Recently Placed Students
      </h2>
      <Slider {...settings}>
        {images.map((student, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-yellow-400 font-bold mt-2">{student.name}</h3>
              <p className="text-gray-600">{student.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
