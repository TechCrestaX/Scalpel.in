import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpertiseStrip from "./components/ExpertiseStrip";
import About from "./components/About";
import LatestBlogs from "./components/LatestBlogs";
import PatientReviews from "./components/PatientReviews";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import BookAppointment from "./pages/BookAppointment";
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <ExpertiseStrip />
        <About />
        <LatestBlogs />
        <PatientReviews />

        {/* FAQ */}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ALL BLOGS PAGE */}
        <Route path="/blogs" element={<Blogs />} />

        {/* SINGLE BLOG PAGE */}
        <Route
          path="/blogs/:slug"
          element={<BlogDetails />}
        />
<Route
    path="/book-appointment"
    element={<BookAppointment />}
  />
      </Routes>
    </BrowserRouter>
  );
}