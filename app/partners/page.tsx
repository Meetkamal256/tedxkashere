"use client";

import Sponsors from "../components/sponsors/Sponsors";
import styles from "./page.module.css";

const PartnersPage = () => {
  return (
    <section className="container">
      <div className={styles.intro}>
        <h1>Our Sponsors & Partners</h1>
        <p>
          We are proud to collaborate with organizations that support
          TEDx FUKashere’s mission.
        </p>
      </div>
      <Sponsors />
   
      
      <div className={styles.cta}>
        <h2>Become a Sponsor or Partner</h2>
        <p>
          We invite like-minded organizations to collaborate with TEDx FUKashere.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default PartnersPage;
