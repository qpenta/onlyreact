import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import './background.css';
import Home from './pages/Home'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/Home",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




