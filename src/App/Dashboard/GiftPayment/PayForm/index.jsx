import React from "react";
import PropTypes from "prop-types";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const PayForm = ({inputs, handleInputChange}) => (
  <>
    <label className="gift-payment-card">
      Card Number:
      <CardNumberElement
        className="gift-payment-form form-control"
        options={{
          iconStyle: "solid",
          showIcon: true,
        }}
      />
    </label>
    <label className="gift-payment-name">
      Name:
      <input
        placeholder="Name on Card"
        className="gift-payment-form form-control"
        name="name"
        value={inputs.name}
        onChange={handleInputChange}
      />
    </label>
    <div className="flex flex-jc-sb">
      <label className="gift-payment-cvc">
        CVC
        <CardCvcElement
          options={{
            iconStyle: "solid",
            showIcon: true,
          }}
          className="gift-payment-form form-control"
        />
      </label>
      <label className="gift-payment-expiry">
        Expiry Date
        <CardExpiryElement className="gift-payment-form form-control" />
      </label>
    </div>
  </>
);

PayForm.propTypes = {
  inputs: PropTypes.object,
  handleInputChange: PropTypes.func
};

export default PayForm;
