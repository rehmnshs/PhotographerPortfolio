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
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  setpic1,
  setpic2,
  setpic3,
  setpic4,
  setpic5,
  setpic6,
  setpic7,
  setpic8,
  setpic9,
  setpic10,
  setpic11,
  setpic12,
  setpic13,
  setpic14,
  setpic15,
  setpic16,
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
    </>
  );
}

export default App;
