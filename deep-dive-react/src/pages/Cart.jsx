import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ваш кошик</h2>
      <div className={styles.cartBox}>
        <p className={styles.emptyText}>Кошик наразі порожній. Виберіть тариф для занурення!</p>
        <Link to="/">
          <button className={styles.btn}>Повернутися до тарифів</button>
        </Link>
      </div>
    </div>
  );
}
