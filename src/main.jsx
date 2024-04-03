import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaketPage from "./pages/Paket/";
import AboutPage from "./pages/about.jsx";
import FaqPage from "./pages/faq.jsx";
import NotFound from "./pages/notfound.jsx";
import Home from "./pages/home.jsx";
import BromoPage from "./pages/Paket/bromo.jsx";
import TumpakPage from "./pages/Paket/tumpaksewu.jsx";
import TumpakBromoPage from "./pages/Paket/tumpakbromo.jsx";
import IjenPage from "./pages/Paket/ijen.jsx";
import IjenBaluranPage from "./pages/Paket/ijenbaluran.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    basename: "/badak-vite-test/",
  },
  {
    path: "/paket",
    element: <PaketPage />,
  },
  {
    path: "/paket/bromo",
    element: <BromoPage />,
  },
  {
    path: "/paket/tumpaksewu",
    element: <TumpakPage />,
  },
  {
    path: "/paket/tumpak-bromo",
    element: <TumpakBromoPage />,
  },
  {
    path: "/paket/ijen",
    element: <IjenPage />,
  },
  {
    path: "/paket/ijen-baluran",
    element: <IjenBaluranPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
