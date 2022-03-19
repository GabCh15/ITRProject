import React, { Component } from "react";
import LoginClassComponent from "./LoginClassComponent";

export default class AuthManager extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center flex-column">
        {this.props.login && <Profile />}
        <div className="d-flex justify-content-center mt-5">
          <LoginClassComponent
            login={this.props.login}
            changeLoginState={this.props.changeLoginState}
          />
        </div>
        
      </div>
    );
  }
}

export class Profile extends Component {
  render() {
    return (
      <>
      
      <div className="card mb-3" style={{ width: "20rem" }}>
      <h1 style={{padding: "8px 16px "}}>Profile Info</h1>
        <img
          src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          className="card-img-top"
          alt="..."
        />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">Wallet ID:</span> {window.userAddress}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Role:</span> {window.role}
          </li>
        </ul>
      </div></>
    );
  }
}
