import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Overview.css";
// import { useEffect } from "react";

function Overview() {
  AOS.init({
    duration: 3200,
    easing: "ease-in-out",
    delay: 30,
    once: false,
  });

  return (
    <div id="idoverview">
      <div className="overview">
        <div className="container">
          <div className="overview-content row">
            <div className="col-md-6 left">
              <img
                src="\assets\images\speaker.webp"
                alt=""
                className="img-fluid spkr"
                data-aos="fade-right"
              />
            </div>

            <div className="col-md-6 right " data-aos="fade-left">
              <div className="section-heading">
                <h2>Overview</h2>
              </div>

              <p className="detail mt28">
                Blocknotes is a tool for innovators who want to harness the
                power of Web3 in the music industry. Users can trade audio
                files, such as instrumentals and songs, as NFTs. Customizable
                profiles allow creators to showcase their talent.
              </p>
              <div className="mt28">
                <Link to="/overviewpage" className="my-btn mt28">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
