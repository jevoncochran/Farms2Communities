import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles["contact-form"]}>
      <p className={styles["contact-form-header"]}>CONTACT US</p>
      <p className={styles["contact-form-desc"]}>
        Please send us your questions in a message below.
      </p>
      <form>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="message">Your Message</label>
          <input
            type="text"
            name="message"
            className={styles["contact-form-input-large"]}
          />
        </div>
        <button className={styles["contact-form-btn"]}>SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
