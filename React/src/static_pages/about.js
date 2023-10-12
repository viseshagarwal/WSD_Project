// Write for the About page

import React from "react";

const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <br />
      <div class="container" style={{ boxSizing: "content-box !important" }}>
        <div class="row">
          <div class="col-lg-7">
            <div class="featured-text">
              <h2 class="pb-3">
                About <span class="orange-text">Us</span>
              </h2>
              <div className="row">
                <div class="content">
                  <h3>About Victoria's Fragrances</h3>
                  <p>
                    Welcome to Victoria's Fragrances, where the art of perfumery
                    meets a passion for enchanting scents. We are more than just
                    a brand; we are a celebration of individuality, personal
                    expression, and the pursuit of the perfect scent. Our
                    commitment is to bring the world of fragrances to your
                    doorstep, making each day a little more beautiful, a little
                    more extraordinary.
                  </p>
                </div>
              </div>
              <br />
              <hr></hr>
              <br />
              <div className="row">
                <div class="content">
                  <h3>Elevate Your Senses with Victoria's Fragrances.</h3>
                  <p>
                    Explore our fragrances and experience the
                    art of scent today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="featured-text">
                <h2 class="pb-3">
                  Why <span class="orange-text">Victoria's Frangrance</span>
                </h2>
                <div class="row">
                  <div class="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-shipping-fast"></i>
                      </div>
                      <div class="content">
                        <h3>Home Delivery</h3>
                        <p>
                          Enjoy the convenience of home delivery when you shop
                          with us. We'll ensure your orders are delivered right
                          to your doorstep, so you can relax and await your
                          favorite fragrances.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-money-bill-alt"></i>
                      </div>
                      <div class="content">
                        <h3>Best Price</h3>
                        <p>
                          At Victoria's Fragrance, we believe in offering our
                          products at the most competitive prices in the market.
                          You can shop with confidence, knowing you're getting
                          the best value for your money.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-briefcase"></i>
                      </div>
                      <div class="content">
                        <h3>Custom Box</h3>
                        <p>
                          We understand that everyone has unique preferences.
                          That's why we offer custom packaging options, allowing
                          you to personalize your fragrance boxes to suit your
                          style and taste.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-sync-alt"></i>
                      </div>
                      <div class="content">
                        <h3>Quick Refund</h3>
                        <p>
                          Your satisfaction is our top priority. If, for any
                          reason, you're not completely satisfied with your
                          purchase, our quick refund process ensures that you'll
                          receive your money back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <br />
                <br />
                <h3>
                  Our <span class="orange-text">Team</span>
                </h3>
                <p></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg">
              <div class="single-team-item">
                <div class="team-bg team-bg-1"></div>
                <h4>
                  Visesh <span>Student</span>
                </h4>
              </div>
            </div>
            <div class="col-lg">
              <div class="single-team-item">
                <div class="team-bg team-bg-2"></div>
                <h4>
                  Keerthana <span>Student</span>
                </h4>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
