import Link from "next/link";

const Services = () => {
  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Pentesting Service</h2>
          <p>
            A penetration test, also known as a pen test, is a simulated cyber
            attack against your computer system to check for exploitable
            vulnerabilities.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-chip"></i>
              <h3>
                <Link href="/pentesting">
                  <a>Web pentesting</a>
                </Link>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-vr"></i>
              <h3>
                <Link href="/pentesting">
                  <a>IOS / Android Pentesting</a>
                </Link>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-blockchain"></i>
              <h3>
                <Link href="/pentesting">
                  <a>API Pentesting</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="offer-shape">
        <img src="/images/shape/services-shape/1.png" alt="Image" />
        <img src="/images/shape/services-shape/2.png" alt="Image" />
        <img src="/images/shape/services-shape/3.png" alt="Image" />
        <img src="/images/shape/services-shape/4.png" alt="Image" />
        <img src="/images/shape/services-shape/5.png" alt="Image" />
        <img src="/images/shape/services-shape/6.png" alt="Image" />
      </div>
    </section>
  );
};

export default Services;
