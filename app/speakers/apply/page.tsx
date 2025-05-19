import styles from "./apply.module.css";

const page = () => {
  return (
    <section className="container">
      <div className={styles.applyPage}>
        <div className={styles.header}>
          <h1>
            <span>Apply</span> to Speak
          </h1>
          <p>
            Do you have an idea worth spreading? Become one of our TEDxKashere
            speakers and inspire change.
          </p>
        </div>
        
        <div className={styles.content}>
          <p>
            We are always looking for passionate storytellers, innovators, and
            changemakers. Whether you’re a student, a professional, or a thought
            leader, we want to hear your idea!
          </p>
          
          <p>
            Fill out the application form and share your talk proposal with us.
          </p>
          
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBXbgEzpwcYQyEuHIztwONAT4burFgrBq1eJrGtKw33_ni8A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
