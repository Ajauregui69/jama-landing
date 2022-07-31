import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <section className="team-areaimport Team from '../components/Common/Team';">
        <div className="container mtb-100">
          <div className="section-title">
            <h2>Meet Our Pentesters</h2>
            <p>
              All of our experts have what is needed to perform a top level
              pentest for your organization
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 team-card">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/team/team1.png" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Alonso Jauregui</h3>
                  <span>Pentester</span>

                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
