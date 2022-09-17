import React from "react";

import "./Problems.css";
import "aos/dist/aos.css";
import AOS from "aos";
function Problems() {
  AOS.init({
    duration: 2200,
    delay: 30,
    once: false,
  });
  return (
    <div>
      <section className="problems">
        <div className="container">
          <div className="problems-content row">
            {/* <div className="col-md-6 left" data-aos="new-animation-tokke">
              <div className="section-heading">
                <h2>Problems</h2>
              </div>

              <p className="detail mt28 ">
                Currently, tags and descriptive information cannot be
                permanently attached when creating instrumentals and audio
                files. When an instrumental is downloaded, the owner is left
                with no more than an audio file.
                <br />
                <br />
                It is nearly impossible for small creators to connect and
                collaborate safely. There no way to pay someone for their work
                and get a guaranteed result. Currently, collaboration is done
                through social media with no secure intermediary for payment.
                <br />
                <br />
                Creators have very few options when it comes to collecting
                profit for their work. The main way artists profit on their work
                is from streams or leasing instrumentals. Unfortunately,
                creators make very little money from this. Platforms like
                ‘Spotify’ and ‘Apple Music’ pay a fraction of a penny per
                stream. Artists that are not well known find it difficult to
                make any profit at all.
              </p>
            </div> */}

            <div className=" left">
              <div className="section-heading">
                <h2>Problems</h2>
              </div>

              <p className="detail mt28 ">
                Currently, tags and descriptive information cannot be
                permanently attached when creating instrumentals and audio
                files. When an instrumental is downloaded, the owner is left
                with no more than an audio file.
                <br />
                <br />
                It is nearly impossible for small creators to connect and
                collaborate safely. There no way to pay someone for their work
                and get a guaranteed result. Currently, collaboration is done
                through social media with no secure intermediary for payment.
                <br />
                <br />
                Creators have very few options when it comes to collecting
                profit for their work. The main way artists profit on their work
                is from streams or leasing instrumentals. Unfortunately,
                creators make very little money from this. Platforms like
                ‘Spotify’ and ‘Apple Music’ pay a fraction of a penny per
                stream. Artists that are not well known find it difficult to
                make any profit at all.
              </p>
            </div>

            {/* <div className="col-md-6 right" data-aos="fade-left">
              <img
                src="\assets\gif\problemgif.gif"
                alt=""
                className="img-fluid"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Problems;
