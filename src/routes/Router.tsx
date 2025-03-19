import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/LoadingComponent";

const Home = React.lazy(() => import("../pages/Home/index"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
