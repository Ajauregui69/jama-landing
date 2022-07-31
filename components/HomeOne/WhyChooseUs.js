const WhyChooseUs = () => {
  return (
    <section className="choose-ue-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="choose-title">
              <h2>JAMA Security Bug Bounty platform</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-content">
              <ul>
                <li>
                  <span>
                    01 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>Community</h3>
                  <p>
                    You will find a community of white hat hackers that think
                    outside the box and will find vulnerabilities faster than
                    any malicious hacker
                  </p>
                </li>

                <li className="ml">
                  <span>
                    02 <i className="flaticon-support"></i>
                  </span>
                  <h3>Fast support</h3>
                  <p>
                    Researchers and companies singed up in JAMA Security Bug Bounty Platform wil have support of any issue as fas as possible.
                  </p>
                </li>

                <li className="ml-25">
                  <span>
                    03 <i className="flaticon-shield"></i>
                  </span>
                  <h3>Continuous improvement</h3>
                  <p>
                    With JAMA Security bug Bounty Platform you will get a continous improvement of all your company assets with the community form around the world
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="choose-img">
              <img src="/images/choose-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
