import React, { Component } from "react";
import "../../view/login.css";
import {loginFunction} from "../../services/LoginService"


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
