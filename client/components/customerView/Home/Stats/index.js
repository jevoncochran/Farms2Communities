import styles from "./Stats.module.scss";
import { impactArr } from "./impact";
import { connect } from "react-redux";

const Stats = (props) => {
  return (
    <div className={styles.stats}>
      {impactArr.map((item, index) => (
        <div className={styles["stats-impact-div"]} key={index}>
          <p className={styles["stats-figure"]}>{item.figure}</p>
          <p className={styles["stats-accomplishment"]}>
            {item.accomplishment[props.language]}
          </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(Stats);
