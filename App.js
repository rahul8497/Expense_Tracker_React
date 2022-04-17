import React from "react";
import Header from "./Header";
import "./App.css";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
const App = () => {
  return (
    <div className="bg">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
        
      </GlobalProvider>
    </div>
  );
};

export default App;
