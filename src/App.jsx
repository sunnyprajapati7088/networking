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

function App() {
  return (
    <Router>
      <Navbar />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<SlideCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
