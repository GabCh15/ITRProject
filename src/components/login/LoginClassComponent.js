import React, { Component } from "react";
import "../../view/login.css";

export default class LoginClassComponent extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-info justify-content-center btn-modified"
        onClick={() => {
          this.props.changeLoginState();
        }}
      >
        {(this.props.login && "Logout from Ethereum") || "Login with Ethereum"}
      </button>
    );
  }
}
