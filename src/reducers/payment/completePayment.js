import {
  COMPLETE_PAYMENT_PENDING,
  COMPLETE_PAYMENT_SUCCESS,
  COMPLETE_PAYMENT_FAILURE,
} from "../../actions/payment/types";

const initialState = {
  complete: null,
  pending: false,
  error: null,
};

const beginPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_PAYMENT_PENDING:
      return { pending: true };
    case COMPLETE_PAYMENT_SUCCESS:
      return {
        complete: action.payload,
        pending: false,
      };
    case COMPLETE_PAYMENT_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default beginPaymentReducer;
