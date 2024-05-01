import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Main = lazy(() => import("./Main"));
const Loading = lazy(() => import("./Loading"));

export default function home() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/main" Component={Main} />
        <Route path="/loading" Component={Loading} />
      </Routes>
    </div>
  );
}
