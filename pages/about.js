import Layout from '../components/Layout';


const About = () => (
    <Layout>
        <h1>Sobre</h1>
        <ul className="company-info">
            <li>
                <span className="company">Camila Raissa da Silva</span>
            </li>
            <li>
                <a href="mailto:hi@fi.studio">camila.raissa.jp@gmail.com</a>
            </li>
        </ul>
        <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
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
      }
    `}</style>
    </Layout>
);

export default About;