import "./App.css";
import Router from "./components/login/Router";
import { setUserAddress } from "./services/Authentication";

function App() {
  setUserAddress();
  return (
      <Router />

  );
}

export default App;
