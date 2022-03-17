import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./Routes";

var routesByRole = (roleRoutes) =>
  roleRoutes.routes.map((route) => <Link to={route.route}>{route.route}</Link>);

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div>
          {(window.role == "admin" && routesByRole(routes[0])) ||
            routesByRole(routes[1])}
        </div>
        <Routes>
          {routes[0].routes.map((route) => (
            <Route path={route.route} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
