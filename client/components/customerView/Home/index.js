import { useEffect } from "react";
import BoxContents from "./BoxContents";
import CovidDisclaimer from "./CovidDisclaimer";
import HighlightedProducts from "./HighlightedProducts";
import Intro from "./Intro";
import Stats from "./Stats";
import SupportStatement from "./SupportStatement";
import Layout from "../Layout";
import { connect } from "react-redux";
import { clearSelectedProduct } from "../../../redux/actions";

const Home = (props) => {
  useEffect(() => {
    props.clearSelectedProduct();
    console.log("This is from the parent (HOME) component");
  }, []);

  return (
    <Layout>
      <Intro />
      <Stats />
      <BoxContents />
      <HighlightedProducts />
      <SupportStatement />
      <CovidDisclaimer />
    </Layout>
  );
};

export default connect(null, { clearSelectedProduct })(Home);
