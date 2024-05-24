import Balance from "./components/Balance";
import History from "./components/History";
import Transactions from "./components/Transactions";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <div className="container">
          <h1>Expense Tracker</h1>
          <Balance />
          <History />
          <Transactions />
        </div>
      </GlobalContextProvider>
    </>
  );
}

export default App;
