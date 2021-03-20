import styles from "./BoxContents.module.scss";
import freshCabbage from "../../../public/assets/images/home/fresh-cabbage.jpg";
import boxContents from "../../../public/assets/images/home/box-contents.jpg";
import Grid from "@material-ui/core/Grid";
import { produce } from "./produce";

const BoxContents = () => {
  return (
    <div
      className={styles["box-contents"]}
      style={{ backgroundImage: `url(${freshCabbage})` }}
    >
      <div className={styles["box-contents-text-cont"]}>
        <p className={styles["box-contents-text-large"]}>What’s In The Box:</p>
        <p className={styles["box-contents-text"]}>
          The image to the right is an example of what comes in a weekly box.
          Each week varies in exact contents. Weekly orders weigh 12-15 pounds.
        </p>
        <p className={styles["box-contents-text"]}>
          Winter 2021 orders may include:
        </p>
        <Grid container>
          {produce.map((ele) => (
            <Grid key={ele} item xs={3}>
              <p className={styles["box-contents-contents"]}>{ele}</p>
            </Grid>
          ))}
        </Grid>
        <p className={styles["box-contents-text"]}>
          Almost all produce included is grown here in California, and sourced
          from organic and sustainable farmers.
        </p>
        <div className={styles["box-contents-btn-cont"]}>
          <button className={styles["box-contents-btn"]}>
            Sign up for weekly deliveries!
          </button>
        </div>
      </div>
      <img
        src={boxContents}
        className={styles["box-contents-img"]}
        alt="contents of produce box"
      />
    </div>
  );
};

export default BoxContents;
