import Link from "next/link";
import Image from "next/image";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Left Section */}
          <div className="footer-left">
            <div className="brand">
              <img
                src="/darklogo.png"
                alt="Denner logo"
                className="brand-icon"
              />
            </div>

            <h2 className="tagline">Simplifying renting for everyone!</h2>

            <p className="description hideonmobile">
              Gera's Greens Ville, Sno 64 Paradise Kharadi, Vimannagar, Pune, Pune-411014, Maharashtra
            </p>

            <p className="sub-description hideonmobile">
              contactus.denner@gmail.com | +91 91560 05618
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-right">

            <span className="footer-linkholder">
            <div className="footer-links">
              <h2>Index</h2>
              
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/manifesto" className="footer-link">Manifesto</Link>
              <Link href="/letter-to-owners" className="footer-link">Letter to owners</Link>
            </div>

            <div className="footer-links">
              <h2>Services</h2>
      
              <Link href="/owners" className="footer-link">For owners</Link>
              <Link href="/list-your-flat" className="footer-link">List your flat</Link>
              <Link href="/" className="footer-link">Find flats on rent</Link>
              <Link href="/refer-and-earn" className="footer-link">Refer and earn</Link>
            </div>

            <div className="footer-links">
              <h2>Legal</h2>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-link">Terms & Conditions</Link>
              <Link href="/help" className="footer-link">Help</Link>
              <Link href="/refund-policy" className="footer-link">Refund Policy</Link>
            </div>

            </span>

            <div className="social-section">
              <p className="find-us">Find us on</p>

              <div className="social-icons">
                <a href="https://www.instagram.com/denner.in/" target="_blank" rel="noopener noreferrer">
                  <Image src="/insta.png" alt="Instagram" width={40} height={40} />
                </a>

                <a href="https://x.com/Dennerapp" target="_blank" rel="noopener noreferrer">
                  <Image src="/twitter.png" alt="Twitter" width={40} height={40} />
                </a>

                <a href="https://www.linkedin.com/company/denner-india/" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100095392746437" target="_blank" rel="noopener noreferrer">
                  <Image src="/facebook.png" alt="Facebook" width={40} height={40} />
                </a>
              </div>
            </div>

            <p className="description mobile">
              Gera's Greens Ville, Sno 64 Paradise Kharadi, Vimannagar, Pune, Pune-411014, Maharashtra
            </p>

            <p className="sub-description mobile">
              contactus.denner@gmail.com | +91 91560 05618
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Made with <span className="heart">❤️</span> by
          </p>

          <p className="company">© Denner Ventures Private Limited</p>

          <img
            id="bottomimage"
            src="/bottom.png"
            alt="Decorative footer graphic"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
