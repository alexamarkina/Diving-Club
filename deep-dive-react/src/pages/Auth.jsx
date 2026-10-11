import React from 'react';
/* Імпортуємо стилі як об'єкт styles. Це і є "модульний підхід" */
import styles from './Auth.module.css';

export default function Auth() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>Welcome Diver</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
