export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <h2>Pricing</h2>
        <p className="pricing-subtitle">Seasonal abonement</p>
      </div>
      <div className="pricing-container">
        <div className="pricing-card small-card">
          <h3>Solo</h3>
          <ul>
            <li>One-on-one coaching with a pro trainer.</li>
            <li>Access to 2 unique dive locations.</li>
            <li>Perfect for rapid skill improvement.</li>
          </ul>
          <div className="price-btn-wrapper">
            <img src="/img/Solo.png" alt="$240" className="price-img" />
          </div>
        </div>
        <div className="pricing-card main-card">
          <h3>Group</h3>
          <p className="card-subtitle">what people choose</p>
          <div className="wave-divider">~~~</div>
          <ul>
            <li>Small group dives (8-10 people).</li>
            <li>Fun team atmosphere & support.</li>
            <li>3 diverse locations.</li>
            <li>Buddy system practice included.</li>
            <li>Nunc tristique sagittis curabitur tellus.</li>
          </ul>
          <div className="price-btn-wrapper">
            <img src="/img/Group.png" alt="$399" className="price-img" />
          </div>
        </div>
        <div className="pricing-card small-card">
          <h3>Cruise</h3>
          <ul>
            <li>Large-scale dive expedition (30-50 divers).</li>
            <li>Expanded team of top instructors.</li>
            <li>Access to 5+ exclusive dive sites.</li>
            <li>Accommodation and entertainment program.</li>
            <li>Networking and parties on board.</li>
            <li className="italic-text">Includes transfer and accommodation</li>
          </ul>
          <div className="price-btn-wrapper">
            <img src="/img/Cruise.png" alt="$590" className="price-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
