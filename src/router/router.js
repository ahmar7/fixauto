import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Top from "../components/Top.js";
import ServiceDetails from "../pages/ServiceDetails.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/ServiceDetail" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
