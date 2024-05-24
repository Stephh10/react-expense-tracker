import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((elem) => elem.amount);
  const total = amount.reduce((elem, num) => (elem += num), 0);

  const income = amount
    .filter((amount) => amount > 0)
    .reduce((elem, num) => {
      elem += num;
      return elem;
    }, 0);

  const expense = amount
    .filter((amount) => amount < 0)
    .reduce((elem, num) => (elem += num), 0);

  return (
    <div className="balance">
      <h3>YOUR BALANCE</h3>
      <h2>${total}</h2>
      <div className="balanceType">
        <div>
          <p>Income</p>
          <p>{income}$</p>
        </div>
        <div>
          <p>Expense</p>
          <p>{expense}$</p>
        </div>
      </div>
    </div>
  );
}
