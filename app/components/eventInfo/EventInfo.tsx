"use client";
import DetailsBtn from "../detailsBtn/DetailsBtn";
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
          and meaningful conversations. Be part of the TEDx FUKashere experience.
        </p>
        <DetailsBtn title="View Upcoming Events" href="/event/upcoming" />
      </div>
    </section>
  );
};

export default EventInfo;
