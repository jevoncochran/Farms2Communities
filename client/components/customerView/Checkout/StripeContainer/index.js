import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm";

const PUBLIC_KEY =
  "pk_live_51IF1O6Lbsa7wJ0xuDfOc2YUrEifKVU7k43askt3AHhtwe9ivj9WJSo5VE5uSiraVIvurcHNr0CWk6iOyM6zuhVpq0011mnb8zH";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        amount={props.amount}
        customer={props.customer}
        setCustomer={props.setCustomer}
        addressLine2={props.addressLine2}
        promoCode={props.promoCode}
        // errorMsg={props.errorMsg}
        setMessage={props.setMessage}
        setDisplayMsg={props.setDisplayMsg}
        password={props.password}
        reenteredPassword={props.reenteredPassword}
      />
    </Elements>
  );
}
