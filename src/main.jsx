import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Edit from "./pages/Edit.jsx";
import { AppRoutes } from "./config/Routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Home />,
  },
  {
    path: AppRoutes.CREATE,
    element: <Create />,
  },
  {
    path: AppRoutes.EDIT,
    element: <Create />,
  },
  {
    path: AppRoutes.EDIT_USER,
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
