import styles from "./NavBar.module.scss";
import usFlag from "../../../public/assets/images/nav/united-states.png";
import mexicoFlag from "../../../public/assets/images/nav/mexico.png";

const NavBar = () => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["nav-pages-cont"]}>
        <p className={styles["nav-page"]}>Home</p>
        <p className={styles["nav-page"]}>About</p>
        <p className={styles["nav-page"]}>Contact</p>
        <p className={styles["nav-page"]}>Donate</p>
      </div>
      <div className={styles["nav-language-cont"]}>
        <div className={styles["nav-language-div"]}>
          <img src={usFlag} alt="American flag" />
          <p>EN</p>
        </div>
        <div className={styles["nav-language-div"]}>
          <img src={mexicoFlag} alt="Mexican flag" />
          <p>ES</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
