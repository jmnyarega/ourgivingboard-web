import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Radio, Button, Alert } from 'antd';
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
import { useCurrentUser } from "../../../../hooks/authentication";

// helpers
import {
  getCart,
  getIntent,
  getPaymentId,
  clearCart
} from "../../../../helpers/localStorage";

const CheckoutForm = () => {
  const history = useHistory();
  const { payment, error: paymentError, pending: paymentPending } = useSelector(
    (state) => state?.confirmPayment
  );
  const { billing } = useSelector((state) => state?.billing);
  const { user } = useSelector((state) => state?.currentUser);
  const [paymentMethod, setPaymentMethod] = useState();

  const dispatch = useDispatch();

  const stripe = useStripe();
  const intent = getIntent();
  const paymentId = getPaymentId();

  const [, handleSubmit] = useConfirmPayment(paymentId, intent);

  useEffect(() => {
    dispatch(billingDetails());
  }, []);

  const handleCancel = () => {
    clearCart();
    history.push("/gift-order");
  };

  const selectPaymentMethod = (evt) => {
    setPaymentMethod(evt.target.value);
  };

  useCompleteJoinBoard(payment);
  useCurrentUser();
  return (
    <div className="gift-payment">
      <h3 className="element-header">Select Payment Method</h3>
      <div className="gift-payment-container">
        <Radio.Group
          onChange={selectPaymentMethod}
          value={paymentMethod}
          className="flex flex-d-column flex-row-gap-0-5"
        >
          <Radio value="card" disabled={!billing}>
            Use credit card ending with <b> {billing?.card.last4} </b>
            <Button value="large" type="link" onClick={null}>
              Change Card
            </Button>
          </Radio>
          <br />
          <Radio value="account" disabled={user?.current_balance}>
            Use your <strong>ourgiving</strong> preload account
          </Radio>
        </Radio.Group>
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
          disabled={
            !(stripe && getCart()?.boardInfo && paymentMethod) || paymentPending
          }
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

export default CheckoutForm;
