import { Routes, Route } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "../pages/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/homeprueba" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
