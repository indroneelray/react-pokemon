import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
type Props = {};

export default function AppRouter({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
      </Routes>
    </BrowserRouter>
  );
}
