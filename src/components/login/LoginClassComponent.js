import React, { Component } from "react";
import "../../view/login.css";

const loginFunction = (loginState) => {
  return new Promise((resolve, reject) => {
    resolve(!loginState);
  });
};

export default class LoginClassComponent extends Component {
  constructor() {
    super();
    this.state = { login: false };
  }
  render() {
    return (
      <button
        className="loginButton"
        onClick={async () => {
          this.setState({ login: await loginFunction(this.state.login) });
        }}
      >
        {(this.state.login && "Logout") || "Login"} in ClassComponent
      </button>
    );
  }
}
