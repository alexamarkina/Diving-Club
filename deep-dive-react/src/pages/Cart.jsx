import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const savedBookings = JSON.parse(localStorage.getItem('userBookings')) || [];

    const grouped = savedBookings.reduce((acc, current) => {
      const existing = acc.find((item) => item.title === current.title);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...current, quantity: 1 });
      }
      return acc;
    }, []);

    setCartItems(grouped);
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('bookingsUpdated', loadCart);
    return () => window.removeEventListener('bookingsUpdated', loadCart);
  }, []);

  const updateLocalStorage = (newItems) => {
    const flatList = newItems.flatMap((item) =>
      Array.from({ length: item.quantity }, () => ({
        id: item.id || Date.now() + Math.random(),
        title: item.title,
        price: item.price,
        date: item.date,
      }))
    );
    localStorage.setItem('userBookings', JSON.stringify(flatList));
    setCartItems(newItems);
    window.dispatchEvent(new Event('bookingsUpdated'));
  };

  const updateQuantity = (title, delta) => {
    const updated = cartItems.map((item) => {
      if (item.title === title) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    updateLocalStorage(updated);
  };

  const removeItem = (title) => {
    const updated = cartItems.filter((item) => item.title !== title);
    updateLocalStorage(updated);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  };

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartContainer}>
        <h2 className={styles.title}>You cart</h2>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCartBox}>
            <p className={styles.emptyText}>
              Your cart is currently empty. Choose a plan to dive in!
            </p>
            <Link to="/#pricing">
              <button className={styles.btn}>Back to pricing</button>
            </Link>
          </div>
        ) : (
          <>
            <ul className={styles.itemsList}>
              {cartItems.map((item, index) => (
                <li key={index} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3>{item.title}</h3>
                    <span>Base price: ${item.price}</span>
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityControl}>
                      <button onClick={() => updateQuantity(item.title, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.title, 1)}>+</button>
                    </div>

                    <div className={styles.itemPrice}>${Number(item.price) * item.quantity}</div>

                    <button
                      onClick={() => removeItem(item.title)}
                      className={styles.removeBtn}
                      title="Remove"
                    >
                      ✖
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.totalBox}>
              <span>Total sum:</span>
              <strong>${calculateTotal()}</strong>
            </div>

            <button className={styles.checkoutBtn} onClick={() => alert('Thanks for purchasing')}>
              Complete Purchase
            </button>
          </>
        )}
      </div>
    </section>
  );
}
