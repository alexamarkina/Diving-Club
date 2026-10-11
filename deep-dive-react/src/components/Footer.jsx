import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footer} id="footer">
      <div className={styles.footerContent}>
        <h3 className={styles.logo}>DEEP DIVE</h3>

        <div className={styles.footerMain}>
          <div className={`${styles.footerColumn}${styles.left}`}>
            <p>
              Oleksandra Markina,
              <br />
              Jacob Nielsen
              <br />
              00001
              <br />
              Kyiv, Ukraine
              <br />
              09.02.2024
            </p>
          </div>

          <div className={styles.footerInfo}>
            <p>
              Medical Statement <br />
              Safety <br />
              info@underwater.com | +380 777 57 86 <br />
              telegram, viber
            </p>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <p>© Маркіна Олександра Русланівна , 2025</p>
        </div>
      </div>
    </section>
  );
}
