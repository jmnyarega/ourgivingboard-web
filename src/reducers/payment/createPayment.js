import { CREATE_PAYMENT_SUCCESS } from "../../actions/payment/types";

const initialState = {
  payment: null,
  pending: false,
};

const createPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_SUCCESS:
      return {
        payment: action.payload.paymentMethod,
        pending: false,
      };

    default:
      return state;
  }
};

export default createPaymentReducer;
