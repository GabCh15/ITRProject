import LoginClassComponent from "./components/login/LoginClassComponent";
import { LoginFunctionalComponent } from "./components/login/LoginFunctionalComponent";
import CryptoListClassComponent from "./components/cryptolist/CryptoListClassComponent";
import { CryptoListFunctionalComponent } from "./components/cryptolist/CryptoListFunctionalComponent.js";

export var routes = [
  {
    role: "admin",
    routes: [
      { route: "/", component: <div /> },
      { route: "loginClass", component: <LoginClassComponent /> },
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
    routes: [
      { route: "/", component: <div /> },
      { route: "loginClass", component: <LoginClassComponent /> },
    ],
  },
];
