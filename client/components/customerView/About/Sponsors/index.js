import styles from "./Sponsors.module.scss";
import Grid from "@material-ui/core/Grid";
import { sponsorLogos } from "./sponsorLogos";
import { connect } from "react-redux";

const Sponsors = (props) => {
  return (
    <div className={styles.sponsors}>
      <p className={styles["sponsors-headline"]}>
        {props.language === "en"
          ? "Thank You to our Sponsors and Partners"
          : "Gracias a nuestros patrocinadores y socios"}
      </p>
      <div className={styles["sponsor-logo-cont"]}>
        <Grid container>
          {sponsorLogos.map((logo) => (
            <Grid item xs={4} sm={2}>
              <div className={styles["sponsor-logo-div"]} key={logo}>
                <img
                  src={logo}
                  alt="Farms to Communities sponsor logo"
                  className={styles["sponsor-logo"]}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.customer.language,
  };
};

export default connect(mapStateToProps, {})(Sponsors);
