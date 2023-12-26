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
  const emails = "mailto:"+"rehmnshs@gmail.com";
const [email,setEmail] = useState("");
const [insta,setInsta] = useState("");
  const [para, setpara] = useState(
    "Hi I’m Daniel Aristizábal, but call me Dani. I work as an art director " +
      "and digital artist working across the fields of arts, fashion and " +
      "entertainment, bringing forward new technologies to create stunning " +
      "and inspiring artworks"
  );

  const [logo, setLogo] = useState();
  const [arrayimgs, setarrayimgs] = useState([]);

const [pic1,setpic1] = useState();
const [pic2,setpic2] = useState();
const [pic3,setpic3] = useState();
const [pic4,setpic4] = useState();
const [pic5,setpic5] = useState();
const [pic6,setpic6] = useState();
const [pic7,setpic7] = useState();
const [pic8,setpic8] = useState();
const [pic9,setpic9] = useState();
const [pic10,setpic10] = useState();
const [pic11,setpic11] = useState();
const [pic12,setpic12] = useState();
const [pic13,setpic13] = useState();
const [pic14,setpic14] = useState();
const [pic15,setpic15] = useState();
const [pic16,setpic16] = useState();



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
          setEmail={setEmail}
          setInsta={setInsta}
          pic1={pic1}
          pic2={pic2}
          pic3={pic3}
          pic4={pic4}
          pic5={pic5}
          pic6={pic6}
          pic7={pic7}
          pic8={pic8}
          pic9={pic9}
          pic10={pic10}
          pic11={pic11}
          pic12={pic12}
          pic13={pic13}
          pic14={pic14}
          pic15={pic15}
          pic16={pic16}
          setpic1={setpic1}
          setpic2={setpic2}
          setpic3={setpic3}
          setpic4={setpic4}
          setpic5={setpic5}
          setpic6={setpic6}
          setpic7={setpic7}
          setpic8={setpic8}
          setpic9={setpic9}
          setpic10={setpic10}
          setpic11={setpic11}
          setpic12={setpic12}
          setpic13={setpic13}
         setpic14={setpic14}
          setpic15={setpic15}
          setpic16={setpic16}

  
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
