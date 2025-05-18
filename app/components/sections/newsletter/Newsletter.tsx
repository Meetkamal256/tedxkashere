import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <section className="container">
      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Be Part of the Story</h2>
          <p>
            Get exclusive updates, behind-the-scenes content, and TEDxKashere
            community news straight to your inbox.
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
