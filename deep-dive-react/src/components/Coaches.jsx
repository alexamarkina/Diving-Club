import React from 'react';
import styles from './Coaches.module.css';

export default function Coaches() {
  return (
    <section className={styles.coaches} id="coach">
      <h2>Coaches</h2>

      <p>only qualified trainers</p>

      <div className={styles.swiperWrapper}>
        <div className={styles.coachCard}>
          <img src="img/coach1.jpeg" alt="Coach 1" />

          <h3>Micle</h3>

          <p>
            Teaching experience: 7 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2022
          </p>
        </div>

        <div className={styles.coachCard}>
          <img src="img/coach2.png" alt="Coach 3" />

          <h3>Andi</h3>

          <p>
            Teaching experience: 5 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2021
          </p>
        </div>

        <div className={styles.coachCard}>
          <img src="img/coach3.jpeg" alt="Coach 1" />

          <h3>Vit</h3>

          <p>
            Teaching experience: 12 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2022
          </p>
        </div>

        <div className={styles.coachCard}>
          <img src="img/coach3.png" alt="Coach 3" />

          <h3>Miranda Johnson</h3>

          <p>
            Teaching experience: 10 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2021
          </p>
        </div>

        <div className={styles.coachCard}>
          <img src="img/coach1.png" alt="Coach 1" />

          <h3>James Gordon</h3>

          <p>
            Teaching experience: 8 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2022
          </p>
        </div>

        <div className={styles.coachCard}>
          <img src="img/coach3.png" alt="Coach 3" />

          <h3>Miranda Johnson</h3>

          <p>
            Teaching experience: 10 years <br />
            Awards: European Champion in Sport Diving, Best Diving Coach 2021
          </p>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <div className={styles.previousBtn}>
          <img src="img/left-arrow-btn.png" alt="previous cards" />
        </div>

        <div className={styles.nextBtn}>
          <img src="img/right-arrow-btn.png" alt="next cards" />
        </div>
      </div>
    </section>
  );
}
