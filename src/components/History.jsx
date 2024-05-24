import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function History() {
  const { removeTransaction, transactions } = useContext(GlobalContext);

  const noContent = transactions.length === 0;

  return (
    <div className="history">
      <h2>History</h2>
      <div className="line"></div>
      <ul className="historyItems">
        {noContent ? (
          <p className="feedbackText">No transactions recorded</p>
        ) : null}
        {transactions.map((transaction) => (
          <li
            className={transaction.amount < 0 ? "expense" : "income"}
            key={transaction.id}
          >
            <p>{transaction.text}</p>
            <p>
              {transaction.amount < 0 ? "" : "+"}
              {transaction.amount}
            </p>
            <button
              onClick={() => removeTransaction(transaction.id)}
              className="removeBtn"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
