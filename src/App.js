import './App.css';
import LoginClassComponent from './components/login/LoginClassComponent';
import { LoginFunctionalComponent } from './components/login/LoginFunctionalComponent';
import CryptoListClassComponent from './components/cryptolist/CryptoListClassComponent'
import {CryptoListFunctionalComponent} from './components/cryptolist/CryptoListFunctionalComponent.js'
function App() {
  return (
    <div className="App">
    <LoginClassComponent/>
    <LoginFunctionalComponent/>
    <CryptoListClassComponent/>
    <CryptoListFunctionalComponent/>
    </div>
  );
}

export default App;
