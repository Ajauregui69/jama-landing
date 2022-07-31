import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="single-widget">
                  <a href="/" className="logo">
                    <img
                      src="/images/jama_secutiry_logo_blanco.png"
                      alt="Image"
                    />
                  </a>

                  <p>
                    JAMA Security the best option to cover all your need and
                    help you improve your products and security
                  </p>

                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="single-widget">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link href="/bugbounty">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Bug Bounty
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/iso27001">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          ISO 27001
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pentesting">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Pentesting
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="single-widget">
                  <h3>Information</h3>

                  <ul className="information">
                    <li className="address">
                      <i className="flaticon-call"></i>
                      <span>Phone</span>
                      +(52)442 - 592 - 7363
                    </li>

                    <li className="address">
                      <i className="flaticon-envelope"></i>
                      <span>Email</span>
                      info@jamasecurity.com
                    </li>

                    <li className="address">
                      <i className="flaticon-maps-and-flags"></i>
                      <span>Address</span>
                      Juriquilla, Queretaro, Queretaro
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-shape">
            <img src="/images/shape/footer-shape-one.png" alt="Image" />
            <img src="/images/shape/footer-shape-two.png" alt="Image" />
          </div>
        </footer>

        {/* Footer Bottom Area   */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copy-right">
                  <p>
                    Copyright &copy; {currentYear} Jumpx. All Rights Reserved
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="privacy">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
