"use client";

import styles from "./event-info.module.css";

const EventInfo = () => {
  return (
    <section className="container">
      <div className={styles.eventSection}>
        <h2 className={styles.heading}>Upcoming Event</h2>
        <p className={styles.date}>Saturday, June 23, 2025</p>
        <p className={styles.location}>Federal University Kashere Auditorium</p>
        <p className={styles.description}>
          Join us for a day of thought-provoking talks, inspiring performances,
          and meaningful conversations. Be part of the TEDxFUKashere experience.
        </p>
        <a href="/event/upcoming" className={styles.cta}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default EventInfo;
