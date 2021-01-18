import { BEGIN_PAYMENT_SUCCESS } from "../../actions/payment/types";

const initialState = {
  begin: null,
  pending: false,
};

const beginPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_PAYMENT_SUCCESS:
      return {
        begin: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default beginPaymentReducer;
