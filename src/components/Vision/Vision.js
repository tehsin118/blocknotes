import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Vision.css";
function Vision() {
  useEffect(() => {
    AOS.init({
      duration: 2200,

      delay: 15,
      once: false,
    });
  }, []);
  return (
    <div id="idvission">
      <div className="vision">
        <div className="container">
          <div className=" vision-content ">
            <div className="row">
              <div className="col-md-6 left " data-aos="fade-right">
                <div className="section-heading">
                  <h2>Vision</h2>
                </div>
                <p className="detail mt28" style={{ color: "#fff" }}>
                  Audio NFTs are a new concept in a rapidly evolving NFT space.
                  Our vision is to bring power to creators in a world of endless
                  possibilities. The Blocknotes platform allows anyone to
                  capitalize on opportunities not previously available.
                </p>
              </div>
              <div className="col-md-6 right ">
                <div className="vision-img">
                  <img
                    src="\assets\gif\vissiongif.gif"
                    alt=""
                    className="img-fluid soundgif"
                  />
                  <div data-aos="new-animation-tokken-bottom">
                    <img
                      src="\assets\images\visionheadset.webp"
                      alt=""
                      className="img-fluid headset "
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
