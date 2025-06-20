"use client";

import { useEffect } from "react";
import Navbar from "./navbar/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";
import Project from "./pages/project/page";
import Skill from "./pages/skill/page";
import Certificate from "./pages/certificate/page";
import Footer from "./footer/page";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat komponen dimuat
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Project />
      <Skill />
      <Certificate />
      <Footer />
    </>
  );
}
