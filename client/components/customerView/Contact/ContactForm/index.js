import styles from "./ContactForm.module.scss";
import { connect } from "react-redux";

const ContactForm = (props) => {
  return (
    <div className={styles["contact-form"]}>
      <p className={styles["contact-form-header"]}>
        {props.language === "en" ? "CONTACT US" : "CONTÁCTENOS"}
      </p>
      <p className={styles["contact-form-desc"]}>
        {props.language === "en"
          ? "Please send us your questions in a message below."
          : "Envíenos sus preguntas en un mensaje a continuación:"}
      </p>
      <form>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="name">
            {props.language === "en" ? "Your Name" : "Su nombre"}
          </label>
          <input
            type="text"
            name="name"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="email">
            {props.language === "en" ? "Email" : "Correo electrónico"}
          </label>
          <input
            type="text"
            name="email"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="subject">
            {props.language === "en" ? "Subject" : "Tema"}
          </label>
          <input
            type="text"
            name="subject"
            className={styles["contact-form-input"]}
          />
        </div>
        <div className={styles["contact-form-input-div"]}>
          <label htmlFor="message">
            {props.language === "en" ? "Your Message" : "Su mensaje"}
          </label>
          <input
            type="text"
            name="message"
            className={styles["contact-form-input-large"]}
          />
        </div>
        <div className={styles["contact-form-btn-div"]}>
          <button className={styles["contact-form-btn"]}>
            {props.language === "en" ? "SEND MESSAGE" : "ENVIAR MENSAJE"}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { language: state.customer.language };
};

export default connect(mapStateToProps, {})(ContactForm);
