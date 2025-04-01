import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    { name: "Rohit", company: "Inventum Technologies", image: "https://th.bing.com/th/id/OIP.lGbo6eNjqJ9WSnCi_jvWewHaKc?rs=1&pid=ImgDetMain" },
    { name: "Rahul", company: "Zindagi Technologies", image: "https://th.bing.com/th/id/OIP.CeVw2_HaICwkYWMl69PXvgHaIt?w=160&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Karmanya", company: "Raitel", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
    { name: "Amit", company: "Kwikzo", image: "https://th.bing.com/th/id/OIP.Gso_jiwJn2HWmKdoug0ajgAAAA?rs=1&pid=ImgDetMain" },
    { name: "Aayush", company: "Saffron", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
    { name: "Pitamber", company: "Tech Mahindra", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Pooja", company: "Ekaga", image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743182905/WhatsApp_Image_2025-03-28_at_8.12.05_AM_brfw2t.jpg" },
    { name: "Hema", company: "ACPL", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Vikas", company: "Infosys", image: "https://th.bing.com/th/id/OIP.sD_JkUegCJD9zYhKn1JYEwHaFj?rs=1&pid=ImgDetMain" },
    { name: "Meera", company: "TCS", image: "https://th.bing.com/th/id/OIP.O4FrFADr2oyYmZcbsHpUkwAAAA?rs=1&pid=ImgDetMain" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5, // Show 3 images by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Laptops/Tablets
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // Mobile
      { breakpoint: 480, settings: { slidesToShow: 1 } }   // Small Mobile
    ]
  };

  return (
    <div className="w-[100%] max-w-screen-xl mx-auto p-4 bg-gray-100 lg:mt-8">
      <h2 className="text-center text-gray-800 text-2xl font-semibold mb-6">
        Recently Placed Students
      </h2>
      <Slider {...settings}>
        {images.map((student, index) => (
          <div key={index} className="p-3">
            <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <img
                src={student.image}
                alt={student.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-gray-300"
              />
              <h3 className="text-gray-700 font-semibold mt-2 text-lg">{student.name}</h3>
              <p className="text-gray-500 text-sm">{student.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;