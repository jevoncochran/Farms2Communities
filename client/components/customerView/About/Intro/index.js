import styles from "./Intro.module.scss";
import applesAndGreens from "../../../../public/assets/images/about/apples-and-greens.jpg";
import broccoliKid from "../../../../public/assets/images/about/broccoli-kid.jpeg";
import packedGreens from "../../../../public/assets/images/about/packed-greens.jpg";
import tomatoKids from "../../../../public/assets/images/about/tomato-kids.jpeg";
import { text } from "./text";
import { connect } from "react-redux";

const Intro = (props) => {
  return (
    <div className={styles.intro}>
      <div className={styles["intro-text"]}>
        <h2>{text[props.language].h1}</h2>
        <p>{text[props.language].p1}</p>
        <img
          src={packedGreens}
          alt="packed greens"
          className={styles["intro-images-img-mobile"]}
        />
        <h2>{text[props.language].h2}</h2>
        <p>{text[props.language].p2}</p>
        <p>{text[props.language].p3}</p>
        <img
          src={broccoliKid}
          alt="kid picking broccoli"
          className={styles["intro-images-img-mobile"]}
        />
        <p>{text[props.language].p4}</p>
        <p>{text[props.language].p5}</p>
        <img
          src={tomatoKids}
          alt="kids examining a juicy tomato"
          className={styles["intro-images-img-mobile"]}
        />
        <p>{text[props.language].p6}</p>
        <p>{text[props.language].p7}</p>
        <p>{text[props.language].p8}</p>
        <p>{text[props.language].p9}</p>
        <p>{text[props.language].p10}</p>
      </div>
      <div className={styles["intro-images"]}>
        <img
          src={packedGreens}
          alt="packed greens"
          className={styles["intro-images-img"]}
        />
        <img
          src={broccoliKid}
          alt="kid picking broccoli"
          className={styles["intro-images-img"]}
        />
        <img
          src={tomatoKids}
          alt="kids examining a juicy tomato"
          className={styles["intro-images-img"]}
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
