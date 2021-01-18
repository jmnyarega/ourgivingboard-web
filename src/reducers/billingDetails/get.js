import { BILLING_DETAILS_SUCCESS } from "../../actions/payment/types";

const initialState = {
  billing: null,
  pending: false,
};

const billingDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BILLING_DETAILS_SUCCESS:
      return {
        billing: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default billingDetailsReducer;
