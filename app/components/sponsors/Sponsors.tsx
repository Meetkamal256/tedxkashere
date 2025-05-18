"use client";
import styles from "./sponsors.module.css";
import { sponsors } from "../../data";

const Sponsors = () => {
  return (
    <section className="container">
      <div className={styles.sponsorsSection}>
        <div className={styles.scrollerWrapper}>
          <div className={styles.logoScroller}>
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
