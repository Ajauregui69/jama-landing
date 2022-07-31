import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Pricing from '../components/HomeTwo/Pricing';
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Footer from "../components/Layouts/Footer";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner pageTitle="ISO 27001 Implementation" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-wrap text-center">
                <h1>What is ISO 27001</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  veritatis ducimus rerum sunt dignissimos libero et eum modi!
                  Consequuntur rem incidunt et ducimus magnam sunt rerum hic
                  beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Laudantium asperiores eos obcaecati nostrum
                  sed, corporis placeat quasi pariatur id, est iure, minus
                  quibusdam! Facilis.
                </p>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old. Richard
                  McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem, you to be sure there isn't anything.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-page">
          <div className="title">
            <h1>Certification Process</h1>
          </div>
          <div className="timeline row">
            <div className="col-lg-2">
              <div className="timeline-box">
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">1</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Choose a Management Standard
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="timeline-box">
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">2</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">Contact Us</div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="timeline-box">
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">3</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Initial Assessment
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="timeline-box">
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">4</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Documentation Preperation
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="timeline-box">
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">5</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Certification
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="timeline-box">
              <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">6</div>
                  </div>
                </div>
                
                <div className="timeline-box-stepname">
                  Maintaining Compliance
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <MakeYourBusiness />
        <Pricing />
        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
