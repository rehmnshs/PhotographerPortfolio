import { useState } from "react";
import "./App.css";

import Design2 from "./components/Design2";

function App({
  arrayimgs,
  setarrayimgs,
  logo,
  setLogo,
  email,
  insta,
  setEmail,
  setInsta,
  pic1Source,
  pic2Source,
  pic3Source,
  pic4Source,
  pic5Source,
  pic6Source,
  pic7Source,
  pic8Source,
  pic9Source,
  pic10Source,
  pic11Source,
  pic12Source,
  pic13Source,
  pic14Source,
  pic15Source,
  pic16Source,
  
}) {
  return (
    <>
      <Design2
        setarrayimgs={setarrayimgs}
        arrayimgs={arrayimgs}
        logo={logo}
        setLogo={setLogo}
        email={email}
        insta={insta}
        setInsta={setInsta}
        setEmail={setEmail}
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
    </>
  );
}

export default App;