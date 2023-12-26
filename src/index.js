import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactd2 from "./components/Contactd2";
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
  const pic1Source = pic1
  const pic2Source = pic2
  const pic3Source = pic3
  const pic4Source = pic4
  const pic5Source = pic5
  const pic6Source = pic6
  const pic7Source = pic7
  const pic8Source = pic8
  const pic9Source = pic9
  const  pic10Source = pic10
  const  pic11Source = pic11
  const  pic12Source = pic12
  const  pic13Source = pic13
  const  pic14Source = pic14
  const  pic15Source = pic15
  const  pic16Source = pic16

  //Content
  const mail = "samples@gmail.com";
  const insta = "https://www.instagram.com"
  const linkedIn = "https://www.linkedin.com"
  const para = "Hi I’m Daniel Aristizábal, but call me Dani. I work as an art director " +
      "and digital artist working across the fields of arts, fashion and " +
      "entertainment, bringing forward new technologies to create stunning " +
      "and inspiring artworks"

  

  //Content
  const email = `mailto:${mail}`;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
        
          email={email}
          insta={insta}
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
         
        />
      ),
    },
    {
      path: "/info",
      element: (
        <Contactd2 para={para}  insta={insta} email={email}  linkdin={linkedIn}/>
      ),
    },


  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));