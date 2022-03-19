
import { CryptoListFunctionalComponent } from "../components/cryptolist/CryptoListFunctionalComponent.js";
import AuthManager from "../components/login/AuthManager";

export var routes = [
  {
    role: "admin",
    routes: [
      {
        route: "profile",
        component: (login,changeLoginState) => <AuthManager login={login} changeLoginState={changeLoginState}/>,
        text: "Profile",
      },
      {
        route: "cryptoListFunctional",
        component: (login,changeLoginState)=><CryptoListFunctionalComponent login={login} changeLoginState={changeLoginState}/>,
        text: "Cryptos",
      },
    ],
  },
  {
    role: "user",
    routes: [
      {
        route: "profile",
        component: (login,changeLoginState) => <AuthManager login={login} changeLoginState={changeLoginState}/>,
        text: "Profile",
      },
      {
        route: "cryptoListFunctional",
        component: (login,changeLoginState)=><CryptoListFunctionalComponent login={login} changeLoginState={changeLoginState}/>,
        text: "Cryptos",
      },
    ],
  },
  {
    role: "none",
    routes: [
      {
        route: "profile",
        component: (login,changeLoginState) =>  <AuthManager login={login} changeLoginState={changeLoginState}/>,
        text: "Profile",
      },
    ],
  },
];
