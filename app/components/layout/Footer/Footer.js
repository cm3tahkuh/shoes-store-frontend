import Link from "next/link";
import "./Footer.scss";


//Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__menu">
          <Link href="/" className="footer__title">
            КРОССЫ—И ТОЧКА.
          </Link>
        </div>
        <hr className="line"></hr>
        <h6 className="footer__copyright">КРОССЫ И ТОЧКА © 2023</h6>
      </div>
    </footer>
  );
};

export default Footer;
