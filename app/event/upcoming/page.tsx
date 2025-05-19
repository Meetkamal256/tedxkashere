import FeaturedSpeakers from "@/app/components/featuredSpeakers/FeaturedSpeakers";
import styles from "./upcoming-event.module.css";
import EventInfo from "@/app/components/eventInfo/EventInfo";

const page = () => {
  return (
    <section className="container">
      <div className={styles.upcomingEventPage}>
        <div className={styles.eventSection}>
          <h2 className={styles.heading}>Upcoming Event</h2>
          <p className={styles.date}>Saturday, June 23, 2025</p>
          <p className={styles.location}>
            Federal University Kashere Auditorium
          </p>
          <p className={styles.description}>
            Join us for a day of thought-provoking talks, inspiring
            performances, and meaningful conversations. Be part of the
            TEDxFUKashere experience.
          </p>
        </div>
        <div className={styles.speakersSection}>
          <div className={styles.agendaSection}>
            <h2>Event Agenda</h2>
            <ul className={styles.scheduleList}>
              <li>
                <strong>10:00 AM</strong> - Arrival & Registration
              </li>
              <li>
                <strong>11:00 AM</strong> - Opening Talk
              </li>
              <li>
                <strong>11:30 AM</strong> - Speaker 1: Innovation & Change
              </li>
              <li>
                <strong>12:30 PM</strong> - Speaker 2: Youth & Future
              </li>
              <li>
                <strong>1:30 PM</strong> - Break / Networking
              </li>
              <li>
                <strong>2:30 PM</strong> - Speaker 3: Social Impact
              </li>
              <li>
                <strong>3:30 PM</strong> - Closing Remarks
              </li>
            </ul>
          </div>

          <div className={styles.speakerGrid}></div>
        </div>
      </div>
    </section>
  );
};

export default page;
