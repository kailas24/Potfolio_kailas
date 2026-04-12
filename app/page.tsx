import React from 'react'
import Hero from "./components/Hero/Hero";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const page = () => {
  return (
    <div className="flex flex-col pt-24 max-sm:pt-8 bg-black">
      <Hero />
      <SocialLinks />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default page
