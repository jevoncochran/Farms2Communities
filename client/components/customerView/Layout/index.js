import Head from "next/head";
import NavBar from "../NavBar";
import MobileMenu from "../MobileMenu";
import { connect } from "react-redux";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Farms to Communities</title>
      </Head>
      <div>
        <NavBar />
        {props.mobileNavVisible && <MobileMenu />}
        <div style={{ position: "relative", top: "10vh" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileNavVisible: state.customer.mobileNavVisible,
  };
};

export default connect(mapStateToProps, {})(Layout);
