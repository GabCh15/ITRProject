import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./Routes";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div>
          {routes.map((route) => (
            <Link to={route.route}>{route.route}</Link>
          ))}
        </div>
        <Routes>
          {routes.map((route) => (
            <Route path={route.route} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
