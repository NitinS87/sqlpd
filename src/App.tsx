import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ResultContextProvider } from "./context/ResultContext";
import { TabContextProvider } from "./context/TabContext";

function App() {
  return (
    <TabContextProvider>
      <ResultContextProvider>
        <div className="min-h-screen w-full overflow-auto bg-primary">
          <Navbar />
          <Main />
        </div>
      </ResultContextProvider>
    </TabContextProvider>
  );
}

export default App;
