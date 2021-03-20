import styles from "./HighlightedProducts.module.scss";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";

const HighlightedProducts = () => {
  return (
    <div className={styles.hp} style={{ backgroundImage: `url(${recipeBg})` }}>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>
            Community Support Box
          </p>
          <p className={styles["hp-product-text-large"]}>$35/week</p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p className={styles["hp-product-text"]}>
            Sign-up for a delivery of produce at a market rate of $35/week,
            we’ll provide the same delivery to a qualified family in our
            community for just $10/week. You’ll receive a generous assortment of
            approximately 12-15 pounds of farm fresh vegetables and fruits – and
            you’ll be helping provide fresh food for another family.
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>
          Buy one - help one!
        </button>
      </div>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>Mutual Aid Box</p>
          <p className={styles["hp-product-text-large"]}>$10/week</p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p
            className={styles["hp-product-text"]}
            style={{ marginBottom: "3%" }}
          >
            Does your family qualify for fresh food at a discounted rate?
          </p>
          <p className={styles["hp-product-text"]}>
            If you have already been receiving our fresh food delivery through
            OUSD or if you qualify for free/reduced lunch, click the button
            below and enter your promotional code to register for a weekly
            produce box at reduced cost of $10/week.
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>
          Register and enter code
        </button>
      </div>
      <div className={styles["hp-product-cont"]}>
        <div className={styles["hp-product-header-div"]}>
          <p className={styles["hp-product-text-large"]}>DONATE</p>
          <p className={styles["hp-product-text-large"]}>** Any Amount **</p>
        </div>
        <div className={styles["hp-product-main-text-cont"]}>
          <p
            className={styles["hp-product-text"]}
            style={{ marginBottom: "3%" }}
          >
            Sign-up for a delivery of produce at a market rate of $35/week,
            we’ll provide the same delivery to a qualified family in our
            community for just $10/week. You’ll receive a generous assortment of
            approximately 12-15 pounds of farm fresh vegetables and fruits – and
            you’ll be helping provide fresh food for another family.
          </p>
          <p
            className={styles["hp-product-text"]}
            style={{ textAlign: "center" }}
          >
            Thank you!
          </p>
        </div>
        <button className={styles["hp-product-btn"]}>Donate today!</button>
      </div>
    </div>
  );
};

export default HighlightedProducts;
