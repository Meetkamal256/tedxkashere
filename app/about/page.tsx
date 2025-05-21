import styles from "./about.module.css";

const page = () => {
  return (
    <section>
      <div className={styles.aboutPage}>
        <div className={styles.aboutHero}>
          <h1>
            About <span>Tedx</span> FUKashere
          </h1>
          <p>Ideas worth spreading, locally organized in Kashere.</p>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.tedxContainer}>
            <h2>
              About <span>Tedx</span> FUKashere
            </h2>
            <p className={styles.paragraph}>
              TEDx FUKashere is an independently organized TED event to be held
              in Gombe, University of Karshere. It is one of its kind that will
              bring together some of the brightest thinkers and doers from
              around Nigeria and the rest of the world to gather, connect and
              establish collaboration to develop a blueprint on how to make
              great ideas have big impacts in areas of governance, business,
              education, health, economy entrepreneurship and innovation among
              others. TEDx FUKashere would mark out the pathway to co-create and
              generate ideas. Ambition alone is not enough to bring about the
              kind of impact we want to see in our society. Together, we must
              convert ambition into practical ideas that would generate the
              right positive impacts in our society.
            </p>
            <p className={styles.paragraph}>
              Just like other TEDx Talks, TEDx FUKashere looks to inspire the
              community through the power of IDEAS WORTH SPREADING. Our event is
              much more than just a gathering; it is a catalyst for intellectual
              exploration and creative collaboration. You will be exposed to a
              wide range of ideas, from science and technology to art and
              philosophy. These ideas will challenge your assumptions, broaden
              your horizons, and inspire you to think differently.
            </p>
            <p className={styles.paragraph}>
              Our desired outcome is that TEDx FUKashere will be the birth of
              great ideas that would make significant impacts in people’s lives
              and society. Our event seeks to bring people of all ages, gender,
              tribes, religions, and political ideology to come together and
              co-create solutions through the generation of ideas that will
              improve our communities.
            </p>
          </div>
          <div className={styles.tedxContainer}>
            <h2>
              About <span>Tedx</span>
            </h2>
            <p>
              TEDx is a program of local, self-organized events that bring
              people together to share a TED-like experience. At a TEDx event,
              TED Talks video and live speakers combine to spark deep discussion
              and connection.
            </p>
          </div>
          <div className={styles.tedxContainer}>
            <h2>
              About <span>TED</span>
            </h2>
            <p>
              TED is a global community, welcoming people from every discipline
              and culture who seek a deeper understanding of the world. We
              believe passionately in the power of ideas to change attitudes,
              lives and, ultimately, the world.
            </p>
            <p>
              TED began in 1984 as a conference where Technology, Entertainment
              and Design converged, and today covers almost all topics from
              science to business to global issues, in more than 100 languages.
              Meanwhile, independently run TEDx events help share ideas in
              communities around the world.
            </p>
          </div>
          <div className={styles.tedxContainer}>
            <h2>Our Story</h2>
            <p>
              TEDx FUKashere is an independently organized TEDx event held in the
              heart of Kashere. We aim to showcase bold ideas, inspire change,
              and connect thinkers, doers, and dreamers in our local community.
            </p>
          </div>
          <div className={styles.license}>
            <p>
              TEDx FUKashere is independently organized under a license granted by
              TED. The views and opinions expressed at TEDxKashere events are
              those of the individual speakers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
