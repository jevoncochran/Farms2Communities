import styles from "./About.module.scss";
import Layout from "../Layout";
import Intro from "./Intro";
import Sponsors from "./Sponsors";
import Pitch from "./Pitch";

const About = () => {
  return (
    <Layout>
      <Intro />
      <Sponsors />
      <Pitch />
    </Layout>
  );
};

export default About;
