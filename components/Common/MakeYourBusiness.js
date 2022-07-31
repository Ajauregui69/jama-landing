import React, { Component } from "react";
import Link from "next/link";

class MakeYourBusiness extends Component {
  render() {
    return (
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>ISO 27001</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>You’ll avoid regulatory fines</h3>
                <p>
                  ISO 27001 helps organisations to avoid the costly penalties
                  associated with non-compliance with data protection.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>It will improve your structure</h3>
                <p>
                  As organisations adapt and grow, it won’t take long before
                  people lose sight of their responsibilities regarding
                  information security.
                </p>
              </div>

              <div className="business-btn">
                <Link href="/iso27001">
                  <a className="default-btn">Know Details</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Risk reductions</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Information handeling process improved</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">100%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">100+</span>
                    </h2>
                    <p>Implementations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MakeYourBusiness;
