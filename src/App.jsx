import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Plans from "./pages/Placement";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Signup from "./components/SignUp";
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

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main className="mt-16">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/" element={<SlideCourse />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/placement" element={<Placement />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard/>} />
//           <Route path="/admin" element={<AdminDashboard />}>
//           <Route path="/admin/add-placement" element={<AddPlacement />} />
//           <Route path="/admin/edit-placement" element={<EditPlacement />} />
//           <Route path="/admin/view-placement" element={<ViewPlacement />} />
//           <Route path="/admin/delete-placement" element={<DeletePlacement />} />
//           <Route path="/admin/add-carousel" element={<AddCarousel/>} />
//           <Route path="/admin/view-carousel" element={<ViewCarousel />} />
//           <Route path="/admin/edit-Carousel" element={<EditCarousel />} />
//         </Route>
//         </Routes>
//       </main>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 text-white">
        <Navbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/placement" element={<PlacementComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/CareerCoursePage" element={<CareerCoursePage/>} />
            <Route path="/CourseComponent" element={<CourseComponent />} />
            <Route path="/courses" element={<LandingCourse />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="/admin/add-placement" element={<AddPlacement />} />
              <Route path="/admin/edit-placement" element={<EditPlacement />} />
              <Route path="/admin/view-placement" element={<ViewPlacement />} />
              <Route path="/admin/delete-placement" element={<DeletePlacement />} />
              <Route path="/admin/add-carousel" element={<AddCarousel />} />
              <Route path="/admin/view-carousel" element={<ViewCarousel />} />
              <Route path="/admin/edit-carousel" element={<EditCarousel />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;