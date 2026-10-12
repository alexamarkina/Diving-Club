import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <section className={styles.navbar}>
        <Link to="/">
          <h3 className={styles.logo}>DEEP DIVE</h3>
        </Link>

        <div className={`${styles.burgerMenu} ${styles.desktopOnly}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.navbarElements} ${styles.desktopOnly}`}>
          <a href="/#about">About</a>
          <a href="/#offer">Offer</a>
          <a href="/#coach">Coaches</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">Q&A</a>
          <a href="/#footer">Contacts</a>
        </div>

        <div className={`${styles.navActions} ${styles.desktopOnly}`}>
          <Link to="/login">
            <img src="/img/Cabinet.png" alt="Profile" />
          </Link>
          <Link to="/cart">
            <img src="/img/Cart.png" alt="Cart" />
          </Link>
          <a href="#booking">
            <img src="/img/cta-btn.png" alt="Want to dive button" className={styles.headerBtn} />
          </a>
        </div>
      </section>

      {/* Мобільне меню: об'єднання класів через шаблонний рядок */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.closeBtn} onClick={toggleMenu}>
          ×
        </div>
        <div className={styles.mobileNavLinks}>
          <a href="/#about" onClick={toggleMenu}>
            About
          </a>
          <a href="/#offer" onClick={toggleMenu}>
            Offer
          </a>
          <a href="/#coach" onClick={toggleMenu}>
            Coaches
          </a>
          <a href="/#reviews" onClick={toggleMenu}>
            Reviews
          </a>
          <a href="/#pricing" onClick={toggleMenu}>
            Pricing
          </a>
          <a href="/#faq" onClick={toggleMenu}>
            Q&A
          </a>
          <a href="/#footer" onClick={toggleMenu}>
            Contacts
          </a>

          <hr
            style={{ width: '100%', border: '1px solid rgba(255,255,255,0.1)', margin: '15px 0' }}
          />

          <div
            style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '20px' }}
          >
            <Link to="/login" onClick={toggleMenu}>
              <img src="/img/Cabinet.png" alt="Profile" style={{ width: '32px', height: '32px' }} />
            </Link>
            <Link to="/cart" onClick={toggleMenu}>
              <img src="/img/Cart.png" alt="Cart" style={{ width: '32px', height: '32px' }} />
            </Link>
          </div>
        </div>
        <a href="#booking" className={styles.mobileMenuBtn} onClick={toggleMenu}>
          <img src="/img/cta-btn.png" alt="Want to dive button" />
        </a>
      </div>
    </>
  );
}
