import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import WhyUs from "./components/WhyUs/WhyUs";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="pricing" element={<Pricing />}></Route>
      <Route path="whyus" element={<WhyUs />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
