import "./App.css";
import AddTransactions from "./COMPONENTS/AddTransactions";
import Balance from "./COMPONENTS/Balance";
import Header from "./COMPONENTS/Header";
import IncomeExpenses from "./COMPONENTS/IncomeExpenses";
import TransactionList from "./COMPONENTS/TransactionList";
import { ProviderComponent } from "./context/Global";

function App() {
  return (
    <ProviderComponent>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactions />
        </div>
      </div>
    </ProviderComponent>
  );
}

export default App;
