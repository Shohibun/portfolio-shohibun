"use client";

import Navbar from "./navbar/page";
import About from "./about/page";
import Experience from "./experience/page";
import { useEffect } from "react";
import Project from "./project/page";
import Skill from "./skill/page";
import Certificate from "./certificate/page";
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
