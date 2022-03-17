import "./App.css";
import Router from "./Router";
import { setUserAddress } from "./services/LoginService";

function App() {
  setUserAddress();
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
