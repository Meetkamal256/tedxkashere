import Image from "next/image";
import { previousEvents } from "@/app/data";
import styles from "./previous-event.module.css";




const page = () => {
  return (
    <section className="container">
      <div className={styles.previousEventPage}>
        <div className={styles.header}>
          <h1>
            <span>Previous</span> Events
          </h1>
          <p>Explore the legacy of TEDxKashere through our past editions.</p>
        </div>
        
        <div className={styles.eventGrid}>
          {previousEvents.map((event, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <Image
                  src={event.image}
                  alt={`TEDx ${event.year}`}
                  fill
                  className={styles.image}
                />
              </div>
              
              <h3>TEDxKashere {event.year}</h3>
              <p className={styles.theme}>
                <strong>Theme:</strong> {event.theme}
              </p>
              <p className={styles.summary}>{event.description}</p>
              <a href={event.highlightsUrl} className={styles.button}>
                Watch Event Recap
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
