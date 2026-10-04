import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <section className="navbar">
        <a href="#hero">
          <h3 className="logo">DEEP DIVE</h3>
        </a>
        <div className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar_elements desktop-only">
          <a href="#about">About</a>
          <a href="#offer">Offer</a>
          <a href="#coach">Coaches</a>
          <a href="#reviews">Reviews</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">Q&A</a>
          <a href="#footer">Contacts</a>
        </div>
        <a href="#booking" className="desktop-only">
          <img
            src="/img/cta-btn.png"
            alt="Call me button"
            className="header-btn"
          />
        </a>
      </section>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>
          ×
        </div>
        <div className="mobile-nav-links">
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#offer" onClick={toggleMenu}>
            Offer
          </a>
          <a href="#coach" onClick={toggleMenu}>
            Coaches
          </a>
          <a href="#reviews" onClick={toggleMenu}>
            Reviews
          </a>
          <a href="#pricing" onClick={toggleMenu}>
            Pricing
          </a>
          <a href="#faq" onClick={toggleMenu}>
            Q&A
          </a>
          <a href="#footer" onClick={toggleMenu}>
            Contacts
          </a>
        </div>
        <a href="#booking" className="mobile-menu-btn" onClick={toggleMenu}>
          <img src="/img/cta-btn.png" alt="Call me button" />
        </a>
      </div>
    </>
  );
}
