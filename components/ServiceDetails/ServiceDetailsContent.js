import Link from "next/link";
import TimeLine from "../../components/Common/TimeLine";

const BugBountyPlatform = () => {
  return (
    <section className="service-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-details-wrap text-center">
              <h1>Systems can't be 100% safe</h1>
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
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words.
              </p>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem,
                you to be sure there isn't anything.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TimeLine></TimeLine>
          </div>
        </div>
        <div className="row img-text">
          <div className="col-lg-6">
            <img src="/images/Web-Hosting-02.svg" alt="Image" />
          </div>
          <div className="col-lg-6">
            <h1>
              <b>Why us?</b>
            </h1>
            <p>
              Con Jama Security abrirás las posibilidades de tu empresa para que
              los entusiastas de seguridad informática puedan encontrar
              vulnerabilidades que ningún scanner automático podrá encontrar.
            </p>
            <p>
              Un bug bounty program o programa de recompensas de errores se
              trata de un acuerdo que ofrecen numerosas organizaciones,
              compañías, sitios web y desarrolladores de software para
              recompensar (tanto monetarias como no) a los individuos que
              reporten errores, vulnerabilidades y fallos de seguridad.
            </p>
            <p>
              <b>
                Regístrate para en nuestra plataforma para utilizar nuestros
                servicios.
              </b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="row img-text">
            <div className="col-lg-6">
              <h1>
                <b>Deep validation reports</b>
              </h1>
              <p>
                Con Jama Security abrirás las posibilidades de tu empresa para
                que los entusiastas de seguridad informática puedan encontrar
                vulnerabilidades que ningún scanner automático podrá encontrar.
              </p>
              <p>
                Un bug bounty program o programa de recompensas de errores se
                trata de un acuerdo que ofrecen numerosas organizaciones,
                compañías, sitios web y desarrolladores de software para
                recompensar (tanto monetarias como no) a los individuos que
                reporten errores, vulnerabilidades y fallos de seguridad.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/images/jama_hacker_analisis.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="row img-text">
          <div className="col-lg-6 img-container">
            <img
              className="absolute-img"
              src="/images/interfaz_hacker1.png"
              alt="Image"
            />
          </div>
          <div className="col-lg-6">
            <h1>
              <b>Platfrom</b>
            </h1>
            <p>
              Con Jama Security abrirás las posibilidades de tu empresa para que
              los entusiastas de seguridad informática puedan encontrar
              vulnerabilidades que ningún scanner automático podrá encontrar.
            </p>
            <p>
              Un bug bounty program o programa de recompensas de errores se
              trata de un acuerdo que ofrecen numerosas organizaciones,
              compañías, sitios web y desarrolladores de software para
              recompensar (tanto monetarias como no) a los individuos que
              reporten errores, vulnerabilidades y fallos de seguridad.
            </p>
            <div className="platform-btn">
              <Link href="/about">
                <a className="default-btn">Sing Up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugBountyPlatform;
