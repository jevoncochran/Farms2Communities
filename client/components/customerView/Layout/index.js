import Head from "next/head";
import NavBar from "../NavBar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Farms to Communities</title>
      </Head>
      <div>
        <NavBar />
        <div style={{ position: "relative", top: "10vh" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
