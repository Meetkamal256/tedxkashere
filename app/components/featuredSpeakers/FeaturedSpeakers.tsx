"use client";

import Link from "next/link";
import styles from "./featured-speakers.module.css";
import Image from "next/image";
import { featuredSpeakers } from "../../data";

const FeaturedSpeakers = () => {
  return (
    <section className="container">
      <div className={styles.speakersSection}>
        <h2 className={styles.heading}>Featured Speakers</h2>
        <div className={styles.grid}>
          {featuredSpeakers.map((speaker) => (
            <div className={styles.card} key={speaker.id}>
              <Image
                src="/blankImage.png"
                alt="speaker.name"
                width={300}
                height={300}
                className={styles.image}
              />
              <h3 className={styles.name}>{speaker.name}</h3>
              <p className={styles.topic}>{speaker.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
