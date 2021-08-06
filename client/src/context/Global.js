import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// intial state object
const initialState = {
  transac: [],
  error: null,
  loading: true,

  // below array was used as dummy data
  // [
  //   { id: 1, text: "Flower", amount: -20 },
  //   { id: 2, text: "Salary", amount: 300 },
  //   { id: 3, text: "Book", amount: -10 },
  //   { id: 4, text: "Camera", amount: 150 },
  // ],
};
// console.log(initialState);

// creating context
export const global = createContext(initialState);

// provider component
export const ProviderComponent = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  // getting trans using axios
  async function getTrans() {
    try {
      const result = await axios.get("/api/transactions");

      dispatch({ type: "GET_TRANSACTION", payload: result.data.data });
    } catch (error) {
      // console.log(error);
    }
  }

  async function deleteTrans(id) {
    await axios.delete(`api/transactions/${id}`);
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
    // console.log(id)
  }
  async function addTrans(payload) {
    const config = {
      headers: { "content-type": "application/json" },
    };
    try {
      const res = await axios.post(`api/transactions/`, payload, config);

      dispatch({ type: "ADD_TRANSACTION", payload: res.data.data });
    } catch (error) {
      console.log(error);
    }

    // dispatch({ type: "ADD_TRANSACTION", payload: payload });
    // console.log(id)
  }

  return (
    <global.Provider
      value={{
        transactionProviderVal: state.transac,
        deleteTrans,
        addTrans,
        getTrans,
        errorProvided: state.error,
        loadingProvided: state.loading,
      }}
    >
      {children}
    </global.Provider>
  );
};
