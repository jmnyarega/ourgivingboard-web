import React from "react";
import PropTypes from "prop-types";

// stripe
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const PayForm = ({
  handleSubmit,
  inputs,
  handleInputChange,
  stripe,
  pending,
  completePending,
  errors
}) => (
  <div className="payment">
    <form onSubmit={handleSubmit}>
      <h3 className="element-header title">Payment Information</h3>
      <label className="payment-card">
        Card Number:
        <CardNumberElement
          className="payment-form form-control"
          options={{
            iconStyle: "solid",
            showIcon: true,
          }}
        />
      </label>
      <label className="payment-name">
        Name:
        <input
          placeholder="Name on Card"
          className="payment-form form-control"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
      </label>
      <div className="flex flex-column-gap-1 flex-jc-sb">
        <label className="payment-cvc">
          CVC
          <CardCvcElement
            options={{
              iconStyle: "solid",
              showIcon: true,
            }}
            className="payment-form form-control"
          />
        </label>
        <label className="payment-expiry">
          Expiry Date
          <CardExpiryElement className="payment-form form-control" />
        </label>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!stripe || pending || completePending}
      >
        {pending || completePending ? "Processing..." : "Save to Account"}
      </button>
      {errors && !pending && <div className="alert alert-danger">{errors}</div>}
    </form>
  </div>
);

PayForm.propTypes = {
  handleSubmit: PropTypes.func,
  inputs: PropTypes.obj,
  handleInputChange: PropTypes.func,
  stripe: PropTypes.any,
  pending: PropTypes.bool,
  completePending: PropTypes.bool,
  errors: PropTypes.any
};

export default PayForm;
