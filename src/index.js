import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contactd2 from './components/Contactd2';
import Stories from './components/Stories';


import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/info",
    element: <Contactd2 />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },{
    path:"/header",
    element: <Header />
  }


]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);