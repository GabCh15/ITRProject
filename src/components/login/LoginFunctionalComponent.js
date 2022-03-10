import React, { useState } from "react";
import "../../view/login.css";

const loginFunction = (loginState) => {
  return new Promise((resolve, reject) => {
    resolve(!loginState);
  });
};

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
