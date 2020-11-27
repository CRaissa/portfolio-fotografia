import Link from 'next/link';

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <div className="dropdown">
        <button className="dropbtn">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </button>
        <div className="dropdown-content">
          <ul>
            <li>
              <Link href="/portfolio#foto_rua">
                <a>Fotografia de Rua</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio#b_w">
                <a>Preto e Branco</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <Link href="/services">
        <a>Loja</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
    </li>

    <div className="rounded-social-buttons">
      <a className="social-button twitter" href="https://www.twitter.com/raissa7" target="_blank"><i className="fab fa-twitter"></i></a>
      <a className="social-button instagram" href="https://www.instagram.com/c.raissa" target="_blank"><i className="fab fa-instagram"></i></a>
    </div>    
    <style jsx>{`
      .menu {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      
      .menu a {
        font-size: 22px;
        color: #111;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }


      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #fa7369;
      }

      .dropbtn {
        background-color: white;
        border: none;
        cursor: pointer;
        padding: 4px 0px;
        font-family: inherit;
      }

      

      .dropdown {
        position: relative;
        display: inline-block;
      }

      .dropdown-content ul {
        list-style-type: none;
        display: block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 300px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      
      .dropdown:hover .dropdown-content {
        display: block;
      }

      .rounded-social-buttons {
        padding-left: 15px;
      }

      .rounded-social-buttons:hover {
        opacity: 0.9
      }

      @media (max-width: 600px) {
        .menu {
          display: block;
          margin-top: 20px;
        }
        .menu li {
          display: inline-block;
        }
        .menu li a {
          font-size: 18px;
        }
      }
    `}</style>
  </ul>
);

export default Menu;