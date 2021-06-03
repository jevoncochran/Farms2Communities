import styles from "./MobileMenu.module.scss";
import { connect } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { closeMobileNav } from "../../../redux/actions";

const MobileMenu = (props) => {
  return (
    <div className={styles.mm}>
      <div className={styles["mm-close-icon-cont"]}>
        <div className={styles["mm-close-icon"]} onClick={props.closeMobileNav}>
          <AiOutlineClose />
        </div>
      </div>
      <div className={styles["mm-pages-cont"]}>
        {" "}
        <Link href="/">
          <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
            Home
          </p>
        </Link>
        <Link href="/about">
          <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
            About
          </p>
        </Link>
        <Link href="/contact">
          <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
            Contact
          </p>
        </Link>
        <Link href="/donate">
          <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
            Donate
          </p>
        </Link>
        {!props.loggedIn && (
          <Link href="/login">
            <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
              LOGIN
            </p>
          </Link>
        )}
        {!props.loggedIn && (
          <Link href="/signup">
            <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
              SignUp
            </p>
          </Link>
        )}
        {props.loggedIn && (
          <Link href="/">
            <p className={styles["mm-nav-page"]} onClick={props.closeMobileNav}>
              Logout
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default connect(null, { closeMobileNav })(MobileMenu);
