import React from "react";
import "./Fquestion.css";
import Accordion from "react-bootstrap/Accordion";
function Fquestions() {
  return (
    <div>
      <section className="freq-questions">
        <div className="container">
          <div className="section-heading text-center" data-aos="slide-down">
            <h2>frequently asked questions</h2>
          </div>
          <div className="fq-content">
            <div className="row accords">
              <div className="col-md-6">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Why should I own a Blocknotes NFT?
                    </Accordion.Header>
                    <Accordion.Body>
                      Holders who stake a Blocknotes NFT will recieve 50% off
                      marketplace fees. They will also be rewarded by earning
                      ‘NOTES’, a time-based credit that can be used to upgrade
                      creator profiles.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-md-6 mt-md-0 mt-5">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Solana?</Accordion.Header>
                    <Accordion.Body>
                      We chose to build on Solana because of its natively low
                      cost transactions and high scalability. Blocknotes strives
                      to bring unique tools for creators that can only be
                      accomplished on Solana.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-md-6 mt-5">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is an ‘Audio NFT’?</Accordion.Header>
                    <Accordion.Body>
                      Audio NFTs are audio files that have verified ownership on
                      the blockchain.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="col-md-6 mt-5">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Where can I find more information?
                    </Accordion.Header>
                    <Accordion.Body>
                      We have multiple unique tools being built and this
                      information will be announced when our products are ready
                      for launch. Please follow our twitter linked below for
                      continuous updates.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fquestions;
