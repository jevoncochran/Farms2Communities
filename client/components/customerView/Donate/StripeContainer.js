import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_4dRCBqoQwBkmearPINGcamtW00UMWNYLsN";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amount={props.amount} />
    </Elements>
  );
}
