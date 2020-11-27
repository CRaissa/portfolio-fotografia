import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images_protesto = [
  '/portfolio/1.jpeg',
  '/portfolio/2.jpeg',
  '/portfolio/3.jpeg',
  '/portfolio/4.jpeg',
  '/portfolio/5.jpeg',
  '/portfolio/6.jpeg'
];

const images_bw = [
  '/portfolio/14.jpeg',
  '/portfolio/15.jpeg',
  '/portfolio/16.jpeg',
  '/portfolio/17.jpeg',
  '/portfolio/18.jpeg',
  '/portfolio/19.jpeg'
];


const Portfolio = () => {

  return(
    <Layout title="Portfolio">


    <h1 id="topo">Portfolio</h1>
    <h2 id="foto_rua">Fotografia de Rua</h2>
    <Gallery images={images_protesto} />
    <h2 id="b_w">Preto e Branco</h2>
    <Gallery images={images_bw} />
  </Layout>
  );
  
};


export default Portfolio;
