import styles from "./ContactInfo.module.scss";
import { FiMapPin } from "react-icons/fi";
import { FaPhone, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { GrInstagram, GrYoutube } from "react-icons/gr";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["info-container"]}>
        <div className={styles["info-cont-icon"]}>
          <FiMapPin />
        </div>
        <div className={styles["info-cont-text-div"]}>
          <p className={styles["info-text-large"]}>FARMS to COMMUNITIES</p>
          <p className={styles["info-text"]}>PO Box 5556, Oakland CA 94605</p>
        </div>
      </div>

      <div className={styles["info-container"]}>
        <div className={styles["info-cont-icon"]}>
          <FaPhone />
        </div>
        <div className={styles["info-cont-text-div"]} style={{ height: "65%" }}>
          <p className={styles["info-text-large"]}>QUICK CONTACT</p>
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
          <p className={styles["info-text-large"]}>OFFICE HOURS</p>
          <div>
            <p className={styles["info-text"]}>2pm – 6pm</p>
            <p className={styles["info-text"]}>(Monday – Friday) </p>
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

export default ContactInfo;
