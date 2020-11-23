import Link from 'next/link';
import React from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';


const images = [
  '/portfolio/1.jpeg',
  '/portfolio/2.jpeg'
];

const Home = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Camila Raissa Fotografia</h1>
        <Link href="/services">
          <a className="view-more">Veja meu portfolio</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Alguns trabalhos</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">Veja mais</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/cover.jpeg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
