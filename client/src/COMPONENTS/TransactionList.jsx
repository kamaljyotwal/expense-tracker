import React, { useContext, useEffect } from "react";
import { global } from "../context/Global";

export default function TransactionList() {
  const { transactionProviderVal, deleteTrans, getTrans } = useContext(global);

  useEffect(() => {
    getTrans();
    console.log("done");
    // eslint-disable-next-line
  }, []);

  // console.log(transactionProviderVal);
  return (
    <>
      {/* key={i.index} */}
      <h3>History</h3>
      <ul className="list">
        {transactionProviderVal.map((i) => (
          <li className={i.amount < 0 ? "minus" : "plus"} key={i._id}>
            {i.text}
            <span>
              {i.amount < 0 ? "-" : "+"}${Math.abs(i.amount)}
            </span>
            <button className="delete-btn" onClick={(e) => deleteTrans(i._id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
