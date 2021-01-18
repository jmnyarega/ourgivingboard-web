import { COMPLETE_PAYMENT_SUCCESS } from "../../actions/payment/types";

const initialState = {
  complete: null,
  pending: false,
};

const beginPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_PAYMENT_SUCCESS:
      return {
        complete: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default beginPaymentReducer;
