import styles from "./Pitch.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import paloma from "../../../../public/assets/images/about/paloma.jpg";
import smilingWithStrawberries from "../../../../public/assets/images/about/smiling-with-strawberries.jpg";
import kidsWithBeans from "../../../../public/assets/images/about/kids-with-beans.jpeg";
import eatingApples from "../../../../public/assets/images/about/eating-apples.jpeg";

const Pitch = () => {
  return (
    <div
      className={styles.pitch}
      style={{ backgroundImage: `url(${recipeBg})` }}
    >
      <div className={styles["pitch-text-cont"]}>
        <p className={styles["pitch-text-large"]}>Join FARMS to COMMUNITIES</p>
        <p className={styles["pitch-text"]}>
          Start receiving farm fresh fruits and vegetables – delivered to your
          door – and help your community at the same time!
        </p>
        <button className={styles["pitch-text-btn"]}>JOIN TODAY</button>
        <p className={styles["pitch-text"]}>Thank you!</p>
      </div>
      <div className={styles["pitch-img-cont"]}>
        <img
          className={styles["pitch-img"]}
          src={paloma}
          alt="Paloma Collier, Farms to Communities"
        />
        <img
          className={styles["pitch-img"]}
          src={smilingWithStrawberries}
          alt="woman smiling, holding box of strawberries"
        />
        <img
          className={styles["pitch-img"]}
          src={kidsWithBeans}
          alt="kids with a handful of beans"
        />
        <img
          className={styles["pitch-img"]}
          src={eatingApples}
          alt="kids eating apples"
        />
      </div>
    </div>
  );
};

export default Pitch;
