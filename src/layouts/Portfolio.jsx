import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../pages/Jumbotron";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Resume from "../pages/Resume";
import Contibuted from "../pages/Contibuted";
import Project from "../pages/Project";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Skill />
      <Resume />
      <Contibuted />
      <Project />
      <Footer />
    </>
  );
}
