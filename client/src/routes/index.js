import { Routes, Route } from "react-router-dom";
import PageProducts from "../pages/product";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PageProducts />} path="/" />
      </Routes>
    </>
  );
};

export default Router;
