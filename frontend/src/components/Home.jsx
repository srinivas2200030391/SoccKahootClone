import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Main = lazy(() => import("./Main"));
const Loading = lazy(() => import("./Loading"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./Signup"));

export default function home() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/main" Component={Main} />
        <Route path="/loading" Component={Loading} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </div>
  );
}
