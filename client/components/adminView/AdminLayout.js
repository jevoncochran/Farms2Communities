import Head from "next/head";
import NavBar from "./NavBar";

const AdminLayout = (props) => {
  return (
    <div>
      <Head>Farms to Communities</Head>
      <div>
        <NavBar />
        <div style={{ position: "relative", top: "10vh", padding: "2%" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
