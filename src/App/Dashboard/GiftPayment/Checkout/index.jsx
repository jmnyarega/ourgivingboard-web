import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// stripe
import { useStripe } from "@stripe/react-stripe-js";

// hooks
import {
  useCompleteJoinBoard,
  useConfirmPayment,
} from "../../../../hooks/payment";

// components
import Summary from "./Summary";
import Dashboard from "../../index";
import Checkout from "../../../../common/Checkout";

// helpers
import { getCart, getIntent, getPaymentId } from "../../../../helpers/localStorage";

const CheckoutForm = () => {
  const {
    payment,
    error: paymentError,
    pending: paymentPending,
  } = useSelector((state) => state?.confirmPayment);

  const stripe = useStripe();
  const intent = getIntent();
  const paymentId = getPaymentId();

  const [, handleSubmit] = useConfirmPayment(paymentId, intent);

  useCompleteJoinBoard(payment);
  return (
    <div className="gift-payment">
      <h3 className="element-header">Billing Details</h3>

      <div className="gift-payment-container">
        <div className="credit-card flex flex-row-gap-1">
          <label className="title"> Card: </label>
          <i className="fa fa-credit-card"></i>
          <div> **** **** **** 1234 </div>
        </div>

        <div className="card-name flex flex-row-gap-1">
          <label className="title"> Name: </label>
          <i className="fa fa-user"></i>
          <div>John Doe</div>
        </div>

        <div className="card-name flex flex-row-gap-1">
          <label className="title"> Expiry: </label>
          <i className="fa fa-calendar"></i>
          <div>11/23</div>
        </div>
      </div>

      <div className="flex flex-jc-c gift-payment-checkout-btn">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!stripe || paymentPending}
        >
          {paymentPending ? "Processing" : "Checkout"}
        </button>
      </div>
      {paymentError && <div className="alert alert-danger">{paymentError}</div>}
      {payment && <div className="alert alert-success">{payment}</div>}
    </div>
  );
};

const GiftCheckout = () => {
  const cart = getCart();
  const history = useHistory();
  const handleToCart = () => {
    history.push("/gift-order");
  };
  return (
    <Dashboard>
      <div className="gift-wrapper">
        <Checkout>
          <CheckoutForm />
        </Checkout>
        <Summary cart={cart} handleToCart={handleToCart} />
      </div>
    </Dashboard>
  );
};

export default GiftCheckout;
