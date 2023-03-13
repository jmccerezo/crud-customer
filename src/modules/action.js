import * as actions from "./actionType";
import axios from "axios";
import { customerApi } from "./customerApi";

export const onCreateCustomer = (customer) => {
  return (dispatch) => {
    axios
      .post(customerApi, customer)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.CREATE_CUSTOMER,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onGetAllCustomers = () => {
  return (dispatch) => {
    axios
      .get(customerApi)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_ALL_CUSTOMERS,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onGetCustomerById = (id) => {
  return (dispatch) => {
    axios
      .get(`${customerApi}/${id}`)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_CUSTOMER_BY_ID,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onUpdateCustomer = (id, customer) => {
  return (dispatch) => {
    axios
      .put(`${customerApi}/${id}`, customer)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.UPDATE_CUSTOMER,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onDeleteCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete(`${customerApi}/${id}`)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_CUSTOMER_BY_ID,
              payload: { httpRes: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
