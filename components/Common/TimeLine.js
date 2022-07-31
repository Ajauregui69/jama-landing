import React, { Component } from "react";

class TimeLine extends Component {
  render() {
    return (
      <>
        <div className="timeline-page">
          <div className="title">
            <h1>Bug Bounty Process</h1>
          </div>
          <div className="timeline row">
            <div className="col-lg-3">
              <div className="timeline-box">
                <div className="timeline-box-icon">
                  <i className="flaticon-user"></i>
                </div>
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">1</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Sign up to our platform
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="timeline-box">
                <div className="timeline-box-icon">
                  <i className="flaticon-quote"></i>
                </div>
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">2</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">Crate a Validation Disclosure Policy</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="timeline-box">
                <div className="timeline-box-icon">
                  <i className="flaticon-choice"></i>
                </div>
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">3</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  JAMA Validate reports
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="timeline-box">
                <div className="timeline-box-icon">
                  <i className="flaticon-cyber-security"></i>
                </div>
                <div className="timeline-box-stepstatus checked">
                  <div className="check-circle-wrapper">
                    <div className="check-circle">4</div>
                  </div>
                </div>
                <div className="timeline-box-stepname">
                  Improve your security
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TimeLine;
