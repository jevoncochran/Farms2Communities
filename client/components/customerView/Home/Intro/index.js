import styles from "./Intro.module.scss";
import vegBasket from "../../../../public/assets/images/home/vegetable-basket.jpg";
import packingGreens from "../../../../public/assets/images/home/packing-greens.jpg";
import ftcLogo from "../../../../public/assets/images/home/farms-to-communities-logo-color.png";

const Intro = () => {
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
          <h2>Fresh Fruits and Veggies delivered to your door!</h2>
          <p>
            FARMS to COMMUNITIES is a new CSA by Growing Together. We are
            increasing food access by connecting families around Oakland with
            one another, and with local farmers, to mutually support one
            another.
          </p>
          <p>
            Now, you can order a weekly home delivery of fruits and vegetables
            (almost all organic, and locally grown) through our Community
            Support Box or Mutual Aid Box. Read more about us and the story of
            how this project came about here.
          </p>
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

export default Intro;
