"use client";

import DetailsBtn from "../detailsBtn/DetailsBtn";
import styles from "./intro.module.css";

const Intro = () => {
  return (
    <section className="container">
      <div className={styles.intro}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            What is TEDx<span className={styles.span}>FUKashere?</span>
          </h2>
          <p className={styles.description}>
            TEDxFUKashere is an independently organized TED event that brings
            together visionaries, thinkers, and changemakers from our university
            and community to share their ideas worth spreading. Our mission is
            to spark deep conversation and connection through powerful talks and
            stories.
          </p>
          <DetailsBtn title="Our Story" href="/about" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
