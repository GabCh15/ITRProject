import React, { useState } from "react";
import "../../view/login.css";
import {loginFunction} from "../../services/LoginService"
export const LoginFunctionalComponent = () => {
  const [login, setLogin] = useState(false);

  return (
    <button
      className="loginButton"
      onClick={async () => {
        setLogin(await loginFunction(login));
      }}
    >
      {(login && "Logout") || "Login"} in FunctionalComponent
    </button>
  );
};
