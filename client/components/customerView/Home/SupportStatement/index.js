import styles from "./SupportStatement.module.scss";

const SupportStatement = () => {
  return (
    <div className={styles.ss}>
      <p className={styles["ss-header"]}>How Your Support Makes a Difference</p>
      {/* <div className={styles["ss-main-text-cont"]}> */}
      <p className={styles["ss-text"]}>
        <span>FACILITATE MUTUAL AID:</span> We understand ourselves as a part of
        a community in which our wellbeing is intertwined with one another. We
        are committed to principles of food justice and are inspired by mutual
        aid community movements.
      </p>
      <p className={styles["ss-text"]}>
        <span>CREATE JOBS IN OAKLAND:</span> We are hiring local. Our current
        packing and delivery staff consists of over 35 people who are almost all
        parents of our OUSD students, and are paid a fair wage of $35/hr.
      </p>
      <p className={styles["ss-text"]}>
        <span>SUPPORT LOCAL FARMERS:</span> We purchase from local, organic,
        small scale growers. We are purchasing through select distributors who
        work directly with farmers. More information on who we source from here.
      </p>
      {/* </div> */}
    </div>
  );
};

export default SupportStatement;
