import React from "react";
import { global } from "../context/Global";

export default function Balance() {
  const { transactionProviderVal } = React.useContext(global);

  const amount = transactionProviderVal.reduce((acc, i) => (acc += i.amount), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${amount}</h1>
    </>
  );
}
