import React from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <h2>What do our club members think?</h2>

      <div className={styles.swiperWrapper}>
        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <img src="/img/Rectangle 124.png" alt="Kali Soy" />
            <div className={styles.reviewTitle}>
              <h3>Kali Soy</h3>
              <div className={styles.reviewStars}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <p>
            My husband and I had an incredibly cool anniverary thanks to you! By the way, I can
            advise you to add also boat tours, it would be great. Thank you, guys, you’re awesome!
          </p>
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <img src="/img/Rectangle 125 копія.png" alt="Karina" />
            <div className={styles.reviewTitle}>
              <h3>Karina</h3>
              <div className={styles.reviewStars}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <p>
            This club is great! I enrolled myself, my husband and 10-year-old son, who only learned
            to swim a little, but after 2 trips we all learned to dive and now we know what we’ll do
            together every summer. Thank you, UNDER, for this opportunity!
          </p>
        </div>
      </div>

      <a href="https://www.instagram.com/oleskein/" className={styles.readMoreLink}>
        Read more...
      </a>
    </section>
  );
}
