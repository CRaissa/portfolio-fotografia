const Footer = () => (
  <footer className="footer-class">
    <div className="rounded-social-buttons">
    <a className="social-button twitter" href="https://www.twitter.com/raissa7" target="_blank"><i className="fab fa-twitter"></i></a>
    <a className="social-button instagram" href="https://www.instagram.com/c.raissa" target="_blank"><i className="fab fa-instagram"></i></a>
    <div className="copyright">© {new Date().getFullYear()} Camila R Silva.</div>
    </div>

    

    <style jsx>{`

      .footer-class {
        background: #D0D8DB;
        padding-top: 60px;
        padding-bottom: 40px;
      }

      textarea {
        resize: none;
      }

      .copyright {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 15px;
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

      @charset "UTF-8";

      .svg-inline--fa {
        vertical-align: -0.200em;
      }
      
      .rounded-social-buttons {
        text-align: center;
      }

      .rounded-social-buttons .social-button {
        display: inline-block;
        position: relative;
        cursor: pointer;
        width: 3.125rem;
        height: 3.125rem;
        border: 0.125rem solid transparent;
        padding: 0;
        text-decoration: none;
        text-align: center;
        color: #fefefe;
        font-size: 1.5625rem;
        font-weight: normal;
        line-height: 2em;
        border-radius: 1.6875rem;
        transition: all 0.5s ease;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
                transform: rotate(360deg);
      }

      .rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {
        font-size: 25px;
      }

      .rounded-social-buttons .social-button.facebook {
        background: #3b5998;
      }
      
      .rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
        color: #3b5998;
        background: #fefefe;
        border-color: #3b5998;
      }
      
      .rounded-social-buttons .social-button.twitter {
        background: #55acee;
      }
      
      .rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {
        color: #55acee;
        background: #fefefe;
        border-color: #55acee;
      }
      
      .rounded-social-buttons .social-button.linkedin {
        background: #007bb5;
      }
      
      .rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {
        color: #007bb5;
        background: #fefefe;
        border-color: #007bb5;
      }
      
      .rounded-social-buttons .social-button.youtube {
        background: #bb0000;
      }
      
      .rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
        color: #bb0000;
        background: #fefefe;
        border-color: #bb0000;
      }
      
      .rounded-social-buttons .social-button.instagram {
        background: #125688;
      }
      
      .rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {
        color: #125688;
        background: #fefefe;
        border-color: #125688;
      }

    `}</style>
  </footer>




);
  
export default Footer;