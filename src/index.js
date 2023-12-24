import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import img5 from ".././src/assets/img5.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactd2 from "./components/Contactd2";
import Stories from "./meh/Stories";
import Header from "./meh/Header";

const Index = () => {
  //contents of all pages
  const insta = "https://9animehq.to/home";
  const email = "mailto:"+"rehmnshs@gmail.com";

  const [para, setpara] = useState(
    "Hi I’m Daniel Aristizábal, but call me Dani. I work as an art director " +
      "and digital artist working across the fields of arts, fashion and " +
      "entertainment, bringing forward new technologies to create stunning " +
      "and inspiring artworks"
  );

  const [logo, setLogo] = useState();
  const [arrayimgs, setarrayimgs] = useState([]);


  //contents of all pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          arrayimgs={arrayimgs}
          setarrayimgs={setarrayimgs}
          logo={logo}
          setLogo={setLogo}
          email={email}
          insta={insta}
        />
      ),
    },
    {
      path: "/info",
      element: <Contactd2 para={para} setpara={setpara} insta={insta} email={email} />,
    },

    {
      path: "/header",
      element: <Header />,
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
