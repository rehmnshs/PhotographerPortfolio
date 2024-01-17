import { useState } from "react";
import "./App.css";

import Design2 from "./components/Design2";

function App({
  setuid,
  arrayimgs,
  setarrayimgs,
  logo,
  setLogo,
  email,
  insta,
  setEmail,
  setInsta,
  username,
  setusername,
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
  setpic1Source,
  setpic2Source,
  setpic3Source,
  setpic4Source,
  setpic5Source,
  setpic6Source,
  setpic7Source,
  setpic8Source,
  setpic9Source,
  setpic10Source,
  setpic11Source,
  setpic12Source,
  setpic13Source,
  setpic14Source,
  setpic15Source,
  setpic16Source,
  host
}) {
  return (
    <>
      <Design2
      setuid ={setuid}
        setarrayimgs={setarrayimgs}
        arrayimgs={arrayimgs}
        logo={logo}
        setLogo={setLogo}
        email={email}
        insta={insta}
        setInsta={setInsta}
        setEmail={setEmail}
        username = {username}
        setusername = {setusername}
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
          host={host}
      />
    </>
  );
}

export default App;