import React from 'react';
import styles from './Profile.module.css';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { logout } = useAuth();
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
            onClick={logout}
            className={styles.назваТвогоКласу}
          >
            Вийти
          </button>
        </div>

        <div className={styles.infoBlock}>
          <h3>Test</h3>
          <p>test@gmail.com</p>

          <h4
            style={{ marginTop: '30px', borderBottom: '1px solid #4783a7', paddingBottom: '10px' }}
          >
            My Bookings
          </h4>
          <p>You do not have any active dives yet.</p>
        </div>
      </div>
    </div>
  );
}
