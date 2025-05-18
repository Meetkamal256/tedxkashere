"use client";

import Link from "next/link";
import styles from "./featured-speakers.module.css";
import Image from "next/image";
import { featuredSpeakers } from "../../data";
import DetailsBtn from "../detailsBtn/DetailsBtn";

const FeaturedSpeakers = () => {
  return (
    <section className="container">
      <div className={styles.speakersSection}>
        <h2 className={styles.heading}>
          Featured <span className={styles.span}>Speakers</span>
        </h2>
        <div className={styles.grid}>
          {featuredSpeakers.map((speaker) => (
            <div className={styles.card} key={speaker.id}>
              <div className={styles.imageContainer}>
                <Image
                  src="/blankImage.png"
                  alt={speaker.name}
                  fill
                  className={styles.image}
                />
              </div>

              <h3 className={styles.name}>{speaker.name}</h3>
              <p className={styles.topic}>{speaker.topic}</p>
            </div>
          ))}
        </div>
        <DetailsBtn title="Meet the speakers" href="/speakers" />
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
