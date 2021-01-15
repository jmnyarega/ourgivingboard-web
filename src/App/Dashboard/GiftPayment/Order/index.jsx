import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// components
import Dashboard from "../../index";
import Loader from "../../../../Assets/25.gif";

// hooks
import { useCustomForm } from "../../../../hooks/forms";
import { useBeginPayment } from "../../../../hooks/payment";

// actions
import { getBoards } from "../../../../actions/board/get";

// helpers
import {
  addcart,
  getCart,
  savePaymentId,
  saveIntent,
  saveFoundation
} from "../../../../helpers/localStorage";

const getFundBoardId = (boards, value) =>
  boards?.find((board) => board.gift_in == value)?.id;

const GiftOrder = ({ type, title="Select Board To Join" }) => {
  const stored = getCart();
  const history = useHistory();

  // state
  const [total, setTotal] = useState(0);
  const [boardInfo, setBoardInfo] = useState([]);

  // redux hooks
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state?.boards);

  // custom form hooks
  const [inputs, handleInputChange] = useCustomForm(
    stored.inputs,
    Function,
    Function
  );

  // begin payment response
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );

  const [handleSubmit] = useBeginPayment(boardInfo, type);

  // loads the boads on component-did-update
  useEffect(() => {
    dispatch(getBoards());
  }, []);

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
  }, [inputs, boards]);

  useEffect(() => {
    if (begin) {
      if (total > 0) {
        addcart({ inputs, total, boardInfo });
        savePaymentId(begin?.payment_method_id);
        saveIntent(begin?.payment_intent_client_secret);
        saveFoundation(type);
        history.push("/gift-checkout");
        location.reload();
      }
    }
  }, [begin]);

  return (
    <Dashboard>
      <div className="gift">
        <h2 className="title element-header">{title}</h2>
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
        <div className="gift-btn">
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
    </Dashboard>
  );
};

GiftOrder.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
};

export default GiftOrder;
