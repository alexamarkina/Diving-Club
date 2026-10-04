export default function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-subtitle">
        Explore the deep world with the most comfort diving club!
      </p>
      <h1>DEEP DIVE</h1>
      <div className="hero-buttons-wrapper">
        <a href="#booking">
          <img
            src="/img/main-cta-btn.png"
            alt="Want to Dive button"
            className="hero-btn"
          />
        </a>
        <a href="#booking">
          <img
            src="/img/2-cta-btn.png"
            alt="Call me button"
            className="hero-btn"
          />
        </a>
      </div>
    </section>
  );
}
