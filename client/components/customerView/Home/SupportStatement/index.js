import styles from "./SupportStatement.module.scss";
import { text } from "./text";
import { connect } from "react-redux";

const SupportStatement = (props) => {
  return (
    <div className={styles.ss}>
      <p className={styles["ss-header"]}>{text[props.language].headline}</p>
      {/* <div className={styles["ss-main-text-cont"]}> */}
      <p className={styles["ss-text"]}>
        <span>{text[props.language].span1}</span> {text[props.language].p1}
      </p>
      <p className={styles["ss-text"]}>
        <span>{text[props.language].span2}</span> {text[props.language].p2}
      </p>
      <p className={styles["ss-text"]}>
        <span>{text[props.language].span3}</span> {text[props.language].p3}
      </p>
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(SupportStatement);
