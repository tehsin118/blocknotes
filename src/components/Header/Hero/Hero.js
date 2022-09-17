import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./Hero.css";
import "aos/dist/aos.css";
import AOS from "aos";
function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2200,
      delay: 15,
      once: false,
    });
  }, []);
  return (
    <div id="shad">
      <section className="hero">
        <Navbar />
        <div className="mic onlydesktop">
          <img
            src="\assets\images\bannermicback.webp"
            alt=""
            className=" img-fluid "
            data-aos="zoom-in"
          />
        </div>
        <div className="onlymobile">
          <img
            src="\assets\images\bannermicback.webp"
            alt=""
            className=" img-fluid "
            data-aos="zoom-in"
          />
        </div>

        <div className="   hcontent">
          <div className="hero-content">
            <div className="tag">
              <h1 data-aos="fade-up">Create . &nbsp;</h1>
              <h1 data-aos="fade-down">Connect . &nbsp;</h1>
              <h1 data-aos="fade-up">Collect .</h1>
            </div>
          </div>
          <div className="lyer">
            <div className="logogggg" data-aos="zoom-in">
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
              <img src="\assets\gif\logogif.gif" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
