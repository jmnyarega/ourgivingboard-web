import {
  BILLING_DETAILS_PENDING,
  BILLING_DETAILS_SUCCESS,
  BILLING_DETAILS_FAILURE,
} from "../../actions/payment/types";

const initialState = {
  billing: null,
  pending: false,
  error: null,
};

const billingDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BILLING_DETAILS_PENDING:
      return { pending: true };
    case BILLING_DETAILS_SUCCESS:
      return {
        billing: action.payload,
        pending: false,
      };
    case BILLING_DETAILS_FAILURE:
      return {
        error: action.payload,
        pending: false,
      };
    default:
      return state;
  }
};

export default billingDetailsReducer;
