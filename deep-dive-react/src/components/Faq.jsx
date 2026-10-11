import React from 'react';
import styles from './Faq.module.css';

export default function Faq() {
  return (
    <section className={styles.faq} id="faq">
      <h2>Want to know more?</h2>
      <p className={styles.subtitle}>
        Let’s talk about some important things if you’re new to diving
      </p>

      <div className={styles.faqContainer}>
        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>01</span>
            <span className={styles.faqTitle}>Who can join the diving club?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              Everyone! We have coaches who train children as well as adults and even older ones! No
              prior experience needed.
            </p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>02</span>
            <span className={styles.faqTitle}>Can I join the club from another country?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              Yes, absolutely! We welcome members from all over the world and can help with
              arrangements and online consultations.
            </p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>03</span>
            <span className={styles.faqTitle}>Should I buy my own diving gear?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              It's not necessary to start. We offer high-quality gear rental for all our tours and
              courses. You can buy your own later.
            </p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>04</span>
            <span className={styles.faqTitle}>What are the health requirements for diving?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              Generally, you need to be in good physical health. A medical questionnaire will be
              provided before the first dive.
            </p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>05</span>
            <span className={styles.faqTitle}>What to do so that the ears do not hurt?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              Our instructors will teach you equalization techniques (popping your ears) to prevent
              pain and injury during descent.
            </p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>06</span>
            <span className={styles.faqTitle}>I wear glasses. Can I go diving?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>Yes! You can use contact lenses or rent a special mask with prescription lenses.</p>
          </div>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqQuestion}>
            <span className={styles.faqNumber}>07</span>
            <span className={styles.faqTitle}>What are the prices for tours?</span>
            <span className={styles.faqIcon}></span>
          </summary>
          <div className={styles.faqAnswer}>
            <p>
              Prices vary depending on the location and duration. Check our 'Pricing' section or
              contact us for a custom quote.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
