"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./page.module.css";

const ContactPage = () => {
  // Form input state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Error messages
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  
  const validateForm = (): boolean => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Email must be valid.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required.");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Message sent!");

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

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

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            {nameError && <p className={styles.error}>{nameError}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {emailError && <p className={styles.error}>{emailError}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
            />
            {messageError && <p className={styles.error}>{messageError}</p>}
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
