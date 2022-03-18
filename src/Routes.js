import LoginClassComponent from "./components/login/LoginClassComponent";
import { LoginFunctionalComponent } from "./components/login/LoginFunctionalComponent";
import CryptoListClassComponent from "./components/cryptolist/CryptoListClassComponent";
import { CryptoListFunctionalComponent } from "./components/cryptolist/CryptoListFunctionalComponent.js";

export var routes = [
  {
    role: "admin",
    routes: [
      {
        route: "loginClass",
        component: <LoginClassComponent className="justify-content-center" />,
      },
      { route: "loginFunctional", component: <LoginFunctionalComponent /> },
      { route: "cryptoListClass", component: <CryptoListClassComponent /> },
      {
        route: "cryptoListFunctional",
        component: <CryptoListFunctionalComponent />,
      },
    ],
  },
  {
    role: "none",
    routes: [{ route: "loginClass", component: <LoginClassComponent /> }],
  },
];
