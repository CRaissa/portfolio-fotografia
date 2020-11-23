import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="logo_2.png"/>
      </a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 160px;
        height: 70px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;