import Checkout from "../components/customerView/Checkout";
import dynamic from "next/dynamic";

// const CheckoutPage = () => {
//   return <Checkout />;
// };

const CheckoutPage = dynamic(
  () => import("../components/customerView/Checkout"),
  { ssr: false }
);

export default CheckoutPage;
