export default function globalReducer(state, action) {
  if (action.type === "LOAD_STORAGE") {
    return { ...state, transactions: action.payload };
  }

  if (action.type === "CREATE_TRANSACTION") {
    const newValue = [...state.transactions, action.payload];
    return {
      ...state,
      transactions: newValue,
    };
  }

  if (action.type === "REMOVE_TRANSACTION") {
    const newElem = state.transactions.filter(
      (elem) => elem.id !== action.payload
    );
    return { ...state, transactions: newElem };
  }

  return state;
}
