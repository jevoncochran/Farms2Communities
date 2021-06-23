import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import {
  stripePublicKeyTest,
  stripePublicKeyLive,
} from "../../../utils/axios-config";

// const PUBLIC_KEY =
//   "pk_test_51IF1O6Lbsa7wJ0xu1eF6n4eFj3mQMDqEF434Yfq19y1kDla0muGr6ldJEJlZaX6Xq7T3Sk9FL12hcFbFM52natAi00G60V8aUz";

const stripeTestPromise = loadStripe(stripePublicKeyTest);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amount={props.amount} />
    </Elements>
  );
}
