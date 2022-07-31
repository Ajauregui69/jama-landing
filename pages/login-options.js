import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

class About2 extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner pageTitle="Login Options" />
        <div className=" container ptb-100">
          <div className="pb-100 text-aling-center">
            <h1>Welcome to JAMA Security</h1>
            <p>Please chose the way you want to work with us!</p>
          </div>

          <div className="container">
            <div className="row login-options">
              <a
                href="www.google.com"
                className="col-6 pl-30 pr-30 option-container"
              >
                <div className="single-team">
                  <img src="/images/mini_jama_empresa.png" alt="Image" />
                  <h4>Company</h4>
                  <p>
                    I want to make sure my company's security is safe by
                    rewarding hackers who find vulnerabilities.
                  </p>
                </div>
              </a>
              <a
                href="www.google.com"
                className="col-6 pl-30 pr-30 option-container"
              >
                <div className="single-team">
                  <img src="/images/mini_jama_hacker.png" alt="Image" />
                  <h4>Hacker</h4>
                  <p>
                    I want to use my skills to help make the internet a safer
                    place.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About2;
