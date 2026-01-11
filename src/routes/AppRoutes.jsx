import { BrowserRouter, Routes, Route } from "react-router";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

// importar paginas
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Archived from "../pages/Archived";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas privadas */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/archived" element={<Archived />} />
        </Route>

        {/* rutas publicas */}
        <Route element={<PublicRoutes />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
