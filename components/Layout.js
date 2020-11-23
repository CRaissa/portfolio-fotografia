import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper">
    <Head>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
      <title>
        {props.title ? `${props.title} | ` : ''}
        Camila Raissa
      </title>
      {props.description ? <meta name="description" content={props.description} /> : null}
    </Head>

    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
          'Lucida Grande', sans-serif;
        text-rendering: optimizeLegibility;
      }
      a {
        color: #1b789e;
        text-decoration: none;
      }
      a:hover {
        color: #166281;
      }
      h1,
      h2,
      h3 {
        margin: 40px 0 30px;
      }
      h1 {
        font-size: 42px;
      }
      h2 {
        font-size: 36px;
      }
      p {
        margin: 0 0 10px;
      }
      img {
        max-width: 100%;
      }
      /* Layout */
      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;