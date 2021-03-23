import { apiRoot } from "../../utils/axios-config";
import SelectedProduct from "../../components/customerView/SignUp/SelectedProduct";

const SelectedProductPage = () => {
  return <SelectedProduct />;
};

export default SelectedProductPage;

export async function getStaticPaths() {
  const res = await fetch(`${apiRoot}/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { item: product.route },
  }));

  return {
    paths: [
      { params: { item: products[0].route } },
      { params: { item: products[1].route } },
    ],
    fallback: false,
  };
}
