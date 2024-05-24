import { createContext, useReducer, useEffect } from "react";
import globalReducer from "./GlobalReducer";

function loadLocalStorage() {
  const localTransactions = localStorage.getItem("localTransaction");
  return localTransactions ? JSON.parse(localTransactions) : [];
}

const initialState = {
  transactions: loadLocalStorage(),
  createTransaction: () => {},
  removeTransaction: () => {},
};

export const GlobalContext = createContext(initialState);

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "localTransaction",
      JSON.stringify(state.transactions)
    );
  }, [state]);

  useEffect(() => {
    const storedValue = localStorage.getItem("localTransaction");
    if (storedValue) {
      dispatch({
        type: "LOAD_STORAGE",
        payload: JSON.parse(storedValue),
      });
    }
  }, []);

  function createTransaction(newIncome) {
    dispatch({
      type: "CREATE_TRANSACTION",
      payload: newIncome,
    });
  }

  function removeTransaction(id) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  }

  const globalElem = {
    transactions: state.transactions,
    createTransaction,
    removeTransaction,
  };

  return (
    <GlobalContext.Provider value={globalElem}>
      {children}
    </GlobalContext.Provider>
  );
}
