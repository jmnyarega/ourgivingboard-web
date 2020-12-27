import {
  CREATE_PAYMENT_PENDING,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
} from "../../actions/payment/types";

const initialState = {
  payment: null,
  pending: false,
  error: null,
};

const createPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_PENDING:
      return { pending: true };
    case CREATE_PAYMENT_SUCCESS:
      return {
        payment: action.payload.paymentMethod,
        pending: false,
      };
    case CREATE_PAYMENT_FAILURE:
      return {
        error: action.error,
        pending: false,
      };
    default:
      return state;
  }
};

export default createPaymentReducer;
