import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <h1>DEEP DIVE</h1>

      <p className={styles.subtitle}>Відкрий для себе красу підводного світу разом з нами</p>

      <div className={styles.buttonsWrapper}>
        {}
        <a href="#booking">
          <img src="/img/cta-btn.png" alt="Book a dive" className={styles.btn} />
        </a>

        {}
        <a href="#about">
          <img src="/img/main-cta-btn.png" alt="Learn more" className={styles.btn} />
        </a>
      </div>
    </section>
  );
}
