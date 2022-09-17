import React from "react";
import "./Solutions.css";
import Card from "react-bootstrap/Card";
function Solutions() {
  return (
    <div>
      <section className="solutions ">
        <div className="container">
          <div className="section-heading text-center" data-aos="slide-down">
            <h2>Solutions</h2>
          </div>
          <div className="solutions-content row">
            <div className="col-md-4 scrol c-center" data-aos="fade-right">
              <Card className="solutionCard">
                <Card.Body>
                  <div className="card-avatar">
                    <img src="\assets\images\createavatar.svg" alt="" />
                  </div>
                  <div className="card-heading">
                    <h3>Create</h3>
                  </div>
                  <div className="card-detail">
                    <p>
                      Mint your work as an NFT. Through the Blocknotes minting
                      application, creators are free to customize their NFT
                      parameters. The metadata stays on the NFT throughout
                      transactions and cannot be altered.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mt-md-0 mt-4 c-center" data-aos="slide-up">
              <Card className="solutionCard">
                <Card.Body>
                  <div className="card-avatar">
                    <img src="\assets\images\connectavatar.svg" alt="" />
                  </div>
                  <div className="card-heading">
                    <h3>Connect</h3>
                  </div>
                  <div className="card-detail">
                    <p>
                      Take advantage of secured escrow. The Blocknotes escrow
                      service provides an intermediary for creators to
                      collaborate safely. Nobody is paid until the job is done.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div
              className="col-md-4 mt-md-0 mt-4 c-center"
              data-aos="fade-left"
            >
              <Card className="solutionCard">
                <Card.Body>
                  <div className="card-avatar">
                    <img src="\assets\images\collectavatar.svg" alt="" />
                  </div>
                  <div className="card-heading">
                    <h3>Collect</h3>
                  </div>
                  <div className="card-detail">
                    <p>
                      Sell your work. By selling audio files as NFTs, the
                      creator can keep all profit and make royalties when their
                      work is traded in the future.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="solo"></div>
    </div>
  );
}

export default Solutions;
