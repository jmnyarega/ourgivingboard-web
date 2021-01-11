import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// hooks
import { useCompletePayment, useBeginPayment, useConfirmPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";

// components
import Dashboard from "../index";
import Checkout from "../../../common/Checkout";
import Gift from "./Gift";

// actions
import { getBoards } from "../../../actions/board/get";

// hooks
import { useCustomForm } from "../../../hooks/forms";

// helpers
import { getEmail } from "../../../helpers/localStorage";

const CheckoutForm = () => {
  useCurrentUser();
  const email = getEmail();

  const [total, setTotal] = useState(0);
  const [boardInfo, setBoardInfo] = useState([]);

  const dispatch = useDispatch();
  const { boards = [10, 60] } = useSelector((state) => state?.boards);

  // handles inputs & sends input to server
  const [inputs, handleInputChange] = useCustomForm({}, Function, Function);
  const [handleSubmit] = useBeginPayment(email, boardInfo);

  // begin payment response
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );

  // gets the confirm payment response, to stripe
  const {
    payment,
    errors: paymentError,
    pending: paymentPending,
  } = useSelector((state) => state?.confirmPayment);

  // confirm & complete payment
  const [stripe] = useConfirmPayment(payment, begin, beginError);
  useCompletePayment(payment);

  // calculates the total on state change
  useEffect(() => {
    if (inputs && Object.values(inputs).length) {
      let total = 0;
      let data = [];
      total =
        inputs &&
        Object.keys(inputs).reduce((acc, board) => {
          data.push({ board, quantity: inputs[board] });
          return acc + Number(inputs[board]) * Number(board);
        }, 0);
      setTotal(total);
      setBoardInfo(data)
    }
  }, [inputs]);

  // loads the boads on component-did-update
  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <Gift
      handleSubmit={handleSubmit}
      disabled={!stripe || paymentPending || beginPending}
      pending={paymentPending || beginPending}
      paymentError={paymentError}
      beginError={beginError}
      total={total}
      changed={handleInputChange}
      boards={boards}
      inputs={inputs}
    />
  );
};

const GiftPayment = () => {
  return (
    <Dashboard>
      <div className="gift-wrapper">
        <Checkout>
          <CheckoutForm />
        </Checkout>
      </div>
    </Dashboard>
  );
};

export default GiftPayment;
