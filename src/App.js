import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import Body from "./Components/Body.jsx";
import Header from "./Components/Header.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Error from "./Components/Error.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import Grocery from "./Components/Grocery.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
