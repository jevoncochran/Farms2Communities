import { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import Layout from "../../customerView/Layout";
import recipeBg from "../../../public/assets/images/home/recipe-bg-25.png";
import axios from "axios";
import { useRouter } from "next/router";
import { apiRoot } from "../../../utils/axios-config";
import { connect } from "react-redux";
import { adminLogin, customerLogin } from "../../../redux/actions";

const Login = (props) => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [adminAccounts, setAdminAccounts] = useState([]);

  const handleInputChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (adminAccounts.includes(credentials.email)) {
      props.adminLogin(credentials);
    } else {
      props.customerLogin(credentials);
    }
  };

  useEffect(() => {
    axios
      .get(`${apiRoot}/accounts/admin`)
      .then((res) => {
        console.log(res.data);
        setAdminAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (props.loggedInAsAdmin) {
      router.push("/admin");
    }
    if (props.loggedInAsCustomer) {
      router.push("/dashboard");
    }
  }, [props.loggedInAsAdmin, props.loggedInAsCustomer]);

  // take this out
  useEffect(() => {
    console.log("adminAccounts: ", adminAccounts);
  }, [adminAccounts]);

  // take this out
  useEffect(() => {
    console.log("credentials: ", credentials);
  }, [credentials]);
  return (
    <Layout>
      <div className={styles.login}>
        <div
          className={styles["login-header"]}
          style={{ backgroundImage: `url(${recipeBg})` }}
        >
          <p className={styles["login-header-text"]}>Login</p>
        </div>
        <div className={styles["login-content"]}>
          <form className={styles["login-form"]} onSubmit={handleFormSubmit}>
            <div className={styles["login-input-div"]}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleInputChanges}
              />
            </div>
            <div className={styles["login-input-div"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChanges}
              />
            </div>
            <button className={styles["login-btn"]}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInAsAdmin: state.admin.loggedIn,
    loggedInAsCustomer: state.customer.loggedIn,
  };
};

export default connect(mapStateToProps, { adminLogin, customerLogin })(Login);
