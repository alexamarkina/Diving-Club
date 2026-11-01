import React from 'react';
import styles from './Pricing.module.css';
import { useFetch } from '../hooks/useFetch';

export default function Pricing() {
  const {
    data: tickets,
    loading,
    error,
  } = useFetch('https://6ae64b83877d34ccafc2c349.mockapi.io/tickets');

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.pricingHeader}>
        <h2>Pricing</h2>
        <p className={styles.pricingSubtitle}>Seasonal abonement</p>
      </div>

      {loading && <p style={{ textAlign: 'center', color: '#fff' }}>Завантаження тарифів...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>Помилка: {error}</p>}

      {!loading && !error && tickets && (
        <div className={styles.pricingContainer}>
          {tickets.map((ticket, index) => {
            const isMainCard = index === 1;
            const cardClass = isMainCard ? styles.mainCard : styles.smallCard;

            return (
              <div key={ticket.id} className={`${styles.pricingCard} ${cardClass}`}>
                <h3>{ticket.title}</h3>
                {isMainCard && <p className={styles.cardSubtitle}>what people choose</p>}
                {isMainCard && <div className={styles.waveDivider}>~~~</div>}
                <ul>
                  <li>{ticket.description}</li>
                  <li>Duration: {ticket.duration}</li>
                  <li>Access to unique dive locations</li>
                </ul>
                <div className={styles.priceBtnWrapper}>
                  <div
                    style={{
                      color: '#fff',
                      fontSize: '36px',
                      fontWeight: 'bold',
                      margin: '20px 0',
                    }}
                  >
                    ${ticket.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
