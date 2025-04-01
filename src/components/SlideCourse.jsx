import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCourse = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/carousel")
      .then((res) => res.json())
      .then((data) => {
        // Remove duplicate images based on URL
        const uniqueImages = Array.from(new Set(data.map((img) => img.image))).map((image) =>
          data.find((img) => img.image === image)
        );
        setImages(uniqueImages);
      })
      .catch((error) => console.log(error));
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
    adaptiveHeight: false, // Ensures all slides have the same height
  };

  return (
    <div className="w-full min-w-screen-lg mx-auto">
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index} className="relative w-full h-[500px]"> {/* Fixed height */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Optional Overlay with Caption */}
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideCourse;
