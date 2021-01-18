import React from "react";
import { useHistory } from "react-router-dom";

// components
import Summary from "./Summary";
import Dashboard from "../../index";
import Checkout from "../../../../common/Checkout";
import CheckoutForm from "./CheckoutForm";
// helpers
import { getCart } from "../../../../helpers/localStorage";

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
