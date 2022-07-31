import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-one">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>Get hacked before you get hacked</h1>
              <p>
                Increase your resistance to attack by tapping the world’s top
                ethical hackers. Understand your attack surface, hunt bugs, test
                apps, and fix vulnerabilities before anyone else knows they
                exist.
              </p>

              <div className="banner-btn">
                <Link href="/about">
                  <a className="default-btn">Learn More</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Main Image */}
            <div className="banner-main-img banner-one-main-img">
              <img src="/images/home-one/jama_hacker_codigo.png" alt="Image" />
            </div>

            {/* Banner Shape Images */}
            <div className="banner-img">
              <img
                className="animate__animated animate__fadeInUp animate__fast"
                src="/images/home-one/jama_hacker_codigo.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
