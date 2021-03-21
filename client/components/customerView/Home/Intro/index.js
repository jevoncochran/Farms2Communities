import styles from "./Intro.module.scss";
import vegBasket from "../../../../public/assets/images/home/vegetable-basket.jpg";
import packingGreens from "../../../../public/assets/images/home/packing-greens.jpg";
import ftcLogo from "../../../../public/assets/images/home/farms-to-communities-logo-color.png";
import { text } from "./text";
import { connect } from "react-redux";

const Intro = (props) => {
  return (
    <div className={styles.intro}>
      <div
        className={styles["intro-img-large"]}
        style={{ backgroundImage: `url(${vegBasket})` }}
      >
        <div className={styles["intro-logo-cont"]}>
          <img src={ftcLogo} alt="Farms to Communities logo" />
        </div>
      </div>
      <div className={styles["intro-bottom"]}>
        <div className={styles["intro-bottom-text"]}>
          <h2>{text[props.language].heading}</h2>
          <p>{text[props.language].paragraph1}</p>
          <p>{text[props.language].paragraph2}</p>
        </div>
        <img
          src={packingGreens}
          alt="Man packing greens"
          className={styles["intro-bottom-img"]}
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

export default connect(mapStateToProps, {})(Intro);
