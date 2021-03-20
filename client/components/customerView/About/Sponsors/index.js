import styles from "./Sponsors.module.scss";
import Grid from "@material-ui/core/Grid";
import { sponsorLogos } from "./sponsorLogos";

const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <p className={styles["sponsors-headline"]}>
        Thank You to our Sponsors and Partners
      </p>
      <div className={styles["sponsor-logo-cont"]}>
        <Grid container>
          {sponsorLogos.map((logo) => (
            <Grid item xs={2}>
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

export default Sponsors;
