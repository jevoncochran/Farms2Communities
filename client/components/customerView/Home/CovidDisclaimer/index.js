import styles from "./CovidDisclaimer.module.scss";
import recipeBg from "../../../../public/assets/images/home/recipe-bg-25.png";
import packingRosa from "../../../../public/assets/images/home/packing-rosa.jpeg";
import { text } from "./text";
import { connect } from "react-redux";

const CovidDisclaimer = (props) => {
  return (
    <div className={styles.cd} style={{ backgroundImage: `url(${recipeBg})` }}>
      <div className={styles["cd-text-cont"]}>
        <p className={styles["cd-text-header"]}>
          {text[props.language].headline}
        </p>
        <p className={styles["cd-text"]}>{text[props.language].p1}</p>
        <p className={styles["cd-text"]}>{text[props.language].p2} </p>
      </div>
      <img
        src={packingRosa}
        alt="woman packing produce"
        className={styles["cd-img"]}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(CovidDisclaimer);
