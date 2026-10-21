import React from 'react';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.pricingHeader}>
        <h2>Pricing</h2>
        <p className={styles.pricingSubtitle}>Seasonal abonement</p>
      </div>

      <div className={styles.pricingContainer}>
        <div className={`${styles.pricingCard}${styles.smallCard}`}>
          <h3>Solo</h3>
          <ul>
            <li>One-on-one coaching with a pro trainer.</li>
            <li>Access to 2 unique dive locations.</li>
            <li>Perfect for rapid skill improvement.</li>
          </ul>
          <div className={styles.priceBtnWrapper}>
            <img src="img/Solo.png" alt="$240" className={styles.priceImg} />
          </div>
        </div>

        <div className={`${styles.pricingCard}${styles.mainCard}`}>
          <h3>Group</h3>
          <p className={styles.cardSubtitle}>what people choose</p>
          <div className={styles.waveDivider}>~~~</div>
          <ul>
            <li>Small group dives (8-10 people).</li>
            <li>Fun team atmosphere & support.</li>
            <li>3 diverse locations.</li>
            <li>Buddy system practice included.</li>
            <li>Nunc tristique sagittis curabitur tellus.</li>
          </ul>

          <div className={styles.priceBtnWrapper}>
            <img src="img/Group.png" alt="$399" className={styles.priceImg} />
          </div>
        </div>

        <div className={`${styles.pricingCard}${styles.smallCard}`}>
          <h3>Cruise</h3>
          <ul>
            <li>Large-scale dive expedition (30-50 divers).</li>
            <li>Expanded team of top instructors.</li>
            <li>Access to 5+ exclusive dive sites.</li>
            <li>Accommodation and entertainment program.</li>
            <li>Networking and parties on board.</li>
            <li className={styles.italicText}> + Includes transfer and accommodation</li>
          </ul>

          <div className={styles.priceBtnWrapper}>
            <img src="img/Cruise.png" alt="$590" className={styles.priceImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
