import React from 'react';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.avatarBlock}>
          <div className={styles.avatar}>👤</div>
          <button
            style={{
              background: 'transparent',
              color: '#4783a7',
              border: '1px solid #4783a7',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            Вийти
          </button>
        </div>

        <div className={styles.infoBlock}>
          <h3>Олександра</h3>
          <p>alexa@example.com</p>

          <h4
            style={{ marginTop: '30px', borderBottom: '1px solid #4783a7', paddingBottom: '10px' }}
          >
            Мої бронювання
          </h4>
          <p>У вас поки немає активних занурень.</p>
        </div>
      </div>
    </div>
  );
}
