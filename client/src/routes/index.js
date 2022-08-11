import { Routes, Route } from "react-router-dom";
import AdSinglePage from "../pages/adSinglePage";
import Login from "../pages/login";
import PageNotFound from "../pages/pageNotFound";
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
        <Route element={<AdSinglePage />} path="/product-page/:id" />
        <Route element={<ProfilePageProduct/>} path="/profile-products/:name"/>
        <Route element={<PageNotFound/>} path="/*"/>
      </Routes>
    </>
  );
};

export default Router;
