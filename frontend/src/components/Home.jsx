import {React,lazy} from "react";
import { Routes, Route } from "react-router-dom";
const Main = lazy(()=>import("./Main"));

export default function home() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/main" Component={Main} />
      </Routes>
    </div>
  );
}
