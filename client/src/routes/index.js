import { Routes, Route } from "react-router-dom";
import PageProducts from "../pages/product";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PageProducts />} path="/home" />
      </Routes>
    </>
  );
};

export default Router;
