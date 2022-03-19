import React, { Component, useState } from "react";
import { loginFunction, logOutFunction } from "../../services/Authentication";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "../../model/Routes";
import "../../view/navbar.css";

export var NavBar = () => {
  var [currentPage, setCurrentPage] = useState("profile");
  var routesByRole = (roleRoutes) =>
    roleRoutes.routes.map((route) => (
      <Link
        to={route.route}
        className={
          (currentPage === route.route ? "nav-item-active " : "") +
          "nav-item nav-link nav-item-route"
        }
        key={route.route}
        onClick={() => setCurrentPage(route.route)}
      >
        <span>{route.text}</span>
      </Link>
    ));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pe-5 ps-5 d-flex justify-content-center mt-5">
        
          {(window.role === "admin" && routesByRole(routes[0])) ||
            (window.role === "user" && routesByRole(routes[1])) ||
            routesByRole(routes[2])}
        
        
      </nav>
    </>
  );
};

export default class Router extends Component {
  constructor() {
    super();
    this.state = {
      login: !(window.localStorage.getItem("userAddress") == null),
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <div className="d-flex justify-content-center mt-5">
            <Routes>
              {routes[0].routes.map((route) => (
                <Route
                  key={route.route}
                  path={route.route}
                  element={route.component(this.state.login, async () =>
                    this.setState({
                      login:
                        (!this.state.login &&
                          (await loginFunction(this.state.login))) ||
                        logOutFunction(),
                    })
                  )}
                />
              ))}
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
