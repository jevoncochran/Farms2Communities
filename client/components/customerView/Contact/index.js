import styles from "./Contact.module.scss";
import Layout from "../Layout";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className={styles["contact"]}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
