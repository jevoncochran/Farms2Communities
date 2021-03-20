import styles from "./Stats.module.scss";
import { impactArr } from "./impact";

const Stats = () => {
  return (
    <div className={styles.stats}>
      {impactArr.map((item, index) => (
        <div className={styles["stats-impact-div"]} key={index}>
          <p className={styles["stats-figure"]}>{item.figure}</p>
          <p className={styles["stats-accomplishment"]}>
            {item.accomplishment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
