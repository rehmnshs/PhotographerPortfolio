import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactd2 from "./components/Contactd2";
import Stories from "./meh/Stories";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";
import pic7 from "./assets/pic7.png";
import pic8 from "./assets/pic8.png";
import pic9 from "./assets/pic9.png";
import pic10 from "./assets/pic10.png";
import pic11 from "./assets/pic11.png";
import pic12 from "./assets/pic12.png";
import pic13 from "./assets/pic13.png";
import pic14 from "./assets/pic14.png";
import pic15 from "./assets/pic15.png";
import pic16 from "./assets/pic16.png";

const Index = () => {
  //contents of all pages
  const emails = "mailto:" + "rehmnshs@gmail.com";
  const [email, setEmail] = useState("");
  const [insta, setInsta] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [para, setpara] = useState(
    "Hi I’m Daniel Aristizábal, but call me Dani. I work as an art director " +
      "and digital artist working across the fields of arts, fashion and " +
      "entertainment, bringing forward new technologies to create stunning " +
      "and inspiring artworks"
  );

  const [logo, setLogo] = useState();
  const [arrayimgs, setarrayimgs] = useState([]);

  const [pic1Source, setpic1Source] = useState([pic1, null]);
  const [pic2Source, setpic2Source] = useState([pic2, null]);
  const [pic3Source, setpic3Source] = useState([pic3, null]);
  const [pic4Source, setpic4Source] = useState([pic4, null]);
  const [pic5Source, setpic5Source] = useState([pic5, null]);
  const [pic6Source, setpic6Source] = useState([pic6, null]);
  const [pic7Source, setpic7Source] = useState([pic7, null]);
  const [pic8Source, setpic8Source] = useState([pic8, null]);
  const [pic9Source, setpic9Source] = useState([pic9, null]);
  const [pic10Source, setpic10Source] = useState([pic10, null]);
  const [pic11Source, setpic11Source] = useState([pic11, null]);
  const [pic12Source, setpic12Source] = useState([pic12, null]);
  const [pic13Source, setpic13Source] = useState([pic13, null]);
  const [pic14Source, setpic14Source] = useState([pic14, null]);
  const [pic15Source, setpic15Source] = useState([pic15, null]);
  const [pic16Source, setpic16Source] = useState([pic16, null]);

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
          pic1Source={pic1Source}
          pic2Source={pic2Source}
          pic3Source={pic3Source}
          pic4Source={pic4Source}
          pic5Source={pic5Source}
          pic6Source={pic6Source}
          pic7Source={pic7Source}
          pic8Source={pic8Source}
          pic9Source={pic9Source}
          pic10Source={pic10Source}
          pic11Source={pic11Source}
          pic12Source={pic12Source}
          pic13Source={pic13Source}
          pic14Source={pic14Source}
          pic15Source={pic15Source}
          pic16Source={pic16Source}
          setpic1Source={setpic1Source}
          setpic2Source={setpic2Source}
          setpic3Source={setpic3Source}
          setpic4Source={setpic4Source}
          setpic5Source={setpic5Source}
          setpic6Source={setpic6Source}
          setpic7Source={setpic7Source}
          setpic8Source={setpic8Source}
          setpic9Source={setpic9Source}
          setpic10Source={setpic10Source}
          setpic11Source={setpic11Source}
          setpic12Source={setpic12Source}
          setpic13Source={setpic13Source}
          setpic14Source={setpic14Source}
          setpic15Source={setpic15Source}
          setpic16Source={setpic16Source}
        />
      ),
    },
    {
      path: "/info",
      element: (
        <Contactd2 para={para} setpara={setpara} insta={insta} setInsta={setInsta} email={email} setEmail={setEmail} linkdin={linkedIn} setLinkedIn={setLinkedIn}/>
      ),
    },


  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));