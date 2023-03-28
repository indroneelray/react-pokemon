import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./commpon-components/Navbar";
import Homepage from "./pages/Homepage/Homepage";
type Props = {};

export default function AppRouter({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}> {/*HOC*/}
          <Route path="/" Component={Homepage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
