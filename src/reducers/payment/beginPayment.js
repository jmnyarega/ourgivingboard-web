import {
  BEGIN_PAYMENT_PENDING,
  BEGIN_PAYMENT_SUCCESS,
  BEGIN_PAYMENT_FAILURE,
} from "../../actions/payment/types";

const initialState = {
  begin: null,
  pending: false,
  error: null,
};

const beginPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_PAYMENT_PENDING:
      return { pending: true };
    case BEGIN_PAYMENT_SUCCESS:
      return {
        begin: action.payload,
        pending: false,
      };
    case BEGIN_PAYMENT_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default beginPaymentReducer;
