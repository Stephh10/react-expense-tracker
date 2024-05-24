import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function Transactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { createTransaction } = useContext(GlobalContext);

  function handleDataSubmit(e) {
    e.preventDefault();
    createTransaction({
      id: Math.random() * 1000,
      text: text,
      amount: parseFloat(amount),
    });
    setText("");
    setAmount("");
  }

  return (
    <form onSubmit={handleDataSubmit} className="transactions">
      <h2>Add new transaction</h2>
      <div className="line"></div>

      <div className="action">
        <label htmlFor="Text">Text</label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="action">
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button>Add Transaction</button>
    </form>
  );
}
