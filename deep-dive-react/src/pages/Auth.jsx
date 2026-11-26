import React, { useState } from 'react';
import styles from './Auth.module.css';
import { useAuth } from '../hooks/useAuth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const { authenticate, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password, isSignUp);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Diver'}</h2>

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

          {error && (
            <p style={{ color: '#ff6b6b', fontSize: '14px', marginBottom: '10px' }}>{error}</p>
          )}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading
              ? isSignUp
                ? 'Signing up...'
                : 'Logging in...'
              : isSignUp
                ? 'Sign up'
                : 'Log in'}
          </button>
        </form>

        <p style={{ marginTop: '16px', fontSize: '14px', color: '#fff', textAlign: 'center' }}>
          {isSignUp ? 'Already have an account? ' : 'New to Deep Dive? '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: '#4fc3f7',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '14px',
              padding: 0,
            }}
          >
            {isSignUp ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
}
