import React, { useState } from 'react';
import styles from './Auth.module.css';
import { useAuth } from '../hooks/useAuth';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); 
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>Welcome Diver</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
