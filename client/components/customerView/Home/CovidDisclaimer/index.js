import styles from "./CovidDisclaimer.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import packingRosa from "../../../../public/assets/images/home/packing-rosa.jpeg";

const CovidDisclaimer = () => {
  return (
    <div className={styles.cd} style={{ backgroundImage: `url(${recipeBg})` }}>
      <div className={styles["cd-text-cont"]}>
        <p className={styles["cd-text-header"]}>COVID Safety</p>
        <p className={styles["cd-text"]}>
          We’re following USDA recommended protocols in food handling and
          packing. We are packing in OUSD’s commercial kitchens and outdoor
          spaces, distancing, sanitizing often, and wearing masks for food
          packing and delivery.
        </p>
        <p className={styles["cd-text"]}>
          Thank you for being part of our community!
        </p>
      </div>
      <img
        src={packingRosa}
        alt="woman packing produce"
        className={styles["cd-img"]}
      />
    </div>
  );
};

export default CovidDisclaimer;
