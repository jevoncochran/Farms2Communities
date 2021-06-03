import styles from "./BoxContents.module.scss";
import freshCabbage from "../../../../public/assets/images/home/fresh-cabbage.jpg";
import boxContents from "../../../../public/assets/images/home/box-contents.jpg";
import Grid from "@material-ui/core/Grid";
import { produce } from "./produce";
import { text } from "./text";
import { connect } from "react-redux";

const BoxContents = (props) => {
  return (
    <div
      className={styles["box-contents"]}
      style={{ backgroundImage: `url(${freshCabbage})` }}
    >
      <div className={styles["box-contents-text-cont"]}>
        <p className={styles["box-contents-text-large"]}>
          {text[props.language].headline}
        </p>
        <p className={styles["box-contents-description"]}>{text[props.language].p1}</p>
        <p className={styles["box-contents-text"]}>{text[props.language].p2}</p>
        <Grid container>
          {produce.map((ele) => (
            <Grid key={ele} item xs={4} sm={3}>
              <p className={styles["box-contents-contents"]}>
                {ele[props.language]}
              </p>
            </Grid>
          ))}
        </Grid>
        <p className={styles["box-contents-text"]}>{text[props.language].p3}</p>
        <div className={styles["box-contents-btn-cont"]}>
          <button className={styles["box-contents-btn"]}>
            {text[props.language].btn}
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

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(BoxContents);
