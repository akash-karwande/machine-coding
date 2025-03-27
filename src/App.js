import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div className="app">
      <AppLayout />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRouter} />);
