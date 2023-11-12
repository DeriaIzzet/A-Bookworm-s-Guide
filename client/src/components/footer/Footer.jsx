import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footerr">
      <div className="footer-container">
        <div className="footer-logo">
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}