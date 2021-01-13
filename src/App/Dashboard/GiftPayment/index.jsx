import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// hooks
import { /*useCompletePayment,**/ useBeginPayment, useConfirmPayment, useCompleteJoinBoard } from "../../../hooks/payment";

// components
import Dashboard from "../index";
import Checkout from "../../../common/Checkout";
import Gift from "./Gift";

// actions
import { getBoards } from "../../../actions/board/get";

// hooks
import { useCustomForm } from "../../../hooks/forms";

const getFundBoardId = (boards, value) =>
  boards?.find((board) => board.gift_in === value).id;

const CheckoutForm = () => {

  const [total, setTotal] = useState(0);
  const [boardInfo, setBoardInfo] = useState([]);

  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state?.boards);

  // handles inputs & sends input to server
  const [inputs, handleInputChange] = useCustomForm({}, Function, Function);
  const [handleSubmit] = useBeginPayment(boardInfo);

  // begin payment response
  // const { begin, error: beginError, pending: beginPending } = useSelector(
  //   (state) => state?.beginPayment
  // );

  // gets the confirm payment response, to stripe
  const {
    payment,
    error: paymentError,
    pending: paymentPending,
  } = useSelector((state) => state?.confirmPayment );

  // confirm & complete payment
  // const [stripe] = useConfirmPayment(payment, begin, beginError);
  // useCompleteJoinBoard(payment)
  // useCompletePayment(payment);

  // calculates the total on state change
  useEffect(() => {
    if (inputs && Object.values(inputs).length) {
      let total = 0;
      let data = [];
      total =
        inputs &&
        Object.keys(inputs).reduce((acc, board) => {
          const fundboard_id = getFundBoardId(boards, board);
          data.push({ fundboard_id, quantity: Number(inputs[board]) });
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
      message={payment}
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
