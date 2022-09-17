import React from "react";
import "./OverviewHead.css";
import Navbar from "../../../components/Header/navbar/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
function OverviewHead() {
  useEffect(() => {
    AOS.init({
      duration: 2200,
      delay: 15,
      once: false,
    });
  }, []);
  return (
    <div>
      <section className="overviewhero">
        <div className="">
          <Navbar />

          <div className="overview-hero-content">
            <h1 className="over-heading">Overview</h1>

            <div className="logoggg mt-5" data-aos="zoom-in">
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

export default OverviewHead;
