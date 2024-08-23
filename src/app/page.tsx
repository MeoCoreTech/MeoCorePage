import Image from "next/image";

import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Solutions from "@/pages/Solutions"
import AboutUs from "@/pages/AboutUs"
import Testimonial from "@/pages/Testimonials";
import Navbar from '../components/layout/Navbar';

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <Home />
      <Services />
      <Solutions />
      <AboutUs />
      <Testimonial />
    </div>
  );
}

