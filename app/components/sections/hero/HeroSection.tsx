import Link from "next/link";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            TEDx<span>FUKashere </span>2025
          </h1>
          <p className={styles.subtitle}>
            Ideas Worth Spreading — Join us at Federal University Kashere for a
            transformative experience.
          </p>
          <p className={styles.details}>
            📅 September 20, 2025 &nbsp; | &nbsp; 📍 FUK Main Auditorium
          </p>
          <Link
            href="https://eventbrite.com"
            target="_blank"
            className={styles.ctaButton}
          >
            Get Free Ticket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
