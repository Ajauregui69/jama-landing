import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/about-img.png" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2>
                Cover all your assets weakness.
              </h2>
              <p>
                JAMA Security platform will conect your company with the top white hat hackers in the world to help you improve all your assets and products.
              </p>

              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Web Applications
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Android Applications
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      IOS Applications
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Hardware
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      IOT
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/about">
                <a className="default-btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
