import {
  CONFIRM_PAYMENT_PENDING,
  CONFIRM_PAYMENT_SUCCESS,
  CONFIRM_PAYMENT_FAILURE,
} from "../../actions/payment/types";

const initialState = {
  payment: null,
  pending: false,
  error: null,
};

const confirmPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_PAYMENT_PENDING:
      return { pending: true };
    case CONFIRM_PAYMENT_SUCCESS:
      return {
        payment: action.payload,
        pending: false,
      };
    case CONFIRM_PAYMENT_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default confirmPaymentReducer;
