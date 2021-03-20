import Head from "next/head";
import Layout from "../components/customerView/Layout";
import Intro from "../components/customerView/Intro";
import Stats from "../components/customerView/Stats";
import BoxContents from "../components/customerView/BoxContents";
import HighlightedProducts from "../components/customerView/HighlightedProducts";
import SupportStatement from "../components/customerView/SupportStatement";
import CovidDisclaimer from "../components/customerView/CovidDisclaimer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Intro />
        <Stats />
        <BoxContents />
        <HighlightedProducts />
        <SupportStatement />
        <CovidDisclaimer />
      </Layout>
    </div>
  );
}
