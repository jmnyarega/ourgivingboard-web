import { CONFIRM_PAYMENT_SUCCESS } from "../../actions/payment/types";

const initialState = {
  payment: null,
  pending: false,
};

const confirmPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_PAYMENT_SUCCESS:
      return {
        payment: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default confirmPaymentReducer;
