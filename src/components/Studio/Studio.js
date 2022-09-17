import "./Studio.css";
import React, { useEffect } from "react";

const Studio = () => {
  return (
    <div id="idstudio">
      <section className="studio">
        <div className="container">
          <div className="studio-content row">
            <div className="col-md-6 left">
              <img
                src="\assets\gif\studioback.gif"
                alt=""
                className="img-fluid studio-gif"
              />
              <div className="mobile" data-aos="zoom-in">
                <img
                  src="\assets\images\studioMobile.png"
                  alt=""
                  className="img-fluid studio-mbl"
                />
              </div>
            </div>

            <div className="col-md-6 right" data-aos="fade-left">
              <div className="section-heading">
                <h2>Studio</h2>
              </div>

              <p className="detail mt28">
                A staking platform will be introduced for NFT owners to earn
                time-based credits, called 'NOTES'. Various benefits of NOTES,
                such as leveling up profiles, will be announced in the near
                future.
              </p>
              <div>
                <button className="my-btn mt28">Stake</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
