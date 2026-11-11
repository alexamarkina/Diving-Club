import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { usePost } from '../hooks/usePost';
import styles from './Pricing.module.css';

export default function Pricing() {
  const {
    data: tickets,
    loading,
    error,
  } = useFetch('https://6ae64b83877d34ccafc2c349.mockapi.io/tickets');
  const { postData, loading: isBooking } = usePost(
    'https://6ae64b83877d34ccafc2c349.mockapi.io/bookings'
  );

  const [selectedTour, setSelectedTour] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookTour = async (tour) => {
    try {
      await postData({ title: tour.title, price: tour.price });
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedTour(null);
      }, 2000);
    } catch (err) {
      alert('Помилка бронювання');
    }
  };

  if (loading)
    return (
      <section id="pricing" className={styles.pricingSection}>
        <h2>Loading tickets...</h2>
      </section>
    );
  if (error)
    return (
      <section id="pricing" className={styles.pricingSection}>
        <h2>Error: {error}</h2>
      </section>
    );

  return (
    <section id="pricing" className={styles.pricingSection}>
      <h2 className={styles.sectionTitle}>Pricing | Season tickets</h2>

      {/* Контейнер для 3 карток */}
      <div className={styles.cardsWrapper}>
        {tickets &&
          tickets.map((ticket) => (
            <div key={ticket.id} className={styles.card}>
              <h3>{ticket.title}</h3>
              <ul className={styles.features}>
                <li>
                  {ticket.description1 ||
                    '• One-on-one coaching with a pro trainer. Perfect for rapid skill improvement.'}
                </li>
                <li>{ticket.description2 || '• Duration: 2 hours'}</li>
                <li>{ticket.description3 || '• Access to unique dive locations'}</li>
              </ul>
              <div className={styles.price}>${ticket.price}</div>

              <button className={styles.detailsBtn} onClick={() => setSelectedTour(ticket)}>
                Details & Book
              </button>
            </div>
          ))}
      </div>

      {selectedTour && (
        <div className={styles.modalOverlay} onClick={() => !isBooking && setSelectedTour(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedTour(null)}>
              ✖
            </button>

            <div className={styles.modalBody}>
              <div className={styles.modalLeft}>
                <h2>{selectedTour.title}</h2>
                <p className={styles.modalSubtitle}>what people choose</p>

                <svg className={styles.wavyLine} width="60" height="10" viewBox="0 0 60 10">
                  <path
                    d="M 0 5 Q 5 0 10 5 T 20 5 T 30 5 T 40 5 T 50 5"
                    fill="transparent"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                </svg>

                <p className={styles.modalDesc}>
                  The perfect balance for those seeking new experiences. This pass covers dives in
                  three different countries, each offering a unique underwater world. Discover new
                  depths with zero organizational hassle.
                </p>

                <div className={styles.noteBox}>
                  Flights and accommodation are not included. The detailed departure schedule is
                  finalized once the group is fully booked.
                </div>

                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.bookBtn}
                    onClick={() => handleBookTour(selectedTour)}
                    disabled={isBooking}
                  >
                    {isBooking ? 'Booking...' : bookingSuccess ? 'Booked! ✓' : 'Want to dive!'}
                  </button>
                  <div className={styles.bubbleSmall}></div>
                  <div className={styles.bubbleMedium}></div>
                </div>
              </div>

              <div className={styles.modalRight}>
                {/* Змінили структуру на звичайний список замість розкиданої мапи */}
                <div className={styles.featuresList}>
                  <div className={styles.featureBubble}>
                    📸 Basic underwater photography to capture your best moments
                  </div>
                  <div className={styles.featureBubble}>
                    🤿 Basic Gear Included. Tank, weights, and wetsuit rentals
                  </div>
                  <div className={styles.featureBubble}>
                    🌍 3 Countries in 1 Season (itineraries updated seasonally)
                  </div>
                  <div className={styles.featureBubble}>
                    🤓 Professional instructor support on every dive
                  </div>
                </div>

                <div className={styles.priceTag}>
                  ${selectedTour.price}
                  <span> / person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
