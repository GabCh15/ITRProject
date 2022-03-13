import React, { useState, useEffect } from "react";
import "../../view/login.css";
import { loginFunction } from "../../services/LoginService";

var useLoginStatus = (loginStatus) => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(loginStatus);
  },[loginStatus]);

  return login;
};

var useLoginStatusView = (loginStatus) => {
  var login = useLoginStatus(loginStatus);
  return <span>{(login && "Logout") || "Login"} in FunctionalComponent</span>;
};

export const LoginFunctionalComponent = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  var loginStatusView = useLoginStatusView(loginStatus);
  return (
    <button
      className="loginButton"
      onClick={async () => {
        setLoginStatus(await loginFunction(loginStatus));
      }}
    >
      {loginStatusView}
    </button>
  );
};
