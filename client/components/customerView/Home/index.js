import BoxContents from "./BoxContents";
import CovidDisclaimer from "./CovidDisclaimer";
import HighlightedProducts from "./HighlightedProducts";
import Intro from "./Intro";
import Stats from "./Stats";
import SupportStatement from "./SupportStatement";
import Layout from "../Layout";

const Home = () => {
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

export default Home;
