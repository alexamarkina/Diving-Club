import { useRef } from 'react';

export default function Coaches() {
  const sliderRef = useRef(null);

  const handleSliderScroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div');
      const cardWidth = card ? card.offsetWidth : 350;
      const gap = 20;
      const scrollAmount =
        direction === 'right' ? cardWidth + gap : -(cardWidth + gap);
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="coaches" id="coach">
      <h2>Coaches</h2>
      <p>only qualified trainers</p>
      <div className="swiper-wrapper" ref={sliderRef}>
        <div className="coach_card">
          <img src="/img/coach1.jpeg" alt="Coach 1" />
          <h3>Micle</h3>
          <p>
            Teaching experience: 7 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2022
          </p>
        </div>
        <div className="coach_card">
          <img src="/img/coach2.png" alt="Coach 3" />
          <h3>Andi</h3>
          <p>
            Teaching experience: 5 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2021
          </p>
        </div>
        <div className="coach_card">
          <img src="/img/coach3.jpeg" alt="Coach 1" />
          <h3>Vit</h3>
          <p>
            Teaching experience: 12 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2022
          </p>
        </div>
        <div className="coach_card">
          <img src="/img/coach3.png" alt="Coach 3" />
          <h3>Miranda Johnson</h3>
          <p>
            Teaching experience: 10 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2021
          </p>
        </div>
        <div className="coach_card">
          <img src="/img/coach1.png" alt="Coach 1" />
          <h3>James Gordon</h3>
          <p>
            Teaching experience: 8 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2022
          </p>
        </div>
        <div className="coach_card">
          <img src="/img/coach3.png" alt="Coach 3" />
          <h3>Miranda Johnson</h3>
          <p>
            Teaching experience: 10 years <br /> Awards: European Champion in
            Sport Diving, Best Diving Coach 2021
          </p>
        </div>
      </div>
      <div className="navigation-buttons">
        <div
          className="previous-btn"
          onClick={() => handleSliderScroll('left')}
        >
          <img src="/img/left-arrow-btn.png" alt="previous cards" />
        </div>
        <div className="next-btn" onClick={() => handleSliderScroll('right')}>
          <img src="/img/right-arrow-btn.png" alt="next cards" />
        </div>
      </div>
    </section>
  );
}
