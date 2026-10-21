import React from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  return (
    <section className={styles.booking} id="booking">
      <h2>Book a call</h2>
      <div className={styles.bookingContainer}>
        {/* Блок з формою */}
        <div className={styles.bookingFormBlock}>
          <h3>Want to dive?</h3>
          {/* onSubmit запобігає перезавантаженню сторінки при кліку на кнопку */}
          <form className={styles.bookingForm} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />

            <button type="submit" className={styles.bookingSubmitBtn}>
              <img src="/img/cta-btn.png" alt="Submit button" />
            </button>
          </form>
        </div>

        {/* Блок із соцмережами */}
        <div className={styles.socialBlock}>
          <h3>Contacts</h3>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              {/* Перевір, чи правильно названі картинки іконок у твоїй папці img */}
              <img src="/img/instagram.png" alt="Instagram" />
              Instagram
            </a>
            <a href="#" className={styles.socialLink}>
              <img src="/img/WhatsUpp.png" alt="WhatsUpp" />
              Facebook
            </a>
            <a href="#" className={styles.socialLink}>
              <img src="/img/telegram.png" alt="Telegram" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
