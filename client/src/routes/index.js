import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import PageProducts from "../pages/product";
import ProfilePageProduct from "../pages/profileProductPage";
import Register from "../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PageProducts />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<ProfilePageProduct/>} path="/profile-products"/>
      </Routes>
    </>
  );
};

export default Router;
