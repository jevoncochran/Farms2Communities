import styles from "./Pitch.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import paloma from "../../../../public/assets/images/about/paloma.jpg";
import smilingWithStrawberries from "../../../../public/assets/images/about/smiling-with-strawberries.jpg";
import kidsWithBeans from "../../../../public/assets/images/about/kids-with-beans.jpeg";
import eatingApples from "../../../../public/assets/images/about/eating-apples.jpeg";
import { text } from "./text";
import { connect } from "react-redux";

const Pitch = (props) => {
  return (
    <div
      className={styles.pitch}
      style={{ backgroundImage: `url(${recipeBg})` }}
    >
      <div className={styles["pitch-text-cont"]}>
        <p className={styles["pitch-text-large"]}>
          {text[props.language].header}
        </p>
        <p className={styles["pitch-text"]}>{text[props.language].p1}</p>
        <button className={styles["pitch-text-btn"]}>
          {text[props.language].button}
        </button>
        <p className={styles["pitch-text"]}>{text[props.language].p2}</p>
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

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(Pitch);
