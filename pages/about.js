import Layout from '../components/Layout';


const About = () => (
    <Layout>
        <h1>Sobre</h1>
        <ul className="company-info">
            <li>
                <span className="company">Camila Raissa da Silva</span>
            </li>
        </ul>

        <div className="rounded-social-buttons">
          <a className="social-button" href="camila.raissa.jp@gmail.com"><i className="fas fa-envelope"></i></a>
          <a className="social-button twitter" href="https://www.twitter.com/raissa7" target="_blank"><i className="fab fa-twitter"></i></a>
          <a className="social-button instagram" href="https://www.instagram.com/c.raissa" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>

        

        <style jsx>{`
      .company-info {
        margin: 0 0 0px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }

      .social-button {
        padding-left: 25px;
      }

      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      
      .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        white-space: nowrap;
      }


      
      

      
    }
    `}</style>
    </Layout>
);

export default About;