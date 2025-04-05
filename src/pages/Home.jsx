
// import Carousel from "../components/Carousel";
// import ContactUs from "../components/ContactUs";
// import Landing from "../components/Landing";
// import SlideCourse from "../components/SlideCourse";
// import Testimonials from "../components/Testimonials";
// import SearchResults from "./SearchResults";

//   const students = [
//     { name: "Rohit", company: "Inventum Technologies", image: "https://th.bing.com/th/id/OIP.lGbo6eNjqJ9WSnCi_jvWewHaKc?rs=1&pid=ImgDetMain" },
//     { name: "Rahul", company: "Zindagi Technologies", image: "https://th.bing.com/th/id/OIP.CeVw2_HaICwkYWMl69PXvgHaIt?w=160&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
//     { name: "Karmanya", company: "Raitel", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
//     { name: "Amit", company: "Kwikzo", image: "https://th.bing.com/th/id/OIP.Gso_jiwJn2HWmKdoug0ajgAAAA?rs=1&pid=ImgDetMain" },
//     { name: "Aayush", company: "Saffron", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
//     { name: "Pitamber", company: "Tech Mahindra", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
//     { name: "Pooja", company: "Ekaga", image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743182905/WhatsApp_Image_2025-03-28_at_8.12.05_AM_brfw2t.jpg" },
//     { name: "Hema", company: "ACPL", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
//   ];
  
   

// const Home = () => {
//   return (
//     <div className=" min-h-screen text-white">
//       {/* Landing Page */}
    

//     <SlideCourse/>
//       {/* Carousal Section */}
//      <Carousel/>
//       <Landing />
//       <ContactUs/>
//       <Testimonials/>
//       <div className="">
//           <iframe
//             className="w-full h-72 rounded-lg shadow-lg"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8852643063426!2d75.76187567538684!3d26.89156386024239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4873aaaaaab%3A0x123456789abcdef!2s64-65%2C%20near%20Aarti%20Zanana%20Hospital%2C%20Kalyan%20Colony%2C%20Khatipura%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1711989876543!5m2!1sen!2sin"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
        
//     </div>
//   );
// };

// export default Home;

  
import Carousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";
import Landing from "../components/Landing";
import SlideCourse from "../components/SlideCourse";
import Testimonials from "../components/Testimonials";
import RegularContent from "./RegularContent";
import SearchResults from "./SearchResults";

  const students = [
    { name: "Rohit", company: "Inventum Technologies", image: "https://th.bing.com/th/id/OIP.lGbo6eNjqJ9WSnCi_jvWewHaKc?rs=1&pid=ImgDetMain" },
    { name: "Rahul", company: "Zindagi Technologies", image: "https://th.bing.com/th/id/OIP.CeVw2_HaICwkYWMl69PXvgHaIt?w=160&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Karmanya", company: "Raitel", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
    { name: "Amit", company: "Kwikzo", image: "https://th.bing.com/th/id/OIP.Gso_jiwJn2HWmKdoug0ajgAAAA?rs=1&pid=ImgDetMain" },
    { name: "Aayush", company: "Saffron", image: "https://th.bing.com/th/id/OIP.8KuzEsMqjiosvFxgulknrAHaJ1?rs=1&pid=ImgDetMain" },
    { name: "Pitamber", company: "Tech Mahindra", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Pooja", company: "Ekaga", image: "https://res.cloudinary.com/drz6fzlpu/image/upload/v1743182905/WhatsApp_Image_2025-03-28_at_8.12.05_AM_brfw2t.jpg" },
    { name: "Hema", company: "ACPL", image: "https://th.bing.com/th/id/OIP.DJ5JkOVWEfAZzdp5R9-lugHaHa?w=215&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
  ];
  
   

const Home = () => {
  return (
    <div className=" min-h-screen text-white">


   
    <RegularContent/>
    </div>
  );
};

export default Home;

  