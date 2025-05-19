"use client";
import { useState } from "react";
import SpeakerCard from "../components/speakerCard/SpeakerCard";
import { allSpeakers, previousSpeakers } from "../data";
import styles from "./speaker.module.css";
import Image from "next/image";

const page = () => {
  const [activeTab, setActiveTab] = useState("all");

  const speakers = activeTab === "all" ? allSpeakers : previousSpeakers;
  return (
    <section className="container">
      <div className={styles.speakersSection}>
        <div className={styles.tabButtons}>
          <button
            className={activeTab === "all" ? styles.activeTab : ""}
            onClick={() => setActiveTab("all")}
          >
            All Speakers
          </button>
          <button
            className={activeTab === "previous" ? styles.activeTab : ""}
            onClick={() => setActiveTab("previous")}
          >
            Previous Speakers
          </button>
        </div>

        <h2 className={styles.heading}>
          {activeTab === "all" ? "All Speakers" : "Previous Speakers"}
        </h2>

        <div className={styles.grid}>
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              topic={speaker.topic}
              imageSrc="/blankImage.png"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
