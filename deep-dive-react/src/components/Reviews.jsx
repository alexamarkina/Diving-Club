import { useRef } from 'react';

export default function Reviews() {
  const sliderRef = useRef(null);

  return (
    <section className="reviews" id="reviews">
      <h2>What do our club members think?</h2>
      <div className="swiper-wrapper" ref={sliderRef}>
        <div className="review-card">
          <div className="review-header">
            <img src="/img/Rectangle 124.png" alt="Kali Soy" />
            <div className="review-title">
              <h3>Kali Soy</h3>
              <div className="review-stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <p>
            My husband and I had an incredibly cool anniverary thanks to you! By
            the way, I can advise you to add also boat tours, it would be great.
            Thank you, guys, you’re awesome!
          </p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <img src="/img/Rectangle 125 копія.png" alt="Karina" />
            <div className="review-title">
              <h3>Karina</h3>
              <div className="review-stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
          <p>
            This club is great! I enrolled myself, my husband and 10-year-old
            son, who only learned to swim a little, but after 2 trips we all
            learned to dive and now we know what we’ll do together every summer.
          </p>
        </div>
      </div>
      <a
        href="https://www.instagram.com/oleskein/"
        className="read-more-link"
        target="_blank"
        rel="noreferrer"
      >
        Read more...
      </a>
    </section>
  );
}
