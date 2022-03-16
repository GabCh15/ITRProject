import "./App.css";
import LoginClassComponent from "./components/login/LoginClassComponent";
import { LoginFunctionalComponent } from "./components/login/LoginFunctionalComponent";
import CryptoListClassComponent from "./components/cryptolist/CryptoListClassComponent";
import { CryptoListFunctionalComponent } from "./components/cryptolist/CryptoListFunctionalComponent.js";
import Router from './Router'
function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
