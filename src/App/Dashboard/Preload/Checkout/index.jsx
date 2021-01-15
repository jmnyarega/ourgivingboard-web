import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

// stripe
import { useStripe } from "@stripe/react-stripe-js";

// actions
import { billingDetails } from "../../../../actions/payment/billingInfo";

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
import {
  getPreload,
  getIntent,
  getPaymentId,
  clearCart,
} from "../../../../helpers/localStorage";

const CheckoutForm = () => {
  const history = useHistory();
  const { payment, error: paymentError, pending: paymentPending } = useSelector(
    (state) => state?.confirmPayment
  );
  const { billing } = useSelector((state) => state?.billing);
  const dispatch = useDispatch();

  const stripe = useStripe();
  const intent = getIntent();
  const paymentId = getPaymentId();

  const [, handleSubmit] = useConfirmPayment(paymentId, intent);

  useEffect(() => {
    dispatch(billingDetails());
  }, []);

  useCompleteJoinBoard(payment);

  const handleCancel = () => {
    clearCart();
    history.push("/preload-gift");
  };
  return (
    <div className="gift-payment">
      <h3 className="element-header">Billing Details</h3>

      <div className="gift-payment-container">
        <div className="credit-card flex flex-row-gap-1">
          <label className="title"> Card: </label>
          <i className="fa fa-credit-card"></i>
          <div> **** **** **** {billing?.card.last4} </div>
        </div>

        <div className="card-name flex flex-row-gap-1">
          <label className="title"> Name: </label>
          <i className="fa fa-user"></i>
          <div>{billing?.billing_details.name}</div>
        </div>

        <div className="card-name flex flex-row-gap-1">
          <label className="title"> Expiry: </label>
          <i className="fa fa-calendar"></i>
          <div>
            {billing?.card.expiry_month} / {billing?.card.expiry_year}
          </div>
        </div>
      </div>

      <div className="flex flex-jc-sb gift-payment-checkout-btn">
        <Button
          onClick={handleCancel}
          type="ghost"
          className="btn-outline-primary"
          icon={<CloseCircleOutlined />}
          disabled={paymentPending}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          type="primary"
          icon={<CheckCircleOutlined />}
          disabled={(!stripe && getPreload()) || paymentPending}
        >
          {paymentPending ? "Processing" : "Checkout"}{" "}
        </Button>
      </div>
      <br />
      {paymentError && <Alert message={paymentError} type="error" />}
      {payment && <Alert message={payment} type="success" />}
    </div>
  );
};

const PreloadCheckout = () => {
  const preload = getPreload();
  const history = useHistory();

  const handleToCart = () => {
      history.push("/preload-gift");
  };

  return (
    <Dashboard>
      <div className="gift-wrapper">
        <Checkout>
          <CheckoutForm />
        </Checkout>
        <Summary preload={preload} handleToCart={handleToCart} />
      </div>
    </Dashboard>
  );
};

export default PreloadCheckout;
