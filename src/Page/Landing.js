import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Header/Hero/Hero";
import Fquestions from "../components/questions/Fquestions";
import Studio from "../components/Studio/Studio";
import Vision from "../components/Vision/Vision";
import Overview from "../Overview/Overview";

function Landing() {
  return (
    <div>
      <Hero />
      <Overview />
      <Vision />
      <Studio />
      <Fquestions />
      <Footer />
    </div>
  );
}

export default Landing;
