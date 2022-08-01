import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import PageProducts from "../pages/product";
import Register from "../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PageProducts />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
      </Routes>
    </>
  );
};

export default Router;
