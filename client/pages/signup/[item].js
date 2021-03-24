import { apiRoot } from "../../utils/axios-config";
import SelectedProduct from "../../components/customerView/SignUp/SelectedProduct";
// import dynamic from "next/dynamic";

const SelectedProductPage = () => {
  return <SelectedProduct />;
};

// const SelectedProductPage = dynamic(
//   () => import("../../components/customerView/SignUp/SelectedProduct"),
//   { ssr: false }
// );

export default SelectedProductPage;

// export async function getStaticPaths() {
//   const res = await fetch(`${apiRoot}/products`);

//   const products = await res.json();

//   const paths = products.map((product) => ({
//     params: { item: product.route },
//   }));

//   return {
//     paths: [
//       { params: { item: products[0].route} },
//       { params: { item: products[1].route } },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${apiRoot}/products/${params.id}`);
//   const product = await res.json();

//   return { props: { product } };
// }
