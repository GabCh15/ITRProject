import "./App.css";
import Router from "./Router";
import { setUserAddress } from "./services/LoginService";

function App() {
  setUserAddress();
  return (
    <div className="container-fluid">
      <Router />
    </div>
  );
}

export default App;
