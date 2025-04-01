
import Carousel from "../components/Carousel";
import ContactUs from "../components/ContactUs";
import Landing from "../components/Landing";
import SlideCourse from "../components/SlideCourse";

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
      {/* Landing Page */}
    

    <SlideCourse/>
      {/* Carousal Section */}
     <Carousel/>
      <Landing />
      <ContactUs/>
    </div>
  );
};

export default Home;

  