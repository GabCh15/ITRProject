import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./Routes";

var routesByRole = (roleRoutes) =>
  roleRoutes.routes.map((route) => (
    <div className="nav-item nav-link active">
      <Link style={{color:"black", textDecoration:"none"}} to={route.route}>{route.route}</Link>
    </div>
  ));

function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="nav nav-tabs">
          {(window.role == "admin" && routesByRole(routes[0])) ||
            routesByRole(routes[1])}
        </div>

        <Routes>
          {routes[0].routes.map((route) => (
            <Route path={route.route} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
