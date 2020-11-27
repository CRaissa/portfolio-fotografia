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
    <div className="sidebar">
      <ul>
        <li><a href="#topo">Portfolio</a></li>
        <li><a href="#foto_rua">Fotografia de Rua</a></li>
        <li><a href="#b_w">Preto e Branco</a></li>
      </ul>
      <button className="sidebarBtn">
        <span></span>
      </button>

    </div>

    <h1 id="topo">Portfolio</h1>
    <h2 id="foto_rua">Fotografia de Rua</h2>
    <Gallery images={images_protesto} />
    <h2 id="b_w">Preto e Branco</h2>
    <Gallery images={images_bw} />
    <style jsx>{`
    .sidebar {
      height: 100%; /* Full-height: remove this if you want "auto" height */
      width: 240px; /* Set the width of the sidebar */
      position: fixed; /* Fixed Sidebar (stay in place on scroll) */
      z-index: 0; /* Stay on top */
      top: 2; /* Stay at the top */
      bottom: 2;
      left: 0;
      background-color: transparent;
      transition: .3s;
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 50px;
    }

    ul{
      margin: 0;
      padding: 20px 0;
    }

    ul li{
      list-style: none;
    }

    ul li a{
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 22px;
      color: #111;
      padding: 5px 2px;
      font-weight: 300;
      text-decoration: none;
      display: block;
    }

    .sidebar a:hover {
      padding-bottom: 3px;
      border-bottom: 2px solid #fa7369;
    }

    .sidebarBtn{
      position: absolute;
      top: 2;
      right:150px;
      width:60px;
      height:50px;
      box-sizing:border-box;
      cursor: pointer;
      background-color: #f5f5f5;
      border: none;
      outline: none;
    }

    .sidebarBtn span{
      display: block;
      width: 35px;
      height: 3px;
      background-color: #262626;
      position: absolute;
      top:24px;
      transition: .3s;
    }

    .sidebarBtn span:before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: #262626;
      position: absolute;
      top: -10px;
      left: 0;
      transition: .3s;
    }
    
    .sidebarBtn span:after{
      content: '';
      width: 100%;
      height: 3px;
      background-color: #262626;
      position: absolute;
      top: 10px;
      left: 0;
      transition: .3s;
    }
    
    .active{
      left: 0;
    }

    .sidebarBtn.toggle span{
      background-color: transparent;
    }

    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    

    
    `}</style>   
  </Layout>
  );
  
};


export default Portfolio;
