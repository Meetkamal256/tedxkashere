import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <section className="container">
      <div className={styles.contactPage}>
        <div className={styles.header}>
          <h1>
            <span>Contact</span> Us
          </h1>
          <p>
            Have a question, suggestion, or just want to say hello? Reach out to
            us!
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
