import React, { useState, useContext } from "react";
import { global } from "../context/Global";
// import { v4 as uuidv4 } from "uuid";

export default function AddTransactions() {
  const { addTrans } = useContext(global);

  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    addTrans({
      amount: parseInt(amount),
      text: text,
    });
    // addTrans({
    //   id: uuidv4(),
    //   amount: parseInt(amount),
    //   text: text,
    // });
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={(e) => submit(e)}>
          Add transaction
        </button>
      </form>
    </>
  );
}
