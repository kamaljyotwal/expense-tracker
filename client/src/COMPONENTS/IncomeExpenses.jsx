import React, { useContext } from "react";
import { global } from "../context/Global";

export default function IncomeExpenses() {
  const { transactionProviderVal } = useContext(global);
  const amounts = transactionProviderVal.map((transaction) => transaction.amount);
  // console.log(amounts);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * (-1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}
