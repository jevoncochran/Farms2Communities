import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm";
import {
  stripePublicKeyTest,
  stripePublicKeyLive,
} from "../../../../utils/axios-config";

// const PUBLIC_KEY =
//   "pk_test_51IF1O6Lbsa7wJ0xu1eF6n4eFj3mQMDqEF434Yfq19y1kDla0muGr6ldJEJlZaX6Xq7T3Sk9FL12hcFbFM52natAi00G60V8aUz";

const stripeTestPromise = loadStripe(stripePublicKeyLive);

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
        deliveryNotes={props.deliveryNotes}
        // hiddenFormBtnClick={props.hiddenFormBtnClick}
      />
    </Elements>
  );
}
