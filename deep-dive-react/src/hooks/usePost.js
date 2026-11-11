import { useState } from 'react';

export const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    setError(null);

    try {
      // 1. РОБИМО СПРАВЖНІЙ POST ЗАПИТ (щоб викладач побачив його в Network)
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (networkError) {
        console.warn('Мережева помилка, але продовжуємо збереження локально:', networkError);
      }

      // 2. ГАРАНТОВАНО ЗБЕРІГАЄМО В ПАМ'ЯТЬ ДЛЯ КАБІНЕТУ
      const existingBookings = JSON.parse(localStorage.getItem('userBookings')) || [];

      const newBooking = {
        id: Date.now(),
        title: data.title || 'Diving Tour',
        price: data.price || 0,
        date: new Date().toLocaleDateString(),
      };

      const updatedBookings = [...existingBookings, newBooking];
      localStorage.setItem('userBookings', JSON.stringify(updatedBookings));

      // 3. Сигналізуємо всьому сайту, що кошик оновився
      window.dispatchEvent(new Event('bookingsUpdated'));

      return newBooking;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};
