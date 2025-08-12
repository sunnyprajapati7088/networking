import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Plans from "./pages/Placement";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import SlideCourse from "./components/SlideCourse";
import Placement from "./pages/Placement";
import AdminDashboard from "./pages/AdminDashboard";
import AddPlacement from "./components/AddPlacement";
import EditPlacement from "./components/EditPlacement";
import ViewPlacement from "./components/ViewPlacement";
import DeletePlacement from "./components/DeletePlacement";
import AddCarousel from "./components/carousel/AddCarousel";
import ViewCarousel from "./components/carousel/ViewCarousel";
import EditCarousel from "./components/carousel/EditCarousel";
import CareerCoursePage from "./components/Courses/CareerCoursePage";
import CourseComponent from "./components/Courses/CourseComponent";
import LandingCourse from "./components/Courses/LandingCourse";
import PlacementComponent from "./components/placement/PlacementComponent";
import AdminCoursePanel from "./components/Courses/AdminCoursePanel";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminFeedback from "./pages/AdminFeedback";
import AdminEnrollments from "./components/AdminEnrollments";

import Signup from "./pages/Signup";
import AdminSignUp from "./components/AdminSignUp";





function App() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {

    var _mtm = window._mtm = window._mtm || [];
   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
   g.async=true; g.src='https://cdn.matomo.cloud/insglobaltech.matomo.cloud/container_ggaFegGu.js'; s.parentNode.insertBefore(g,s);
  
    const loadData = async () => {
      setLoading(true);
      try {
        const [coursesResponse, categoriesResponse] = await Promise.all([
          axios.get(`https://lms-backend-f9h3.onrender.com/api/courses`),
          axios.get(`https://lms-backend-f9h3.onrender.com/api/categories`)
        ]);
        setCourses(coursesResponse.data);
        setCategories(categoriesResponse.data);
        setSearchedData(coursesResponse.data); // Initialize with all courses
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Search function to filter courses
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchedData(courses); // Show all courses when search is empty
    } else {
      const filtered = courses.filter(course => 
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.category.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filtered)
      setSearchedData(filtered);
    }
  };

  return (
   <div>
 <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 text-white">
        {/* Pass search handler to Navbar */}
        <Navbar 
          
        />
        
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CareerCoursePage" element={<CareerCoursePage />} />
            <Route path="/CourseComponent" element={<CourseComponent />} />
            <Route path="/placement" element={<PlacementComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup/>} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<LandingCourse />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="/admin/add-placement" element={<AddPlacement />} />
              <Route path="/admin/edit-placement" element={<EditPlacement />} />
              <Route path="/admin/view-placement" element={<ViewPlacement />} />
              <Route path="/admin/delete-placement" element={<DeletePlacement />} />
              <Route path="/admin/add-carousel" element={<AddCarousel />} />
              <Route path="/admin/view-carousel" element={<ViewCarousel />} />
              <Route path="/admin/edit-carousel" element={<EditCarousel />} />
              <Route path="/admin/AdminCoursePanel" element={<AdminCoursePanel/>}/>
              <Route path="/admin/signup" element={<AdminSignUp/>} />
              <Route path="/admin/feedback" element={<AdminFeedback />} />
              <Route path="/admin/enrollments" element={<AdminEnrollments />} />
            </Route>
          </Routes>
        </main>
       
        <Footer />
      </div>
    </Router>
 

   </div>
  );
}

export default App;