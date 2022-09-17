import { Icon } from "@iconify/react";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-content row">
          <div className="col-md-6 f-left">
            <div className="footer-log">
              <img
                src="\assets\gif\logogif.gif"
                alt=""
                srcset=""
                className="logogif"
              />
              <img
                src="\assets\images\blocknote.svg"
                alt=""
                srcset=""
                className="img-fluid blocknote"
              />
            </div>
          </div>

          <div className="col-md-6 f-right">
            <div className="powered dfc">
              <h3>POWERED BY</h3>
              <img
                src="\assets\images\solanalogo.svg"
                alt=""
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="copyright">
        <div className="row copyright-content">
          <div className="col-md-6 copy-detail">
            <p>© Copyright 2022 Intequity Labs - All rights reserved.</p>
          </div>

          <div className="col-md-6 copy-follow ">
            <p className="ml1">Follow Us</p>

            <a href="#">
              <img
                src="\assets\images\followMelogo.svg"
                alt=""
                className="img-fluid ml1"
              />
            </a>

            <a href="#">
              <Icon
                icon="akar-icons:discord-fill"
                color="white"
                width="30"
                height="30"
                className="ml1"
              />
            </a>
            <a href="#">
              <Icon
                icon="akar-icons:twitter-fill"
                color="white"
                width="30"
                height="30"
                className="twit"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
