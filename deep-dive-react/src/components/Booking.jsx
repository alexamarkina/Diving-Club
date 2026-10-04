export default function Booking() {
  return (
    <section className="booking" id="booking">
      <h2>Want to know more?</h2>
      <div className="booking-container">
        <div className="booking-form-block">
          <h3>Book a call!</h3>
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone number" required />
            <button type="submit" className="booking-submit-btn">
              <img src="/img/call me INFO block.png" alt="Call me" />
            </button>
          </form>
        </div>
        <div className="social-block">
          <h3>UNDER water</h3>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <img src="/img/instagram.png" alt="Instagram" />
              <span>@UNDERwater</span>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <img src="/img/WhatsUpp.png" alt="WhatsApp" />
              <span>@UNDERwater</span>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <img src="/img/telegram.png" alt="Telegram" />
              <span>@UNDERwater</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
