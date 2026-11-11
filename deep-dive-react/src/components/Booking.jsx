import React, { useState } from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const validatedValue = e.target.value.replace(/[^0-9+]/g, '');
    setPhone(validatedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        alert('Your request has been successfully submitted! A manager will call you shortly.');
        setName('');
        setPhone('');
      } else {
        alert('Sending error. Check the backend terminal.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server.');
    }
  };

  return (
    <section className={styles.booking} id="booking">
      <h2>Book a call</h2>
      <div className={styles.bookingContainer}>
        <div className={styles.bookingFormBlock}>
          <h3>Want to dive?</h3>

          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone (e.g. +380...)"
              value={phone}
              onChange={handlePhoneChange}
              minLength={10}
              maxLength={13}
              required
            />

            <button type="submit" className={styles.bookingSubmitBtn}>
              <img src="/img/cta-btn.png" alt="Submit button" />
            </button>
          </form>
        </div>

        <div className={styles.socialBlock}>
          <h3>Contacts</h3>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <img src="/img/instagram.png" alt="Instagram" />
              Instagram
            </a>
            <a href="#" className={styles.socialLink}>
              <img src="/img/WhatsUpp.png" alt="Facebook" />
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
