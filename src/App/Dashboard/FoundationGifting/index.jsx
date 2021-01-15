import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// hooks
import { useBeginPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";

// components
import Dashboard from "../index";
import Checkout from "../../../common/Checkout";
  import Loader from "../../../Assets/25.gif";

// hooks
import { useCustomForm } from "../../../hooks/forms";

// actions
import { getBoards } from "../../../actions/board/get";

//helpers
import {
  savePaymentId,
  saveIntent,
  addcart,
  getCart
} from "../../../helpers/localStorage";

const getFundBoardId = (boards, value) =>
  boards?.find((board) => board.gift_in == value)?.id;

const CheckoutForm = () => {
  const stored = getCart();
  useCurrentUser();
  const history = useHistory();
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [boardInfo, setBoardInfo] = useState([]);

  // handles inputs & sends input to server
  const [inputs, handleInputChange] = useCustomForm(
    stored.inputs,
    Function,
    Function
  );
  const [handleSubmit] = useBeginPayment(boardInfo, "foundation");

  // begin payment response
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );
  const { boards } = useSelector((state) => state?.boards);

  useEffect(() => {
    if (begin) {
      if (total > 0) {
        addcart({ inputs, total, boardInfo });
        savePaymentId(begin?.payment_method_id);
        saveIntent(begin?.payment_intent_client_secret);
        history.push("/foundation-checkout");
      }
    }
  }, [begin]);

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  // calculate total 
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
      data = data.filter((b) => b.quantity > 0);
      setBoardInfo(data);
    }
  }, [inputs]);

  return (
    <div className="foundation">
      <h3 className="element-header gift-title">Foundation Gifting</h3>
      <form onSubmit={handleSubmit}>
        <table className="gift-container">
          <thead>
            <tr>
              <th>Board</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {boards?.map(({ gift_in }) => (
                <tr key={gift_in}>
                  <td>${parseInt(gift_in)}</td>
                  <td>
                    <select
                      className="form-control"
                      name={gift_in}
                      value={inputs && inputs[gift_in]}
                      onChange={handleInputChange}
                    >
                      {[0, 1, 2, 3, 4, 5].map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </select>
                  </td>
                  <td>${(inputs && gift_in * inputs[gift_in]) || 0}</td>
                </tr>
              ))}
            {boards ? (
              <tr>
                <td /> <td />
                <td className="title gift-total">Total = ${total}</td>
              </tr>
            ) : (
              <img src={Loader} />
            )}
          </tbody>
        </table>
      </form>
      <div className="foundation-btn">
        <button
          className="btn btn-primary"
          disabled={total <= 0 || beginPending || !boards}
          onClick={handleSubmit}
        >
          {beginPending ? "Processing" : " Proceed To Payment"}
        </button>
      </div>
      {!beginPending && beginError && (
        <div className="alert alert-danger">{beginError}</div>
      )}
    </div>
  );
};

const FoundationGifting = () => {
  return (
    <Dashboard>
      <div className="foundation-wrapper">
        <Checkout>
          <CheckoutForm />
        </Checkout>
      </div>
    </Dashboard>
  );
};

export default FoundationGifting;
