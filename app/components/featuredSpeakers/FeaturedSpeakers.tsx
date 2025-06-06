"use client";
import { featuredSpeakers } from "../../data";
import DetailsBtn from "../detailsBtn/DetailsBtn";
import SpeakerCard from "../speakerCard/SpeakerCard";
import styles from "./featured-speakers.module.css";

const FeaturedSpeakers = () => {
  return (
    <section className="container">
      <div className={styles.speakersSection}>
        <h2 className={styles.heading}>
          Featured <span className={styles.span}>Speakers</span>
        </h2>
        <div className={styles.grid}>
          {featuredSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              topic={speaker.topic}
              imageSrc="/blankImage.png"
            />
          ))}
        </div>
        <DetailsBtn href="/speakers">Meet the speakers</DetailsBtn>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
