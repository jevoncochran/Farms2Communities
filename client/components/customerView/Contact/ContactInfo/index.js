import styles from "./ContactInfo.module.scss";
import { FiMapPin } from "react-icons/fi";
import { FaPhone, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { GrInstagram, GrYoutube } from "react-icons/gr";
import { connect } from "react-redux";

const ContactInfo = (props) => {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["info-container"]}>
        <div className={styles["info-cont-icon"]}>
          <FiMapPin />
        </div>
        <div className={styles["info-cont-text-div"]}>
          <p className={styles["info-text-large"]}>
            {props.language === "en"
              ? "FARMS to COMMUNITIES"
              : "GRANJAS a COMUNIDADES"}
          </p>
          <p className={styles["info-text"]}>PO Box 5556, Oakland CA 94605</p>
        </div>
      </div>

      <div className={styles["info-container"]}>
        <div className={styles["info-cont-icon"]}>
          <FaPhone />
        </div>
        <div className={styles["info-cont-text-div"]} style={{ height: "65%" }}>
          <p className={styles["info-text-large"]}>
            {props.language === "en" ? "QUICK CONTACT" : "CONTACTO RÁPIDO"}
          </p>
          <div>
            <p className={styles["info-text"]}>+1 (510) 621-0020</p>
            <p className={styles["info-text"]}>
              support@farmstocommunities.org
            </p>
          </div>
        </div>
      </div>

      <div className={styles["info-container"]}>
        <div className={styles["info-cont-icon"]}>
          <HiOfficeBuilding />
        </div>
        <div className={styles["info-cont-text-div"]} style={{ height: "65%" }}>
          <p className={styles["info-text-large"]}>
            {props.language === "en" ? "OFFICE HOURS" : "HORAS DE OFICINA"}
          </p>
          <div>
            <p className={styles["info-text"]}>
              {props.language === "en" ? "2pm – 6pm" : "14h - 18h"}
            </p>
            <p className={styles["info-text"]}>
              {props.language === "en"
                ? "(Monday – Friday)"
                : "(lunes a viernes)"}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["contact-info-social-cont"]}>
        <div className={styles["contact-info-social-subcont"]}>
          <div className={styles["contact-info-social-icon"]}>
            <GrInstagram />
          </div>
          <div className={styles["contact-info-social-icon"]}>
            <FaFacebook />
          </div>
          <div className={styles["contact-info-social-icon"]}>
            <FaTwitter />
          </div>
          <div className={styles["contact-info-social-icon"]}>
            <GrYoutube />
          </div>
          <div className={styles["contact-info-social-icon"]}>
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(ContactInfo);
