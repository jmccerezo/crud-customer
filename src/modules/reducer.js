import * as actions from "./actionType";

const initState = {
  customers: [],
  customer: {},
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CREATE_CUSTOMER:
      return { ...state, customer: action.payload.httpRes };

    case actions.GET_ALL_CUSTOMERS:
      return { ...state, customers: action.payload.httpRes };

    case actions.GET_CUSTOMER_BY_ID:
      return { ...state, customer: action.payload.httpRes };

    case actions.UPDATE_CUSTOMER:
      return { ...state, customer: action.payload.httpRes };
      
    case actions.DELETE_CUSTOMER:
      return { ...state, customer: action.payload.httpRes };

    default:
      return state;
  }
};
