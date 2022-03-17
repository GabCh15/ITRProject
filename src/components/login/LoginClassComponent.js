import React, { Component } from "react";
import "../../view/login.css";
import { loginFunction, logOutFunction } from "../../services/LoginService";

export default class LoginClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      login: !(window.localStorage.getItem("userAddress") == null),
    };
  }

  render() {
    return (
      <button
        className="loginButton"
        onClick={async () => {
          this.setState({
            login:
              (!this.state.login && (await loginFunction(this.state.login))) ||
              logOutFunction(),
          });
        }}
      >
        {(this.state.login && "Logout") || "Login"} {window.userAddress} in
        ClassComponent Role: {window.role}
      </button>
    );
  }
}
