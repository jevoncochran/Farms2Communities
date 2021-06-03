import styles from "./NavBar.module.scss";
import usFlag from "../../../public/assets/images/nav/united-states.png";
import mexicoFlag from "../../../public/assets/images/nav/mexico.png";
import Link from "next/link";
import { connect } from "react-redux";
import {
  setLanguage,
  openMobileNav,
  closeMobileNav,
} from "../../../redux/actions";
import { HiOutlineMenu } from "react-icons/hi";

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
        {!props.loggedIn && (
          <Link href="/login">
            <p className={styles["nav-page"]}>LOGIN</p>
          </Link>
        )}
        {!props.loggedIn && (
          <Link href="/signup">
            <p className={styles["nav-page"]}>SignUp</p>
          </Link>
        )}
        {props.loggedIn && (
          <Link href="/">
            <p className={styles["nav-page"]}>Logout</p>
          </Link>
        )}
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
      <div className={styles["mobile-menu-icon"]} onClick={props.openMobileNav}>
        <HiOutlineMenu />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.customer.loggedIn,
  };
};

export default connect(mapStateToProps, {
  setLanguage,
  openMobileNav,
  closeMobileNav,
})(NavBar);
