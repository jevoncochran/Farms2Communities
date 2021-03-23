import styles from "./NavBar.module.scss";
import usFlag from "../../../public/assets/images/nav/united-states.png";
import mexicoFlag from "../../../public/assets/images/nav/mexico.png";
import Link from "next/link";
import { connect } from "react-redux";
import { setLanguage } from "../../../redux/actions";

const NavBar = (props) => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["nav-pages-cont"]}>
        <Link href="/">
          <p className={styles["nav-page"]}>Home</p>
        </Link>
        <Link href="/about">
          <p className={styles["nav-page"]}>About</p>
        </Link>
        <Link href="/contact">
          <p className={styles["nav-page"]}>Contact</p>
        </Link>
        <Link href="/donate">
          <p className={styles["nav-page"]}>Donate</p>
        </Link>
        <Link href="/signup">
          <p className={styles["nav-page"]}>SignUp</p>
        </Link>
      </div>
      <div className={styles["nav-language-cont"]}>
        <div
          className={styles["nav-language-div"]}
          onClick={() => props.setLanguage("en")}
        >
          <img src={usFlag} alt="American flag" />
          <p>EN</p>
        </div>
        <div
          className={styles["nav-language-div"]}
          onClick={() => props.setLanguage("es")}
        >
          <img src={mexicoFlag} alt="Mexican flag" />
          <p>ES</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setLanguage })(NavBar);
