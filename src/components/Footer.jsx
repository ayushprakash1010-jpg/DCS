import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: '16px' }}>
              <img src="/images/logo.webp" alt="Deepak Crane Service" loading="lazy" style={{ height: '60px', width: 'auto', borderRadius: '4px' }} />
            </div>
            <p>Your trusted partner for premium crane rental and heavy lifting solutions across India since 2006.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/fleet">Our Fleet</Link></li>
              <li><Link to="/clients">Our Clients</Link></li>
            </ul>
          </div>
          {/* Fleet */}
          <div>
            <h4>Our Fleet</h4>
            <ul className="footer-links">
              <li><Link to="/services">Telescopic Cranes</Link></li>
              <li><Link to="/services">Farana Cranes</Link></li>
              <li><Link to="/services">Boom Lifts</Link></li>
              <li><Link to="/services">Crawler Cranes</Link></li>
              <li><Link to="/services">Pick-N-Carry</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p><strong>Call Our Support</strong><br />+91 98194 13664<br />+91 77382 87315</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p><strong>Email</strong><br />deepakcrane@gmail.com</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p><strong>Head Office</strong><br />Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2006–2025 Deepak Crane Service. All Rights Reserved.</p>
          <p>Proprietor: Mr. Gharbharan Shivdas Yadav</p>
        </div>
      </div>
    </footer>
  )
}
