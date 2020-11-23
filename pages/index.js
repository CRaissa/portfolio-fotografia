import Link from 'next/link';
import React from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';


const images = [
  '/portfolio/1.jpeg',
  '/portfolio/4.jpeg',
  '/portfolio/18.jpeg',
  '/portfolio/16.jpeg',
  '/portfolio/5.jpeg',
  '/portfolio/13.jpeg',
  '/portfolio/12.jpeg'
];

const Home = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1></h1>
        <p></p>
      </div>
    </div>
    <div className="latest-work">
      <h2>Trabalhos Recentes</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">Veja Mais</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 400px;
        background: transparent url(/cover_2.jpeg) no-repeat center center fixed;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
        font-size:40px;
        text-shadow: -0.1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
        color:white;
        text-align:center;
      }

      .hello p {
        font-size: 20px;
        color:white;
        text-align:center;
      }

      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
        background: #eb6734;
        text-decoration:none;
        border:#eb6734 2px solid;
        padding:8px 10px;
        border-radius:10px;
        color:black;
        margin-top:10px;
        opacity: 0.7;
      }

      a.view-more:hover {
        opacity: 1;
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
